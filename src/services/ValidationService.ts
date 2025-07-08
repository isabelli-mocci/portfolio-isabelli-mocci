import type { FormData, FormErrors } from '../types/contactForm.types';

export class ValidationService {
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static readonly MIN_NAME_LENGTH = 2;
  private static readonly MIN_MESSAGE_LENGTH = 10;

  static validateFormData(formData: FormData): FormErrors {
    const errors: FormErrors = {};

    this.validateName(formData.name, errors);
    this.validateEmail(formData.email, errors);
    this.validateSubject(formData.subject, errors);
    this.validateMessage(formData.message, errors);

    return errors;
  }

  private static validateName(name: string, errors: FormErrors): void {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      errors.name = 'Name is required';
    } else if (trimmedName.length < this.MIN_NAME_LENGTH) {
      errors.name = `Name must have at least ${this.MIN_NAME_LENGTH} characters`;
    }
  }

  private static validateEmail(email: string, errors: FormErrors): void {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      errors.email = 'Email is required';
    } else if (!this.EMAIL_REGEX.test(trimmedEmail)) {
      errors.email = 'Invalid email';
    }
  }

  private static validateSubject(subject: string, errors: FormErrors): void {
    if (!subject.trim()) {
      errors.subject = 'Subject is required';
    }
  }

  private static validateMessage(message: string, errors: FormErrors): void {
    const trimmedMessage = message.trim();
    
    if (!trimmedMessage) {
      errors.message = 'Message is required';
    } else if (trimmedMessage.length < this.MIN_MESSAGE_LENGTH) {
      errors.message = `Message must have at least ${this.MIN_MESSAGE_LENGTH} characters`;
    }
  }

  static hasValidationErrors(errors: FormErrors): boolean {
    return Object.keys(errors).length > 0;
  }
}
