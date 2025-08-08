import nodemailer from 'nodemailer';
import { Logger } from '../utils/logger';

export class EmailService {
  static async sendEmail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password'
      }
    });

    const mailOptions = {
      from: 'your_email@example.com',
      to,
      subject,
      text
    };

    try {
      await transporter.sendMail(mailOptions);
      Logger.info('Email sent successfully');
    } catch (error) {
      Logger.error('Error sending email', error);
      throw new Error('Unable to send email');
    }
  }

  // Other email-related methods...
}
