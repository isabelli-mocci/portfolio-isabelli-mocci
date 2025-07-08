// EmailJS configuration
// To get this information:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Set up an email service (Gmail recommended)
// 4. Create an email template
// 5. Replace the values below with yours

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2s4wju7',     // Your Service ID
  TEMPLATE_ID: 'template_0c471fd',   // Your Template ID
  PUBLIC_KEY: 'QrlMypY6HfLJpGGbp',   // Your public key
  TO_EMAIL: 'isabellimocci.tech@gmail.com', // Your destination email
} as const;

// Example template for EmailJS:
// Subject: New contact message from {{from_name}}
// Body:
// Name: {{from_name}}
// Email: {{from_email}}
// Subject: {{subject}}
// Message: {{message}}
