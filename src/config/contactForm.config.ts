import { CONTACT_SECTION_CONSTANTS } from '../constants/contactSection.constants';

export const CONTACT_FORM_FIELDS = {
  PERSONAL_INFO: [
    {
      id: 'name',
      name: 'name',
      type: 'input' as const,
      label: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_NAME_LABEL,
      placeholder: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_NAME_PLACEHOLDER,
      required: true,
    },
    {
      id: 'email',
      name: 'email',
      type: 'email' as const,
      label: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_EMAIL_LABEL,
      placeholder: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_EMAIL_PLACEHOLDER,
      required: true,
    },
  ],
  SUBJECT: {
    id: 'subject',
    name: 'subject',
    type: 'select' as const,
    label: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_SUBJECT_LABEL,
    placeholder: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_SUBJECT_PLACEHOLDER,
    options: CONTACT_SECTION_CONSTANTS.FORM.SUBJECT_OPTIONS,
    required: true,
  },
  MESSAGE: {
    id: 'message',
    name: 'message',
    type: 'textarea' as const,
    label: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_MESSAGE_LABEL,
    placeholder: CONTACT_SECTION_CONSTANTS.TEXTS.FORM_MESSAGE_PLACEHOLDER,
    required: true,
  },
} as const;
