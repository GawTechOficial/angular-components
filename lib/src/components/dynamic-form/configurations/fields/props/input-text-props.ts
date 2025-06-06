import { KeyFilterPattern } from 'primeng/keyfilter';
import { BaseFieldProps } from './base-field-props';

export interface InputTextProps extends BaseFieldProps {
  inputType?: string;
  tabindex?: number;
  keyFilter?: RegExp | KeyFilterPattern;
  maxLength?: string | number;
  browserAutocomplete?: boolean;
  style?: { [klass: string]: any };
  onBlur?: (e: FocusEvent) => void;
  onComplete?: (event: FocusEvent) => void;
  onInput?: (e: InputEvent) => void;
  onFocus?: (e: FocusEvent) => void;
}
