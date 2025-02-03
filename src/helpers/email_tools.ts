import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 587, 
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL, 
    pass: process.env.SMTP_PASSWORD,
  },
});

export class EmailComfirmation{
  public async sendConfirmationEmail({ email, token }: { email: string; token: string }){
    
    const confirmationUrl = `http://localhost:4000/api/v1/user/verify-email?token=${token}`;
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
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