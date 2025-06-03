import { BaseFieldProps } from './base-field-props';

export interface TextFieldProps extends BaseFieldProps {
  inputType?: string;
  maxLength?: string | number;
  browserAutocomplete?: boolean;
  style?: { [klass: string]: any };
  mask?: () => string | any;
  onBlur?: (e: FocusEvent) => void;
  onComplete?: (event: FocusEvent) => void;
  onInput?: (e: InputEvent) => void;
  onFocus?: (e: FocusEvent) => void;
}
