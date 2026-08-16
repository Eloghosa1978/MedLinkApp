# Doctor Routes Documentation

## Overview

The doctor routes module (`doctor.routes.ts`) provides two main endpoints for discovering and retrieving detailed information about doctors. Both routes are protected with authentication and follow a **middleware → validation → controller → service** architecture pattern.

---

## Route 1: Doctor Discovery

**Endpoint:** `GET /doctors`

### Route Middleware Stack

```
GET / 
├─ authMiddleware           # Verifies user authentication & token validity
├─ loadUserMiddleware       # Loads current user data into req.user
├─ doctorDiscoveryValidator # Validates query parameters
├─ validateRequest          # Returns 400 if validation fails
└─ doctorDiscoveryController # Processes request and calls service layer
```

### Request Flow Sequence

1. **Authentication Check** (`authMiddleware`): Verifies user is logged in and has a valid token
2. **User Loading** (`loadUserMiddleware`): Loads current user data into `req.user` context
3. **Input Validation** (`doctorDiscoveryValidator`): Validates all query parameters against rules
4. **Validation Error Handling** (`validateRequest`): If validation fails, returns 400 with error details
5. **Controller Execution** (`doctorDiscoveryController`): Processes valid request and calls service layer

### Query Parameters

| Parameter | Type | Required | Default | Validation |
|-----------|------|----------|---------|-----------|
| `search` | string | No | — | 1-100 characters, searches name or qualifications |
| `primarySpecialization` | string | No | — | Must be in SPECIALIZATIONS list |
| `specializations` | string | No | — | Comma-separated; each must be in SPECIALIZATIONS |
| `practiceType` | string | No | — | One of: `hospital`, `private`, `both` |
| `consultationMode` | string | No | — | One of: `physical`, `virtual` |
| `minFee` | number | No | — | Non-negative float |
| `maxFee` | number | No | — | Non-negative float |
| `city` | string | No | — | Location filter (exact match) |
| `state` | string | No | — | Location filter (exact match) |
| `country` | string | No | — | Location filter (exact match) |
| `sort` | string | No | `newest` | One of: `fee_asc`, `fee_desc`, `newest` |
| `page` (alias: `p`) | integer | No | 1 | Minimum: 1 |
| `limit` (alias: `l`) | integer | No | 10 | Minimum: 1, Maximum: 100 |

### Backend Service Logic

The service layer performs these operations in sequence:

#### 1. Search Query Building (`buildSearch`)
- Performs **case-insensitive regex search** on:
  - Doctor qualifications
  - Doctor specializations
  - Doctor names (via join with UserModel)
- Returns MongoDB `$or` query combining all matches
- Returns `null` if no search term provided

**Example:**
```typescript
search: "john"
// Looks for doctors where:
// - qualifications match "john" OR
// - specializations match "john" OR
// - associated user firstName/lastName matches "john"
```

#### 2. Filter Building (`buildFilters`)
- Constructs MongoDB filter object from provided parameters
- Applies location filters: `practiceLocation.city/state/country`
- Sets fee range using `$gte` (minFee) and `$lte` (maxFee) operators
- Combines multiple specializations with `$or` logic

**Example:**
```typescript
filters = {
  primarySpecialization: "Cardiology",
  "practiceLocation.city": "New York",
  consultationFee: { $gte: 300, $lte: 800 }
}
```

#### 3. Sorting (`buildSort`)
- `fee_asc`: Sorts by consultationFee ascending (cheapest first)
- `fee_desc`: Sorts by consultationFee descending (most expensive first)
- `newest`: Sorts by createdAt descending (default)

#### 4. Pagination (`buildPagination`)
- Calculates skip value: `(page - 1) * limit`
- Enforces constraints: `min page = 1`, `max limit = 100`
- Returns: `{ page, limit, skip }`

#### 5. Database Query Construction
```javascript
const finalQuery = searchQuery 
  ? { $and: [searchQuery, filterQuery] } 
  : filterQuery;

// Then adds mandatory filter:
const filterQuery = {
  ...buildFilters(filters),
  verificationStatus: "verified"  // Only verified doctors
};
```

### Response Format

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "doctors": [
      {
        "id": "string",
        "primarySpecialization": "string",
        "yearsOfExperience": "number",
        "consultationFee": "number",
        "verificationStatus": "verified",
        "practiceType": "hospital | private | both",
        "consultationModes": ["physical | virtual"],
        "location": {
          "country": "string",
          "state": "string"
        },
        "user": {
          "id": "string",
          "fullName": "string",
          "profileImage": "string (URL)",
          "gender": "male | female"
        },
        "hospital": {
          "id": "string",
          "name": "string"
        }
      }
    ],
    "pagination": {
      "page": "number",
      "limit": "number",
      "totalDoctors": "number",
      "totalPages": "number",
      "hasNextPage": "boolean",
      "hasPrevPage": "boolean"
    }
  }
}
```

**Error Response (500):**
```json
{
  "success": false,
  "code": "INTERNAL_SERVER_ERROR",
  "message": "Internal Server Error"
}
```

### Example Requests

#### Example 1: Search for Cardiologists in New York (sorted by fee)
```
GET /doctors?search=cardio&primarySpecialization=Cardiology&city=New%20York&sort=fee_asc&page=1&limit=10
```

**Backend Processing:**
1. Searches for "cardio" in qualifications, specializations, and names
2. Filters by primarySpecialization = "Cardiology"
3. Filters by city = "New York"
4. Sorts by consultationFee ascending
5. Returns first 10 results with pagination metadata

#### Example 2: Find affordable private practitioners
```
GET /doctors?practiceType=private&minFee=100&maxFee=500&sort=fee_asc&limit=20
```

**Backend Processing:**
1. Filters by practiceType = "private"
2. Filters by consultationFee between 100-500
3. Sorts by fee ascending (cheapest first)
4. Returns up to 20 results

#### Example 3: Virtual consultation specialists
```
GET /doctors?consultationMode=virtual&specializations=Psychiatry,Dermatology&page=2&limit=15
```

**Backend Processing:**
1. Filters by consultationModes = "virtual"
2. Filters where specializations include "Psychiatry" OR "Dermatology"
3. Skips first 15 results (page 2, limit 15)
4. Returns results 16-30

---

## Route 2: Doctor Details

**Endpoint:** `GET /doctors/:doctorId`

### Route Middleware Stack

```
GET /:doctorId
├─ authMiddleware           # Verifies user authentication
├─ loadUserMiddleware       # Loads current user data
├─ doctorDetailsValidator   # Validates doctorId parameter
└─ doctorDetailsController  # Retrieves and returns full details
```

### Parameter Validation

| Parameter | Type | Validation |
|-----------|------|-----------|
| `doctorId` | URL param | Must be valid MongoDB ObjectId format |

**Invalid doctorId formats** return `400 Bad Request`

### Backend Service Logic

#### 1. ObjectId Validation
```typescript
if (!mongoose.Types.ObjectId.isValid(doctorId)) {
  return null; // Controller returns 404
}
```

#### 2. Database Query with Joins
```typescript
const doctor = await DoctorModel.findById(doctorId)
  .populate("userId", "firstName lastName profileImage gender phoneNumber email")
  .populate("hospitalId", "name address isVerified")
  .lean()
  .exec();
```

Fetches:
- Doctor's profile data
- User info: firstName, lastName, profileImage, gender, phoneNumber, email
- Hospital info: name, address, isVerified

#### 3. Security Check
```typescript
if (!doctor) return null;  // Returns 404
if (doctor.verificationStatus !== "verified") return null;  // Returns 404
// Only verified doctors are returned to frontend
```

#### 4. Experience Calculation
```typescript
const specialistSinceYear = new Date(doctor.specialistSince).getFullYear();
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - specialistSinceYear;
```

#### 5. Data Transformation
Flattens nested objects for cleaner frontend consumption

### Response Format

**Success Response (200):**
```json
{
  "success": true,
  "code": "DOCTOR_FOUND",
  "data": {
    "id": "string",
    "primarySpecialization": "string",
    "specializations": ["string"],
    "yearsOfExperience": "number",
    "consultationFee": "number",
    "verificationStatus": "verified",
    "practiceType": "hospital | private | both",
    "consultationModes": ["physical | virtual"],
    "location": {
      "street": "string",
      "city": "string",
      "state": "string",
      "country": "string"
    },
    "biography": "string (up to 1000 chars)",
    "qualifications": ["string"],
    "user": {
      "id": "string",
      "fullName": "string",
      "profileImage": "string (URL)",
      "gender": "string",
      "phoneNumber": "string",
      "email": "string"
    },
    "hospital": {
      "id": "string",
      "name": "string",
      "address": {
        "street": "string",
        "city": "string",
        "state": "string",
        "country": "string"
      },
      "isVerified": "boolean"
    }
  }
}
```

**Error Responses:**

404 - Doctor Not Found:
```json
{
  "success": false,
  "code": "DOCTOR_NOT_FOUND",
  "message": "Doctor not found"
}
```
*(Returned if doctor doesn't exist or is not verified)*

400 - Invalid ID Format:
```json
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "message": "Invalid doctor Id"
}
```

500 - Internal Server Error:
```json
{
  "success": false,
  "code": "INTERNAL_SERVER_ERROR",
  "message": "Internal Server Error"
}
```

### Example Request

```
GET /doctors/507f1f77bcf86cd799439011
```

**Response Example:**
```json
{
  "success": true,
  "code": "DOCTOR_FOUND",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "primarySpecialization": "Cardiology",
    "specializations": ["Cardiology", "Internal Medicine"],
    "yearsOfExperience": 12,
    "consultationFee": 500,
    "practiceType": "hospital",
    "consultationModes": ["physical", "virtual"],
    "location": {
      "street": "123 Medical Plaza",
      "city": "New York",
      "state": "NY",
      "country": "USA"
    },
    "biography": "Experienced cardiologist with focus on preventative care...",
    "qualifications": ["MD - Harvard Medical School", "Board Certified Cardiologist"],
    "user": {
      "id": "6070bcf86cd799439011",
      "fullName": "Dr. John Smith",
      "profileImage": "https://cdn.example.com/profile/507f.jpg",
      "gender": "male",
      "phoneNumber": "+1-555-123-4567",
      "email": "john.smith@medlink.com"
    },
    "hospital": {
      "id": "6070bcf86cd799439012",
      "name": "Mount Sinai Medical Center",
      "address": {
        "street": "1468 Madison Avenue",
        "city": "New York",
        "state": "NY",
        "country": "USA"
      },
      "isVerified": true
    }
  }
}
```

---

## Frontend Integration Guide

### 1. Doctor Discovery - Search & Filter Page

**Use Case:** Building a doctor search/filter component

```typescript
// Frontend implementation concept
interface DiscoveryFilters {
  search?: string;
  primarySpecialization?: string;
  practiceType?: "hospital" | "private" | "both";
  minFee?: number;
  maxFee?: number;
  city?: string;
  page?: number;
  limit?: number;
}

async function searchDoctors(filters: DiscoveryFilters) {
  const params = new URLSearchParams();
  
  if (filters.search) params.append("search", filters.search);
  if (filters.primarySpecialization) params.append("primarySpecialization", filters.primarySpecialization);
  if (filters.practiceType) params.append("practiceType", filters.practiceType);
  if (filters.minFee) params.append("minFee", String(filters.minFee));
  if (filters.maxFee) params.append("maxFee", String(filters.maxFee));
  if (filters.city) params.append("city", filters.city);
  params.append("page", String(filters.page || 1));
  params.append("limit", String(filters.limit || 10));
  
  const response = await fetch(`/api/doctors?${params.toString()}`);
  return response.json();
}
```

**UI Components to Build:**
- Search input box
- Specialization dropdown/multi-select
- Practice type filter (hospital/private/both)
- Fee range slider (min-max)
- Location filters (city, state, country)
- Sort dropdown (fee_asc, fee_desc, newest)
- Pagination controls

### 2. Doctor Details - Profile Page

**Use Case:** Building individual doctor profile view

```typescript
async function getDoctorProfile(doctorId: string) {
  const response = await fetch(`/api/doctors/${doctorId}`);
  if (!response.ok) {
    if (response.status === 404) {
      // Show "Doctor not found" or redirect
    }
    throw new Error("Failed to fetch doctor details");
  }
  return response.json();
}
```

**UI Components to Build:**
- Doctor name & profile image
- Years of experience badge
- Specializations/qualifications list
- Consultation modes (Physical/Virtual) indicators
- Consultation fee display
- Practice type badge
- Hospital affiliation with verification status
- Full address
- Biography section
- Contact information (phone, email)

---

## Key Security & Data Considerations

| Feature | Implementation |
|---------|-----------------|
| **Authentication Required** | All routes require valid auth token (no public access) |
| **User Context Loading** | User data loaded for audit/logging purposes |
| **Verified Doctors Only** | Discovery endpoint only returns `verificationStatus: "verified"` |
| **Details Endpoint Security** | Returns 404 if doctor not verified (prevents info leakage) |
| **Input Sanitization** | RegExp special characters escaped to prevent injection attacks |
| **Pagination Safety** | Max 100 records per page enforced |
| **Type Safety** | TypeScript interfaces enforce response shape |
| **ObjectId Validation** | Details endpoint validates MongoDB ObjectId format |

---

## Common Frontend Use Cases

### Use Case 1: Filter doctors by specialty and location
```
GET /doctors?primarySpecialization=Cardiology&city=New%20York&page=1&limit=20
```

### Use Case 2: Find affordable options
```
GET /doctors?minFee=100&maxFee=500&sort=fee_asc&page=1&limit=10
```

### Use Case 3: Search by doctor name
```
GET /doctors?search=Dr.%20John&page=1&limit=10
```

### Use Case 4: Virtual consultation specialists
```
GET /doctors?consultationMode=virtual&sort=newest&page=1&limit=15
```

### Use Case 5: Get full profile for booking
```
GET /doctors/507f1f77bcf86cd799439011
```

---

## Error Handling Checklist

- [ ] Handle 400 validation errors (show which field is invalid)
- [ ] Handle 404 not found (show "doctor unavailable" or search again)
- [ ] Handle 500 server errors (show retry button)
- [ ] Handle network timeout (show connection error)
- [ ] Display loading state during API calls
- [ ] Cache discovery results for performance (optional)
- [ ] Validate ObjectId format before detail requests

---

## Notes for Team

1. **Discovery endpoint is paginated** — Always handle `hasNextPage`/`hasPrevPage` for UI
2. **Search is case-insensitive** — Users can type "john" or "JOHN"
3. **Only verified doctors visible** — Don't attempt to display unverified doctors
4. **Experience calculated dynamically** — Don't cache `yearsOfExperience`
5. **Location filters are exact matches** — Not partial/contains searches
6. **Fee filters are inclusive** — `minFee` and `maxFee` are both included in range
