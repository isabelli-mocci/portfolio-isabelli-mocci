import React from 'react';
import type { FormFieldProps } from '../../types/contactForm.types';
import contactSectionStyles from '../../styles/contactSection.styles';

interface FormInputProps extends FormFieldProps {
  readonly type?: 'text' | 'email';
  readonly label: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  type = 'text',
  label,
}) => (
  <div className={contactSectionStyles.formGroup}>
    <label htmlFor={id} className={contactSectionStyles.formLabel}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={error ? contactSectionStyles.formInputError : contactSectionStyles.formInput}
      required={required}
    />
    {error && <span className={contactSectionStyles.formError}>{error}</span>}
  </div>
);
