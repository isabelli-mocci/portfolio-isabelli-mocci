import React from 'react';
import type { FormFieldProps } from '../../types/contactForm.types';
import contactSectionStyles from '../../styles/contactSection.styles';

interface FormTextareaProps extends FormFieldProps {
  readonly label: string;
  readonly minHeight?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  label,
}) => (
  <div className={contactSectionStyles.formGroup}>
    <label htmlFor={id} className={contactSectionStyles.formLabel}>
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={error ? contactSectionStyles.formTextareaError : contactSectionStyles.formTextarea}
      required={required}
    />
    {error && <span className={contactSectionStyles.formError}>{error}</span>}
  </div>
);
