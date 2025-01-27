"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";
import Doctor from "../database/models/doctor.model";
import PharmacyAdmin from "../database/models/pharmacyAdmin.model";
import { z } from "zod";
import * as bcrypt from "bcrypt";
import { createSession, deleteSession } from "../session";
import { redirect } from "next/navigation";
import { IUser } from "@/app/(root)/(company)/company/[id]/overview/page";
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  firstName: z.string({ message: "Invalid" }).trim(),
  lastName: z.string({ message: "Invalid" }).trim(),
  country: z.string({ message: "Invalid" }).trim(),
  dob: z.string({ message: "Invalid" }),
  role: z.enum(["patient","pharmacyAdmin", "doctor"]),
  gender: z.enum(["male", "female"]),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

// CREATE
export async function createUser(prevState: any, formData: FormData) {
  try {
    console.log(formData)
    await connectToDatabase();
    const result = registerSchema.safeParse(Object.fromEntries(formData));
    console.log(1)

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    console.log(2)

    const { firstName, lastName, gender, dob, country, role, email, password } = result.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser:IUser|any;
    console.log(3)

    switch (role) {
      case "patient":
        newUser = await Patient.create({ firstName, dob, country, lastName, gender, email, password: hashedPassword });
        break;
      case "pharmacyAdmin":
        newUser = await PharmacyAdmin.create({
          firstName, lastName, gender, email, dob, country,
          password: hashedPassword,
        });
        break;
      case "doctor":
        newUser = await Doctor.create({ firstName, dob, country, lastName, gender, email, password: hashedPassword });
        break;
      default:
        throw new Error("Invalid role");
    }
    console.log(newUser)
    await createSession(newUser._id);
    return {success: result?.success, data: JSON.parse(JSON.stringify(newUser))};
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }
    handleError(error);
  }
}

export async function login(prevState: any, formData: FormData) {
  try {
    console.log(formData)
    await connectToDatabase();
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
    console.log(1)

      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    console.log(2)

    const { email, password } = result.data;

    const existingUser = await User.findOne({ email });
    console.log(3)

    if (!existingUser) {
      return {
        errors: {
          email: ["Invalid email"],
        },
      };
    }
    console.log(4)

    const comparison = await bcrypt.compare(password, existingUser.password);

    if (!comparison) {
    console.log(5)

      return {
        errors: {
          password: ["Invalid password"],
        },
      };
    }
    console.log(6 )
    await createSession(existingUser._id);
    
    return {message: "success", data: JSON.parse(JSON.stringify(existingUser))};
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error; // Let Next.js handle the redirect
    }
    handleError(error);
  }
}

export async function logout() {
  try {
    console.log('out')
    await deleteSession();
  } catch (error) {
    handleError(error)
  }
}

//subscribe to newsletter
export async function subscribeToNewsletter(id: string) {
  try {
    await connectToDatabase();

    const userSubscribing = await User.findOne({ id });
    if (!userSubscribing) throw new Error("User not found");

    userSubscribing.subscribedToNewsletter = true;
    userSubscribing.save();

    return { message: "User added to newsletter" };
  } catch (error) {
    handleError(error);
  }
}

//BUY INSURANCE
export async function buyInsurance(id: string, insurancePlanChosen: string) {
  try {
    await connectToDatabase();

    const userBuyingInsurance = await User.findOne({ id });
    if (!userBuyingInsurance) throw new Error("User not found");

    userBuyingInsurance.insurance_plan = insurancePlanChosen;
    userBuyingInsurance.save();

    return JSON.parse(JSON.stringify(userBuyingInsurance));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUser(id: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ id })
      .populate("personalPhysician")
      .populate("affiliateHospital");
    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(id: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ id }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    const userData = updatedUser.toObject();
    delete userData.password;

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(id: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findByIdAndDelete({ id });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    revalidatePath("/");
  } catch (error) {
    handleError(error);
  }
}

//fetching user's history
export async function fetchUserHistory(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findById(userId).populate("history");
    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user.history));
  } catch (error) {
    handleError(error);
  }
}

export async function currentUser() {
  try {
    return { id: "33yh3y" };
  } catch (error) {
    handleError(error);
  }
}
