export interface ControlErrorMessages {
  required?: string;
  minlength?: string;
  maxlength?: string;
  min?: string;
  max?: string;
  email?: string;
  pattern?: string;
  [customErrorKey: string]: string | undefined;
}
