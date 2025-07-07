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
      errors.name = 'Nome é obrigatório';
    } else if (trimmedName.length < this.MIN_NAME_LENGTH) {
      errors.name = `Nome deve ter pelo menos ${this.MIN_NAME_LENGTH} caracteres`;
    }
  }

  private static validateEmail(email: string, errors: FormErrors): void {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      errors.email = 'Email é obrigatório';
    } else if (!this.EMAIL_REGEX.test(trimmedEmail)) {
      errors.email = 'Email inválido';
    }
  }

  private static validateSubject(subject: string, errors: FormErrors): void {
    if (!subject.trim()) {
      errors.subject = 'Assunto é obrigatório';
    }
  }

  private static validateMessage(message: string, errors: FormErrors): void {
    const trimmedMessage = message.trim();
    
    if (!trimmedMessage) {
      errors.message = 'Mensagem é obrigatória';
    } else if (trimmedMessage.length < this.MIN_MESSAGE_LENGTH) {
      errors.message = `Mensagem deve ter pelo menos ${this.MIN_MESSAGE_LENGTH} caracteres`;
    }
  }

  static hasValidationErrors(errors: FormErrors): boolean {
    return Object.keys(errors).length > 0;
  }
}
