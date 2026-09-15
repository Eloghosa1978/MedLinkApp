type SeedDoctor = {
  user: {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    gender?: "male" | "female";
    role: "doctor";
    profileImage?: string;
  };

  doctor: {
    primarySpecialization: string;
    specializations: string[];
    licenseNumber: string;
    licensedSince: Date;
    specialistSince?: Date;
    qualifications: string[];
    biography?: string;

    practiceType: "hospital" | "private" | "both";

    hospitalName?: string;
    hospitalId?: string;

    practiceLocation?: {
      street?: string;
      city?: string;
      state?: string;
      country?: string;
    };

    consultationModes: ("physical" | "virtual")[];
    consultationFee?: number;
    verificationStatus: "pending" | "verified" | "rejected";
  };
};

const doctors: SeedDoctor[] = [
  {
    user: {
      uid: "seed-doctor-000",
      email: "doctor1@medlink.test",
      firstName: "John",
      lastName: "Doe",
      role: "doctor",
      profileImage: "/images/doctors/doctor-01.jpg",
    },
    doctor: {
      licenseNumber: "SEED-DOC-000",
      primarySpecialization: "Cardiology",
      specializations: ["Cardiology"],
      licensedSince: new Date("2015-01-01"),
      qualifications: ["MBBS", "FWACP"],
      biography: "Experienced cardiologist providing clinical care.",
      practiceType: "hospital",
      consultationModes: ["physical", "virtual"],
      consultationFee: 15000,
      verificationStatus: "rejected",
      hospitalName: "Rivers State University Teaching Hospital",
    },
  },
  {
    user: {
      uid: "seed-doctor-001",
      email: "amara.okafor@medlink.test",
      firstName: "Amara",
      lastName: "Okafor",
      role: "doctor",
      profileImage: "/images/doctors/doctor-01.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-001",
      primarySpecialization: "Cardiology",
      specializations: ["Cardiology", "Internal Medicine"],
      licensedSince: new Date("2012-01-01"),
      specialistSince: new Date("2016-01-01"),
      qualifications: ["MBBS", "FWACP"],
      biography:
        "Cardiologist with extensive experience in cardiovascular disease prevention and treatment.",
      practiceType: "private",
      consultationModes: ["physical", "virtual"],
      consultationFee: 15000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Port Harcourt",
        state: "Rivers",
        country: "Nigeria",
      },
    },
  },

  {
    user: {
      uid: "seed-doctor-002",
      email: "daniel.adebayo@medlink.test",
      firstName: "Daniel",
      lastName: "Adebayo",
      role: "doctor",
      profileImage: "/images/doctors/doctor-02.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-002",
      primarySpecialization: "Pediatrics",
      specializations: ["Pediatrics"],
      licensedSince: new Date("2015-01-01"),
      specialistSince: new Date("2019-01-01"),
      qualifications: ["MBBS", "FWACP"],
      biography:
        "Pediatrician focused on comprehensive healthcare for infants, children, and adolescents.",
      practiceType: "private",
      consultationModes: ["physical"],
      consultationFee: 10000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria",
      },
    },
  },

  {
    user: {
      uid: "seed-doctor-003",
      email: "chiamaka.nwosu@medlink.test",
      firstName: "Chiamaka",
      lastName: "Nwosu",
      role: "doctor",
      profileImage: "/images/doctors/doctor-03.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-003",
      primarySpecialization: "Dermatology",
      specializations: ["Dermatology"],
      licensedSince: new Date("2013-01-01"),
      specialistSince: new Date("2017-01-01"),
      qualifications: ["MBBS", "FMCP"],
      biography:
        "Dermatologist specializing in common skin conditions and long-term skin health.",
      practiceType: "both",
      consultationModes: ["physical", "virtual"],
      consultationFee: 12000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Port Harcourt",
        state: "Rivers",
        country: "Nigeria",
      },
      hospitalName: "University of Port Harcourt Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-004",
      email: "ibrahim.musa@medlink.test",
      firstName: "Ibrahim",
      lastName: "Musa",
      role: "doctor",
      profileImage: "/images/doctors/doctor-04.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-004",
      primarySpecialization: "Neurology",
      specializations: ["Neurology"],
      licensedSince: new Date("2010-01-01"),
      specialistSince: new Date("2014-01-01"),
      qualifications: ["MBBS", "FMCP"],
      biography:
        "Neurologist providing assessment and treatment for neurological disorders.",
      practiceType: "hospital",
      consultationModes: ["virtual"],
      consultationFee: 25000,
      verificationStatus: "verified",
      hospitalName: "University of Port Harcourt Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-005",
      email: "grace.eze@medlink.test",
      firstName: "Grace",
      lastName: "Eze",
      role: "doctor",
      profileImage: "/images/doctors/doctor-05.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-005",
      primarySpecialization: "Obstetrics & Gynecology",
      specializations: ["Obstetrics & Gynecology"],
      licensedSince: new Date("2011-01-01"),
      specialistSince: new Date("2015-01-01"),
      qualifications: ["MBBS", "FMCOG"],
      biography:
        "Obstetrician and gynecologist providing women's reproductive and maternal healthcare.",
      practiceType: "hospital",
      consultationModes: ["physical", "virtual"],
      consultationFee: 18000,
      verificationStatus: "verified",
      hospitalName: "University of Port Harcourt Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-006",
      email: "emeka.obi@medlink.test",
      firstName: "Emeka",
      lastName: "Obi",
      role: "doctor",
      profileImage: "/images/doctors/doctor-06.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-006",
      primarySpecialization: "Orthopedics",
      specializations: ["Orthopedics", "Sports Medicine"],
      licensedSince: new Date("2009-01-01"),
      specialistSince: new Date("2013-01-01"),
      qualifications: ["MBBS", "FMCS"],
      biography:
        "Orthopedic specialist treating musculoskeletal injuries and conditions.",
      practiceType: "both",
      consultationModes: ["physical", "virtual"],
      consultationFee: 22000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Enugu",
        state: "Enugu",
        country: "Nigeria",
      },
      hospitalName: "National Hospital Abuja",
    },
  },

  {
    user: {
      uid: "seed-doctor-007",
      email: "fatima.bello@medlink.test",
      firstName: "Fatima",
      lastName: "Bello",
      role: "doctor",
      profileImage: "/images/doctors/doctor-07.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-007",
      primarySpecialization: "Psychiatry",
      specializations: ["Psychiatry"],
      licensedSince: new Date("2016-01-01"),
      specialistSince: new Date("2020-01-01"),
      qualifications: ["MBBS", "FMCPsych"],
      biography:
        "Psychiatrist providing professional mental healthcare and psychological support.",
      practiceType: "private",
      consultationModes: ["virtual", "physical"],
      consultationFee: 16000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria",
      },
    },
  },

  {
    user: {
      uid: "seed-doctor-008",
      email: "victor.okoro@medlink.test",
      firstName: "Victor",
      lastName: "Okoro",
      role: "doctor",
      profileImage: "/images/doctors/doctor-08.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-008",
      primarySpecialization: "General Practice",
      specializations: ["General Practice"],
      licensedSince: new Date("2018-01-01"),
      specialistSince: new Date("2021-01-01"),
      qualifications: ["MBBS"],
      biography:
        "General practitioner providing primary healthcare and routine medical consultations.",
      practiceType: "private",
      consultationModes: ["physical", "virtual"],
      consultationFee: 8000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Warri",
        state: "Delta",
        country: "Nigeria",
      },
    },
  },

  {
    user: {
      uid: "seed-doctor-009",
      email: "esther.johnson@medlink.test",
      firstName: "Esther",
      lastName: "Johnson",
      role: "doctor",
      profileImage: "/images/doctors/doctor-09.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-009",
      primarySpecialization: "Ophthalmology",
      specializations: ["Ophthalmology"],
      licensedSince: new Date("2012-01-01"),
      specialistSince: new Date("2016-01-01"),
      qualifications: ["MBBS", "FWACS"],
      biography:
        "Ophthalmologist providing comprehensive eye examinations and treatment.",
      practiceType: "hospital",
      consultationModes: ["physical"],
      consultationFee: 14000,
      verificationStatus: "verified",
      hospitalName: "National Hospital Abuja",
    },
  },

  {
    user: {
      uid: "seed-doctor-010",
      email: "samuel.owusu@medlink.test",
      firstName: "Samuel",
      lastName: "Owusu",
      role: "doctor",
      profileImage: "/images/doctors/doctor-10.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-010",
      primarySpecialization: "ENT",
      specializations: ["ENT"],
      licensedSince: new Date("2014-01-01"),
      specialistSince: new Date("2018-01-01"),
      qualifications: ["MBBS", "FWACS"],
      biography: "ENT specialist treating ear, nose, and throat conditions.",
      practiceType: "both",
      consultationModes: ["physical", "virtual"],
      consultationFee: 13000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Accra",
        state: "Greater Accra",
        country: "Ghana",
      },
      hospitalName: "National Hospital Abuja",
    },
  },

  {
    user: {
      uid: "seed-doctor-011",
      email: "rita.adams@medlink.test",
      firstName: "Rita",
      lastName: "Adams",
      role: "doctor",
      profileImage: "/images/doctors/doctor-11.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-011",
      primarySpecialization: "Endocrinology",
      specializations: ["Endocrinology", "Internal Medicine"],
      licensedSince: new Date("2008-01-01"),
      specialistSince: new Date("2013-01-01"),
      qualifications: ["MBBS", "FMCP"],
      biography:
        "Endocrinologist specializing in diabetes and hormonal disorders.",
      practiceType: "hospital",
      consultationModes: ["virtual", "physical"],
      consultationFee: 20000,
      verificationStatus: "verified",
      hospitalName: "Rivers State University Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-012",
      email: "michael.daniels@medlink.test",
      firstName: "Michael",
      lastName: "Daniels",
      role: "doctor",
      profileImage: "/images/doctors/doctor-12.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-012",
      primarySpecialization: "Urology",
      specializations: ["Urology"],
      licensedSince: new Date("2011-01-01"),
      specialistSince: new Date("2015-01-01"),
      qualifications: ["MBBS", "FWACS"],
      biography:
        "Urologist providing diagnosis and treatment for urinary and reproductive conditions.",
      practiceType: "hospital",
      consultationModes: ["physical"],
      consultationFee: 21000,
      verificationStatus: "verified",
      hospitalName: "Rivers State University Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-013",
      email: "blessing.peter@medlink.test",
      firstName: "Blessing",
      lastName: "Peter",
      role: "doctor",
      profileImage: "/images/doctors/doctor-13.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-013",
      primarySpecialization: "Family Medicine",
      specializations: ["Family Medicine", "General Practice"],
      licensedSince: new Date("2017-01-01"),
      specialistSince: new Date("2021-01-01"),
      qualifications: ["MBBS", "FMCA"],
      biography:
        "Family physician focused on preventive care and long-term patient wellbeing.",
      practiceType: "private",
      consultationModes: ["virtual", "physical"],
      consultationFee: 9000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Port Harcourt",
        state: "Rivers",
        country: "Nigeria",
      },
    },
  },

  {
    user: {
      uid: "seed-doctor-014",
      email: "daniel.williams@medlink.test",
      firstName: "Daniel",
      lastName: "Williams",
      role: "doctor",
      profileImage: "/images/doctors/doctor-14.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-014",
      primarySpecialization: "Gastroenterology",
      specializations: ["Gastroenterology", "Internal Medicine"],
      licensedSince: new Date("2007-01-01"),
      specialistSince: new Date("2012-01-01"),
      qualifications: ["MBBS", "FMCP"],
      biography:
        "Gastroenterologist specializing in digestive system disorders.",
      practiceType: "both",
      consultationModes: ["virtual", "physical"],
      consultationFee: 23000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Ibadan",
        state: "Oyo",
        country: "Nigeria",
      },
      hospitalName: "Rivers State University Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-015",
      email: "joyce.martins@medlink.test",
      firstName: "Joyce",
      lastName: "Martins",
      role: "doctor",
      profileImage: "/images/doctors/doctor-15.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-015",
      primarySpecialization: "Radiology",
      specializations: ["Radiology"],
      licensedSince: new Date("2010-01-01"),
      specialistSince: new Date("2014-01-01"),
      qualifications: ["MBBS", "FWACS"],
      biography:
        "Radiologist experienced in diagnostic imaging and clinical interpretation.",
      practiceType: "hospital",
      consultationModes: ["physical"],
      consultationFee: 19000,
      verificationStatus: "verified",
      hospitalName: "University of Port Harcourt Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-016",
      email: "henry.clark@medlink.test",
      firstName: "Henry",
      lastName: "Clark",
      role: "doctor",
      profileImage: "/images/doctors/doctor-16.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-016",
      primarySpecialization: "Cardiology",
      specializations: ["Cardiology", "Internal Medicine"],
      licensedSince: new Date("2006-01-01"),
      specialistSince: new Date("2011-01-01"),
      qualifications: ["MBBS", "FWACP"],
      biography:
        "Senior cardiologist with experience managing complex cardiovascular conditions.",
      practiceType: "both",
      consultationModes: ["virtual", "physical"],
      consultationFee: 30000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Abuja",
        state: "FCT",
        country: "Nigeria",
      },
      hospitalName: "University of Port Harcourt Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-017",
      email: "naomi.davis@medlink.test",
      firstName: "Naomi",
      lastName: "Davis",
      role: "doctor",
      profileImage: "/images/doctors/doctor-17.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-017",
      primarySpecialization: "Pediatrics",
      specializations: ["Pediatrics", "Neonatology"],
      licensedSince: new Date("2009-01-01"),
      specialistSince: new Date("2014-01-01"),
      qualifications: ["MBBS", "FWACP"],
      biography:
        "Pediatric specialist with particular interest in newborn and child health.",
      practiceType: "hospital",
      consultationModes: ["physical", "virtual"],
      consultationFee: 17000,
      verificationStatus: "verified",
      hospitalName: "University of Port Harcourt Teaching Hospital",
    },
  },

  {
    user: {
      uid: "seed-doctor-018",
      email: "patrick.green@medlink.test",
      firstName: "Patrick",
      lastName: "Green",
      role: "doctor",
      profileImage: "/images/doctors/doctor-18.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-018",
      primarySpecialization: "Dermatology",
      specializations: ["Dermatology"],
      licensedSince: new Date("2015-01-01"),
      specialistSince: new Date("2019-01-01"),
      qualifications: ["MBBS", "FMCP"],
      biography:
        "Dermatologist providing diagnosis and treatment for a wide range of skin conditions.",
      practiceType: "private",
      consultationModes: ["virtual"],
      consultationFee: 11000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria",
      },
    },
  },

  {
    user: {
      uid: "seed-doctor-019",
      email: "sandra.lee@medlink.test",
      firstName: "Sandra",
      lastName: "Lee",
      role: "doctor",
      profileImage: "/images/doctors/doctor-19.jpg",
      gender: "female",
    },
    doctor: {
      licenseNumber: "SEED-DOC-019",
      primarySpecialization: "Internal Medicine",
      specializations: ["Internal Medicine", "Cardiology"],
      licensedSince: new Date("2008-01-01"),
      specialistSince: new Date("2013-01-01"),
      qualifications: ["MBBS", "FMCP"],
      biography:
        "Internal medicine specialist providing comprehensive adult medical care.",
      practiceType: "both",
      consultationModes: ["physical", "virtual"],
      consultationFee: 18000,
      verificationStatus: "verified",
      practiceLocation: {
        city: "Port Harcourt",
        state: "Rivers",
        country: "Nigeria",
      },
      hospitalName: "National Hospital Abuja",
    },
  },

  {
    user: {
      uid: "seed-doctor-020",
      email: "joseph.wilson@medlink.test",
      firstName: "Joseph",
      lastName: "Wilson",
      role: "doctor",
      profileImage: "/images/doctors/doctor-20.jpg",
      gender: "male",
    },
    doctor: {
      licenseNumber: "SEED-DOC-020",
      primarySpecialization: "Emergency Medicine",
      specializations: ["Emergency Medicine"],
      licensedSince: new Date("2013-01-01"),
      specialistSince: new Date("2017-01-01"),
      qualifications: ["MBBS", "FWACS"],
      biography:
        "Emergency physician experienced in acute and urgent medical care.",
      practiceType: "hospital",
      consultationModes: ["physical", "virtual"],
      consultationFee: 24000,
      verificationStatus: "verified",
      hospitalName: "National Hospital Abuja",
    },
  },
];

export default doctors;
