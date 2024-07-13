"use server";

import { revalidatePath } from "next/cache";

import {Doctor, HospitalAdmin, Patient, PharmacyAdmin, User} from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

//subscribe to newsletter
export async function subscribeToNewsletter(clerkId:string) {
  try {
    await connectToDatabase();

    const userSubscribing = await User.findOne({clerkId});
    if (!userSubscribing) throw new Error("User not found");

    userSubscribing.subscribedToNewsletter = true
    userSubscribing.save()
    
    return {message: "User added to newsletter"}
  } catch (error) {
    handleError(error);
  }
}

//BUY INSURANCE
export async function buyInsurance(clerkId: string, insurancePlanChosen: string) {
  try {
    await connectToDatabase();

    const userBuyingInsurance = await User.findOne({clerkId});
    if (!userBuyingInsurance) throw new Error("User not found");

    userBuyingInsurance.insurance_plan = insurancePlanChosen
    userBuyingInsurance.save()
    
    return JSON.parse(JSON.stringify(userBuyingInsurance));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(clerkId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId });

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

//Activate account
export async function activateAccount(clerkId: string, userData:ActivateAccountParams) {
  try {
    await connectToDatabase();

    const findUserInDB = await User.findOne({clerkId});

    if (!findUserInDB) {
      throw new Error("User not found")
    };
    let userToActivateAccount;

    switch (userData.role) {
      case 'patient':
        userToActivateAccount = await Patient.create({ ...findUserInDB.toObject(), ...userData });
        break;
      case 'pharmacyAdmin':
        userToActivateAccount = await PharmacyAdmin.create({ ...findUserInDB.toObject(), ...userData });
        break;
      case 'hospitalAdmin':
        userToActivateAccount = await HospitalAdmin.create({ ...findUserInDB.toObject(), ...userData });
        break;
      case 'doctor':
        userToActivateAccount = await Doctor.create({ ...findUserInDB.toObject(), ...userData });
        break;
      default:
        throw new Error("Invalid role");
    }

    // if (userData.role !== 'patient') {
    //   await User.findOneAndDelete({ clerkId });
    // }

    return JSON.parse(JSON.stringify(userToActivateAccount));
  } catch (error) {
    handleError(error)
  }
}

//get user by role
export async function getUserRole(id: string) {
 const user = await getUserById(id)

 return user.role;
  
}


// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

