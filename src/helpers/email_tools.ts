import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.example.com", 
  port: 587, 
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

export class EmailComfirmation{
  public async sendConfirmationEmail({ email, token }: { email: string; token: string }){
    
    const confirmationUrl = `https://example.com/confirm-email?token=${token}`;
    const mailOptions = {
        from: '"Your App" <your-email@example.com>',
        to: email,
        subject: "Confirm Your Email Address",
        html: `<p>Please confirm your email by clicking <a href="${confirmationUrl}">here</a>.</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Email sending failed");
    }
  };

} 


export default transporter;