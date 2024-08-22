"use server";

import { revalidatePath } from "next/cache";

import {Doctor, Patient, User} from "../database/models/user.model";
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
export async function getUser(clerkId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId }).populate("personalPhysician").populate("affiliateHospital")
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
    const userData = updatedUser.toObject()
    delete userData.password

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function activateAccount(clerkId: string, userData: ActivateAccountParams) {
  try {
    await connectToDatabase();

    const findUserInDB = await User.findOne({ clerkId });
    if (!findUserInDB) {
      throw new Error("User not found");
    };

    let userToActivateAccount;
    const userObject = findUserInDB.toObject();
    delete userObject._id;  
    
    await User.findOneAndDelete({ clerkId })

    switch (userData.role) {
      case 'patient':
        userToActivateAccount = await Patient.create({ ...userObject, ...userData });
        break;
      case 'pharmacyAdmin':
        userToActivateAccount = await PharmacyAdmin.create({ ...userObject, ...userData });
        break;
      case 'hospitalAdmin':
        userToActivateAccount = await HospitalAdmin.create({ ...userObject, ...userData });
        break;
      case 'doctor':
        userToActivateAccount = await Doctor.create({ ...userObject, ...userData });
        break;
      default:
        throw new Error("Invalid role");
    }

    return {userRole: userToActivateAccount.userRole};
  } catch (error) {
    handleError(error)
  }
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


export async function fetchAffiliates(userId:string) {
  try {
    await connectToDatabase()
    const user = await User.findOne(
      {clerkId: userId}
    ).populate("affiliateHospital").populate("personalPhysician")
    if (!user) throw new Error("User Not Found")
    
    const hospital = user.affiliateHospital
    const doctor =user.personalPhysician

    return JSON.parse(JSON.stringify({...hospital, ...doctor }))
    
  } catch (error) {
    handleError(error)
  }
}

export async function fetchDoctorClients(clerkId:string) {
  try {
    await connectToDatabase()
    const doctor = await User.findOne({clerkId, userRole: "Doctor"}).populate(
      {path: "clients", select: "firstName lastName gender email photo dateOfBirth"}
    )
    if(!doctor) throw new Error("Doctor not found")
    
    const clients = doctor.clients
    return JSON.parse(JSON.stringify(clients))
  } catch (error) {
    handleError(error)
  }
}

export async function fetchHealthRecord(clerkId:string) {
  try {
    await connectToDatabase()
    const user = await User.findOne({clerkId}).populate("healthRecord")
    if(!user) throw new Error("User not found")
    const record = user.healthRecord

    return JSON.parse(JSON.stringify(record))
  } catch (error) {
    handleError(error)
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