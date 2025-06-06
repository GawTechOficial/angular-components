import { FloatLabelVariant, LabelType } from '../label-type';

export interface InputTextMaskProps {
  mask: string;
  label?: string;
  labelType?: LabelType;
  floatLabelVariant?: FloatLabelVariant;
  placeholder?: string;
  readonly?: boolean;
  inputType?: string;
  tabindex?: number;
  maxLength?: string | number;
  size?: 'small' | 'large';
  browserAutocomplete?: boolean;
  style?: { [klass: string]: any };
  slotChar?: string;
  autoClear?: boolean;
  showClear?: boolean;
  styleClass?: string;
  unmask?: boolean;
  characterPattern?: string;
  autofocus?: boolean;
  keepBuffer?: boolean;
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
}
