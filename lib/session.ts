import "server-only"
import {SignJWT, jwtVerify} from "jose"
import { cookies } from "next/headers";
import { randomBytes } from "crypto";

const secretKey = process.env.SESSION_SECRET;
if (!secretKey) {
    console.error("SESSION_SECRET is not defined.");
}
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(userId: string){
    try {
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 *60 * 1000);
        // console.log("ExpiresAt:", expiresAt);
        const session = await encrypt({userId, expiresAt})
        console.log("Generated Session JWT:", session);
        (await cookies()).set("session", session, {
            httpOnly: true,
            secure: true,
            expires: expiresAt
        })
        console.log("Session cookie set successfully.");
    } catch (error) {
        console.error("Error in createSession:", error);
    }
}

export async function deleteSession (){
    try {
        (await cookies()).delete('session')
        console.log("Session cookie deleted successfully.");
    } catch (error) {
        console.error("Error in deleteSession:", error);
    }
  }

type SessionPayload = {
    userId: string;
    expiresAt: Date;
}

export async function encrypt(payload: SessionPayload){
    return new SignJWT(payload).setProtectedHeader({alg: "HS256"}).setIssuedAt().setExpirationTime("7d").sign(encodedKey)
}

export async function decrypt (session: string | undefined = ""){
    try {
        // console.log("Session to decrypt:", session);
        if (!session) {
            console.warn("No session provided for decryption.");
            return null;
        }
        const { payload } = await jwtVerify(session, encodedKey, { algorithms: ["HS256"]})
        // console.log("Decrypted Payload:", payload);
        return payload
    } catch (error) {
        console.log("failed to verify session")
    }
}
