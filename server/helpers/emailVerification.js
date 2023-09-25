import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const emailOwner = process.env.EMAIL_OWNER;
const passOwner = process.env.PASS_OWNER;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: emailOwner,
    pass: passOwner,
  },
});

const emailLink = `localhost:3001/api/users`;

export function sendVerificationEmail(userEmail, verificationToken) {
  const mailOptions = {
    from: "NodeTest",
    to: userEmail,
    subject: "Email Verification",
    html: `
    <p>This is an automated message. Please do not reply to it. If you are not the author of this message, please contact the sender.</p>
    <p>Copy the following link to verify your email: <a href= ${emailLink}/verify/${verificationToken}">"${emailLink}/verify/${verificationToken}</a></p>
    <p>Test</p>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log(`Verification Email to ${userEmail} sent: `, info.response);
    }
  });
}

export function generateVerificationToken() {
  return crypto.randomBytes(20).toString("hex");
}
