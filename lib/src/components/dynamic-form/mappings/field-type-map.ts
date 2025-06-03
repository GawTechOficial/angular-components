import { TextFieldComponent } from '../components/fields';
import { FieldType } from '../configurations/fields/field-type';

export const fieldTypeToComponent = {
  [FieldType.Text]: TextFieldComponent,
};
