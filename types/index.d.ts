// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
  contact: string;
};
declare type UserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  photo: string;
  contact: string;
  userRole: "patient" | "doctor" | "hospitalAdmin" | "pharmacyAdmin";
  country: string;
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

declare type ActivateAccountParams = {
  dateOfBirth: Date;
  role: "patient" | "doctor" | "hospitalAdmin" | "pharmacyAdmin" | string;
  location: string;
  gender: "male" | "female" | string;
  country: string;
}

declare type UpdateUserParams = {
  firstName?: string;
  lastName?: string;
  photo?: string;
  country?: string,
  gender?: string,
  role?: string,
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