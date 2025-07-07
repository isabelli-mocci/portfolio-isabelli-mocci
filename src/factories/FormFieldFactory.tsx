import React from 'react';
import type { FormFieldProps } from '../types/contactForm.types';
import { FormInput } from '../components/Contact/FormInput';
import { FormTextarea } from '../components/Contact/FormTextarea';
import { FormSelect } from '../components/Contact/FormSelect';

type FormFieldType = 'input' | 'email' | 'textarea' | 'select';

interface FormFieldConfig extends FormFieldProps {
  readonly type: FormFieldType;
  readonly label: string;
  readonly options?: readonly { value: string; label: string }[];
}

export class FormFieldFactory {
  static createField(config: FormFieldConfig): React.ReactElement {
    const { type, label, options, ...fieldProps } = config;

    switch (type) {
      case 'input':
        return (
          <FormInput
            {...fieldProps}
            type="text"
            label={label}
          />
        );

      case 'email':
        return (
          <FormInput
            {...fieldProps}
            type="email"
            label={label}
          />
        );

      case 'textarea':
        return (
          <FormTextarea
            {...fieldProps}
            label={label}
          />
        );

      case 'select':
        if (!options) {
          throw new Error('Select field requires options');
        }
        return (
          <FormSelect
            {...fieldProps}
            label={label}
            options={options}
          />
        );

      default:
        throw new Error(`Unsupported field type: ${type}`);
    }
  }
}
