import { 
    connectToDatabase 
} from "@/lib/database/mongoose";
import { 
    User, Doctor, 
    Patient, HospitalAdmin, 
    PharmacyAdmin 
} from "@/lib/database/models/user.model";
import { 
    NextRequest, 
    NextResponse 
} from 'next/server';
import { handleError } from "@/lib/utils";

interface ActivateAccountParams {
    dateOfBirth: Date;
    role: "patient" | "doctor" | "hospitalAdmin" | "pharmacyAdmin";
    location: string;
    gender: "male" | "female";
    country: string;
    clerkId: string;
}

export const PUT = async (req: NextRequest) => {
    try {
        await connectToDatabase();
        
        const body = await req.json();
        const { dateOfBirth, role,
            location, gender, country, clerkId 
        }: ActivateAccountParams = body;

        const userAccountToActivate = await User.findOne({ clerkId });
    
        if (!userAccountToActivate) {
          throw new Error("User not found");
        }
        
        const updateUserDetails = await User.findOneAndUpdate({
            clerkId: clerkId
        },{
            gender: gender,
            dateOfBirth: dateOfBirth,
            role: role,
            location: location,
            country: country
        },{
            new: true
        })

        switch (updateUserDetails.role) {
            case "patient":
                   await Patient.create(updateUserDetails)
                   
                break;
            case "doctor":
                await Doctor.create(updateUserDetails)
                break;
            case "hospitalAdmin":
                await HospitalAdmin.create(updateUserDetails)
                break;
            case "pharmacyAdmin":
                await PharmacyAdmin.create(updateUserDetails)
                break;
            default:
                break;
        }

        return new NextResponse(
            JSON.stringify({
              success: true,
              message: 'Account successfully activated!',
              data: updateUserDetails
            }),
            {
              headers: { 'Content-Type': 'application/json' },
              status: 204,
            }
          );
        
      } catch (error) {
        handleError(error);
      }
}