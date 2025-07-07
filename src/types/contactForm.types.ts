export interface FormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface FormFieldProps {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  readonly placeholder: string;
  readonly error?: string;
  readonly required?: boolean;
}

export interface SelectOption {
  readonly value: string;
  readonly label: string;
}

export interface FormSubmissionResult {
  readonly success: boolean;
  readonly error?: string;
}
