import { KeyFilterPattern } from 'primeng/keyfilter';
import { FloatLabelVariant } from '../label-type';
import {
  AddonConfigProps,
  IconConfigProps,
  LabelConfigProps,
} from './input-shared-props';

type BaseInputTextProps = {
  label?: string;
  floatLabelVariant?: FloatLabelVariant;
  readonly?: boolean;
  inputType?: string;
  tabindex?: number;
  maxLength?: string | number;
  size?: 'small' | 'large';
  style?: { [klass: string]: any };
  browserAutocomplete?: boolean;
  keyFilter?: RegExp | KeyFilterPattern;
  // Events
  onBlur?: (e: FocusEvent) => void;
  onComplete?: (event: FocusEvent) => void;
  onInput?: (e: InputEvent) => void;
  onFocus?: (e: FocusEvent) => void;
};

export type InputTextProps = BaseInputTextProps &
  LabelConfigProps &
  AddonConfigProps &
  IconConfigProps;
