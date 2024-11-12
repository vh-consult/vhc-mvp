// ====== USER PARAMS
declare type CreateUserParams = {
  email: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other";
  password: string;
  photo?: string;
  role: "patient" | "pharmacyAdmin" | "doctor";
  dateOfBirth: Date;
};
declare type UserParams = {
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
  contact: string;
  type: "Patient" | "Doctor" | "HospitalAdmin" | "PharmacyAdmin";
  country: string;
  company?: string;
  appointments?: any[];
  messages?: any[]
};

declare type CreateDoctorParams = {
  specialty: string;
  assignedPatients: Array<CreateUserParams>;
  affiliatedHospital?: string;
  booked_appointments?: string;
};

declare type CreatePatientParams = {
  record: string;
  insurancePlan: string;
  orders: string;
  healthcareProvider?: string;
  personalDoctor?: string;
};

declare type RoleSelectionParams = {
  country: string;
  location: string;
}

declare type UpdateUserParams = {
  firstName?: string;
  lastName?: string;
  photo?: string;
  country?: string,
  gender?: string,
  role?: string,
  email?: string;
  location?: string,
  dateOfBirth?: Date,
};

//==== COMPANY PARAMS
declare type CreateCompanyParams = {
  name: string;
  location: string;
  photo: string;
  admin: Array<CreateCompanyParams>
}

// ====== URL QUERY PARAMS  
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: TransformationTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};