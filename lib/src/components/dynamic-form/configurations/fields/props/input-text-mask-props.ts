import { BaseFieldProps } from './base-field-props';

export interface InputTextMaskProps extends BaseFieldProps {
  mask: string;
  inputType?: string;
  tabindex?: number;
  maxLength?: string | number;
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
