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


export const PATCH = async (req: NextRequest) => {
    try {
        await connectToDatabase();
        
        const body = await req.json();
        const { insuranceId, clerkId, debitAccountNumber, paymentMethod } = body;

        const userBuyingInsurance = await User.findOne({ clerkId });
    
        if (!userBuyingInsurance) {
          throw new Error("User not found");
        }
        userBuyingInsurance.insurance_plan = insuranceId
        await userBuyingInsurance.save()


        return new NextResponse(
            JSON.stringify({
              success: true,
              message: 'Insurance successfully purchased!',
            }),
            {
              headers: { 'Content-Type': 'application/json' },
              status: 200,
            }
          );
        
      } catch (error) {
        handleError(error);
      }
}
