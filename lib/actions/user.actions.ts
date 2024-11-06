"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Patient from "../database/models/patient.model";
import Doctor from "../database/models/doctor.model";
import PharmacyAdmin from "../database/models/pharmacyAdmin.model";
import { z } from "zod";
import * as bcrypt from "bcrypt"
import { createSession } from "../session";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email({message: "Invalid email address"}).trim(),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}).trim()
})

export async function roleSelection(id: string, userData: RoleSelectionParams) {
  try {
    await connectToDatabase();

    const findUserInDB = await User.findById(id);
    if (!findUserInDB) {
      throw new Error("User not found");
    };

    console.log(userData, findUserInDB)
    let userToActivateAccount;
    try {
      const userObject = findUserInDB.toObject();
      delete userObject._id;  
      await User.findOneAndDelete({ id })
  
      switch (userData.role) {
        case 'patient':
          userToActivateAccount = await Patient.create({ ...userObject, ...userData });
          break;
        case 'pharmacyAdmin':
          userToActivateAccount = await PharmacyAdmin.create({ ...userObject, ...userData });
          break;
        case 'doctor':
          userToActivateAccount = await Doctor.create({ ...userObject, ...userData });
          break;
        default:
          throw new Error("Invalid role");
      }
      
    } catch (error) {
      console.log("activation attempt failed")
    }
    console.log(userToActivateAccount)

    return {userRole: userToActivateAccount.type};
  } catch (error) {
    handleError(error)
  }
}

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();
    console.log(user)

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function login (prevState: any, formData: FormData) {
  try {
    await connectToDatabase();
    const result = loginSchema.safeParse(Object.fromEntries(formData))
    
    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      }
    }

    const {email, password} = result.data

    const existingUser = await User.findOne({email})
    if (!existingUser) {
      return {errors: {
        email: ["Invalid email"]
      }
    }}

    const comparison = await bcrypt.compare(password, existingUser.password)
    
    if (!comparison) {
      return {errors: {
        password: ["Invalid password"]
      }}
    }

    await createSession(existingUser.id)

    redirect('/landing')

  } catch (error) {
    handleError(error)
  }
}

export async function logout (){

}

//subscribe to newsletter
export async function subscribeToNewsletter(id:string) {
  try {
    await connectToDatabase();

    const userSubscribing = await User.findOne({id});
    if (!userSubscribing) throw new Error("User not found");

    userSubscribing.subscribedToNewsletter = true
    userSubscribing.save()
    
    return {message: "User added to newsletter"}
  } catch (error) {
    handleError(error);
  }
}

//BUY INSURANCE
export async function buyInsurance(id: string, insurancePlanChosen: string) {
  try {
    await connectToDatabase();

    const userBuyingInsurance = await User.findOne({id});
    if (!userBuyingInsurance) throw new Error("User not found");

    userBuyingInsurance.insurance_plan = insurancePlanChosen
    userBuyingInsurance.save()
    
    return JSON.parse(JSON.stringify(userBuyingInsurance));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUser(id: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ id }).populate("personalPhysician").populate("affiliateHospital")
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
    const userData = updatedUser.toObject()
    delete userData.password

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
    const userToDelete = await User.findByIdAndDelete({id});

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
export async function fetchUserHistory(userId:string) {
  try {
    await connectToDatabase()
    const user = await User.findOne({clerkId: userId}).populate("history")
    if (!user) throw new Error("User not found")
    
    return JSON.parse(JSON.stringify(user.history))
  } catch (error) {
    handleError(error)
  }
}

export async function currentUser () {
  try {
    return {id: "33yh3y"}
  } catch (error) {
    handleError(error)
  }
}