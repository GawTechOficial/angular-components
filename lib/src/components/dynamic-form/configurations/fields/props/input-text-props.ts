import { KeyFilterPattern } from 'primeng/keyfilter';
import { FloatLabelVariant, LabelType } from '../label-type';

export interface InputTextProps {
  label?: string;
  labelType?: LabelType;
  floatLabelVariant?: FloatLabelVariant;
  placeholder?: string;
  keyFilter?: RegExp | KeyFilterPattern;
  maxLength?: string | number;
  readonly?: boolean;
  inputType?: string;
  tabindex?: number;
  browserAutocomplete?: boolean;
  size?: 'small' | 'large';
  style?: { [klass: string]: any };
  onBlur?: (e: FocusEvent) => void;
  onComplete?: (event: FocusEvent) => void;
  onInput?: (e: InputEvent) => void;
  onFocus?: (e: FocusEvent) => void;
}
