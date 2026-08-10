# MedLink Phase 3 -- Doctor Discovery Design

## Goal

Allow authenticated patients to discover verified doctors through
searching, filtering, sorting, pagination, and viewing doctor profiles.

------------------------------------------------------------------------

## Existing Architecture

### Middleware

No new middleware is required.

Existing middleware: - Authentication (Firebase ID token verification) -
Authorization (role-based access where needed) - Validation - Global
error handling - Security middleware (Helmet, rate limiting, etc.)

------------------------------------------------------------------------

## Database Review

The existing Doctor schema is sufficient.

Key fields: - userId - primarySpecialization - specializations -
licenseNumber - licensedSince - specialistSince - qualifications -
biography - practiceType - hospitalId - practiceLocation -
consultationModes - consultationFee - verificationStatus

Notes: - Profile picture remains in the User document. - Years of
experience should be computed from `licensedSince`. - Availability
belongs to Phase 4, not this schema.

------------------------------------------------------------------------

## API Endpoints

### List Doctors

GET /api/doctors

### Doctor Details

GET /api/doctors/:doctorId

------------------------------------------------------------------------

## Query Parameters

  Parameter          Type     Default     Description
  ------------------ -------- ----------- --------------------------
  page               number   1           Current page
  limit              number   10          Items per page
  search             string   \-          Doctor name search
  specialization     string   \-          Filter by specialization
  practiceType       string   \-          hospital/private/both
  consultationMode   string   \-          physical/virtual
  minFee             number   \-          Minimum consultation fee
  maxFee             number   \-          Maximum consultation fee
  sort               string   relevance   Sorting option

------------------------------------------------------------------------

## Allowed Sort Values

-   experience_desc
-   experience_asc
-   fee_desc
-   fee_asc
-   name_asc
-   name_desc
-   newest

------------------------------------------------------------------------

## Validation Rules

### page

-   Integer
-   Minimum: 1

### limit

-   Integer
-   Range: 1-50

### practiceType

Allowed: - hospital - private - both

### consultationMode

Allowed: - physical - virtual

### doctorId

-   Must be a valid MongoDB ObjectId

------------------------------------------------------------------------

## Public Response Shape

``` json
{
  "id": "...",
  "fullName": "Dr John Doe",
  "profilePicture": "...",
  "primarySpecialization": "Cardiology",
  "practiceType": "hospital",
  "hospital": {
    "id": "...",
    "name": "LUTH"
  },
  "consultationModes": ["virtual"],
  "consultationFee": 5000,
  "yearsOfExperience": 12,
  "verificationStatus": "verified"
}
```

Sensitive fields NOT returned: - licenseNumber - uid - internal
timestamps

------------------------------------------------------------------------

## Data Source

The response combines:

User: - firstName - lastName - profilePicture

Doctor: - specialty - biography - consultation fee - consultation
modes - verification status

Use populate() to combine related data.

------------------------------------------------------------------------

## Service Structure

doctor/ - doctor.routes.ts - doctor.controller.ts - doctor.service.ts -
doctor.validation.ts - doctor.test.ts

Recommended service helpers: - buildDoctorFilters() -
buildDoctorSort() - buildPagination() - searchDoctors() -
getDoctorById()

------------------------------------------------------------------------

## Security Principles

Each request follows:

1.  Authentication
2.  Authorization
3.  Validation
4.  Business Logic
5.  Database Query

Never pass raw req.body or req.query directly into MongoDB queries.
Always construct query objects explicitly.

------------------------------------------------------------------------

## Implementation Order

1.  doctor.validation.ts
2.  doctor.service.ts
3.  doctor.controller.ts
4.  doctor.routes.ts
5.  Tests
