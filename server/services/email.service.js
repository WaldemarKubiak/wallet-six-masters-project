import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const config = {
  pool: true,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const host = process.env.API_HOST;

const sendVerificationEmail = async (to, name, verificationToken) => {
  const transporter = nodemailer.createTransport(config);

  const emailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject: "User verification",
    text: `Hi ${name},
    
Please click the link below to verify your email and activate your account, so that you can use your Wallet App:

${host}/api/users/verify/${verificationToken}
    
Your Wallet App Team`,
  };

  return await transporter.sendMail(emailOptions);
};

const service = {
  sendVerificationEmail,
};

export default service;
