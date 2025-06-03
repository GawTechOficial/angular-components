import { FieldType } from '../configurations/fields/field-type';
import { TextFieldProps } from '../configurations/fields/props/text-field-props';

export type FieldTypePropsMap = {
  [FieldType.Text]: TextFieldProps;
};
