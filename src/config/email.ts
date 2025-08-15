// EmailJS Configuration for Hostinger Email
// You'll need to set up EmailJS with your Hostinger SMTP settings

export const emailConfig = {
  // Get these from your EmailJS dashboard after setup
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY'
};

// Hostinger SMTP Settings (for reference)
export const hostingerSMTP = {
  host: 'smtp.hostinger.com',
  port: 587, // or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'info@oakmar-terminalllc.com', // Your Hostinger email
    pass: 'YOUR_EMAIL_PASSWORD' // Your email password
  }
};