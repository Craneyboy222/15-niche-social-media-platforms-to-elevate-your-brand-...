import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

export const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'no-reply@example.com',
    to,
    subject,
    text,
  };
  return await transporter.sendMail(mailOptions);
};