import React from 'react';
import type { FormFieldProps, SelectOption } from '../../types/contactForm.types';
import { CustomSelect } from './CustomSelect';
import contactSectionStyles from '../../styles/contactSection.styles';

interface FormSelectProps extends FormFieldProps {
  readonly label: string;
  readonly options: readonly SelectOption[];
}

export const FormSelect: React.FC<FormSelectProps> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  label,
  options,
}) => (
  <div className={contactSectionStyles.formGroup}>
    <label htmlFor={id} className={contactSectionStyles.formLabel}>
      {label}
    </label>
    <CustomSelect
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      hasError={!!error}
      required={required}
    />
    {error && <span className={contactSectionStyles.formError}>{error}</span>}
  </div>
);
