import { useState, useCallback } from 'react';
import type { FormData, FormErrors } from '../types/contactForm.types';
import { ValidationService } from '../services/ValidationService';
import { FormSubmissionService } from '../services/FormSubmissionService';
import { NotificationService } from '../services/NotificationService';

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = useCallback((
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    
    setFormData(previous => ({ 
      ...previous, 
      [name]: value 
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(previous => ({ 
        ...previous, 
        [name]: undefined 
      }));
    }
  }, [errors]);

  const submitForm = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    
    const validationErrors = ValidationService.validateFormData(formData);
    setErrors(validationErrors);
    
    if (ValidationService.hasValidationErrors(validationErrors)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await FormSubmissionService.submitContactForm(formData);
      
      if (result.success) {
        NotificationService.showSuccess('Message sent successfully!');
        setFormData(INITIAL_FORM_DATA);
        setErrors({});
      } else {
        NotificationService.showError(result.error || 'Unknown error');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    updateField,
    submitForm,
    resetForm,
  };
};
