import { FieldType } from '../configurations/fields/field-type';
import { InputTextMaskProps } from '../configurations/fields/props/input-text-mask-props';
import { InputTextProps } from '../configurations/fields/props/input-text-props';

export type FieldTypePropsMap = {
  [FieldType.InputText]: InputTextProps;
  [FieldType.InputTextMask]: InputTextMaskProps;
};
