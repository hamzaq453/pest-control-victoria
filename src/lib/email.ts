import nodemailer from 'nodemailer';

// Create transporter configuration for Hostinger email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for port 465 (SSL), false for other ports
  auth: {
    user: process.env.SMTP_USER || 'info@pestfreevictoria.com',
    pass: process.env.SMTP_PASSWORD || '', // Your Hostinger mailbox password
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

// Email template for contact form
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  const { name, email, phone, service, message } = formData;

  // Email to customer (confirmation)
  const customerMailOptions = {
    from: `"Pest Free Victoria" <${process.env.SMTP_USER || 'info@pestfreevictoria.com'}>`,
    to: email,
    subject: 'Thank you for contacting Pest Free Victoria',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2E5D3A;">Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and will get back to you within 24 hours.</p>
        
        <div style="background-color: #F7F3E9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2E3A24; margin-top: 0;">Your Inquiry Details:</h3>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        
        <p>If you have any urgent concerns, please call us at <strong>(0451) 004-400</strong>.</p>
        
        <p>Best regards,<br>
        <strong>Pest Control Victoria Team</strong></p>
      </div>
    `
  };

  // Email to admin (notification)
  const adminMailOptions = {
    from: `"Pest Free Victoria Contact Form" <${process.env.SMTP_USER || 'info@pestfreevictoria.com'}>`,
    to: process.env.SMTP_USER || 'info@pestfreevictoria.com', // Your business email for notifications
    replyTo: email, // So you can reply directly to the customer
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2E5D3A;">New Contact Form Submission</h2>
        
        <div style="background-color: #F7F3E9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2E3A24; margin-top: 0;">Customer Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
        
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
        
        <p>Please respond to this inquiry within 24 hours.</p>
      </div>
    `
  };

  try {
    // Send email to customer
    await transporter.sendMail(customerMailOptions);
    
    // Send email to admin
    await transporter.sendMail(adminMailOptions);
    
    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send emails');
  }
};

export default transporter;
