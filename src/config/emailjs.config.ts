// Configurações do EmailJS
// Para obter essas informações:
// 1. Acesse https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Configure um serviço de email (Gmail recomendado)
// 4. Crie um template de email
// 5. Substitua os valores abaixo pelos seus

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2s4wju7',     // Seu Service ID
  TEMPLATE_ID: 'template_0c471fd',   // Seu Template ID
  PUBLIC_KEY: 'QrlMypY6HfLJpGGbp',   // Sua chave pública
  TO_EMAIL: 'isabellimocci.tech@gmail.com', // Seu email de destino
} as const;

// Template de exemplo para o EmailJS:
// Assunto: Nova mensagem de contato de {{from_name}}
// Corpo:
// Nome: {{from_name}}
// Email: {{from_email}}
// Assunto: {{subject}}
// Mensagem: {{message}}
