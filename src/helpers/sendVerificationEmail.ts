import { resend } from "@/lib/resend"
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "../types/ApiResponse"

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["dhavalchaudhari39@gmail.com"],
      subject: "Verification code",
      react: VerificationEmail({
        username,
        otp: verifyCode,
      }),
    })
    return { success: false, message: "Verification email successfully" }
  } catch (error) {
    console.log("Error sending verification", error)
    return { success: false, message: "Failed to send verification email" }
  }
}
