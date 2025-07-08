import emailjs from '@emailjs/browser';
import type {
  FormData,
  FormSubmissionResult,
} from '../types/contactForm.types';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export class FormSubmissionService {
  static async submitContactForm(
    formData: FormData
  ): Promise<FormSubmissionResult> {
    try {
      if (
        EMAILJS_CONFIG.SERVICE_ID === 'service_2s4wju7' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'template_0c471fd' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'QrlMypY6HfLJpGGbp'
      ) {
        console.warn(
          'EmailJS not configured. Configure the constants in the emailjs.config.ts file'
        );
        await this.simulateApiCall();
        console.log('Form submitted (simulated):', formData);
        return { success: true };
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Form submitted successfully:', formData);
      return { success: true };
    } catch (error) {
      console.error('Error submitting form:', error);
      return {
        success: false,
        error: 'Error sending message. Please try again.',
      };
    }
  }

  private static async simulateApiCall(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }
}
