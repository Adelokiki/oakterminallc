// EmailJS Configuration
export const emailjsConfig = {
  serviceId: 'service_oakmar', // You'll need to replace this
  templateId: 'template_contact', // You'll need to replace this  
  publicKey: 'your_public_key', // You'll need to replace this
};

// Template variables that will be sent to your email
export const emailTemplate = {
  to_email: 'info@oakmar-terminalllc.com',
  from_name: '{{from_name}}',
  from_email: '{{from_email}}', 
  phone: '{{phone}}',
  subject: '{{subject}}',
  message: '{{message}}',
  reply_to: '{{from_email}}'
};