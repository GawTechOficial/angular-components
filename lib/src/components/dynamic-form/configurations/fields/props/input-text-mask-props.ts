import { FloatLabelVariant } from '../label-type';
import {
  AddonConfigProps,
  IconConfigProps,
  LabelConfigProps,
} from './input-shared-props';

type BaseInputTextMaskProps = {
  label?: string;
  floatLabelVariant?: FloatLabelVariant;

  // Input behavior
  mask: string;
  readonly?: boolean;
  inputType?: string;
  tabindex?: number;
  maxLength?: string | number;
  size?: 'small' | 'large';
  style?: { [klass: string]: any };
  browserAutocomplete?: boolean;
  slotChar?: string;
  autoClear?: boolean;
  showClear?: boolean;
  styleClass?: string;
  unmask?: boolean;
  characterPattern?: string;
  autofocus?: boolean;
  keepBuffer?: boolean;
  // Events
  onBlur?: (e: FocusEvent) => void;
  onComplete?: (event: FocusEvent) => void;
  onInput?: (e: InputEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onKeydown?: (event: KeyboardEvent) => void;
  /**
   * Called when the input is cleared via the clear icon.
   * Only works if showClear is true.
   */
  onClear?: (value: any) => void;
};

export type InputTextMaskProps = BaseInputTextMaskProps &
  LabelConfigProps &
  AddonConfigProps &
  IconConfigProps;
