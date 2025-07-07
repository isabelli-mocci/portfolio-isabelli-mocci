import React from 'react';
import contactSectionStyles from '../../styles/contactSection.styles';
import { CONTACT_FORM_FIELDS } from '../../config/contactForm.config';
import { useContactForm } from '../../hooks/useContactForm';
import { FormFieldFactory } from '../../factories/FormFieldFactory';
import { SubmitButton } from './SubmitButton';

export const ContactFormTab: React.FC = () => {
  const { formData, errors, isSubmitting, updateField, submitForm } = useContactForm();

  const renderPersonalInfoFields = () => (
    <div className={contactSectionStyles.formRowGroup}>
      {CONTACT_FORM_FIELDS.PERSONAL_INFO.map((fieldConfig) =>
        <div key={fieldConfig.id}>
          {FormFieldFactory.createField({
            ...fieldConfig,
            value: formData[fieldConfig.name as keyof typeof formData],
            onChange: updateField,
            error: errors[fieldConfig.name as keyof typeof errors],
          })}
        </div>
      )}
    </div>
  );

  const renderSubjectField = () => 
    FormFieldFactory.createField({
      ...CONTACT_FORM_FIELDS.SUBJECT,
      value: formData.subject,
      onChange: updateField,
      error: errors.subject,
    });

  const renderMessageField = () =>
    FormFieldFactory.createField({
      ...CONTACT_FORM_FIELDS.MESSAGE,
      value: formData.message,
      onChange: updateField,
      error: errors.message,
    });

  return (
    <div className="flex-1 flex flex-col py-2 min-h-0">
      <div className={`${contactSectionStyles.formContainer} flex-1 overflow-y-auto`}>
        <form onSubmit={submitForm} className={contactSectionStyles.form}>
          <div className={contactSectionStyles.formFieldGroup}>
            {renderPersonalInfoFields()}
          </div>

          <div className={contactSectionStyles.formFieldGroup}>
            {renderSubjectField()}
          </div>

          <div className={contactSectionStyles.formFieldGroup}>
            {renderMessageField()}
          </div>

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
};
