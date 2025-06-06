import { InputTextComponent } from '../components/fields';
import { InputTextMaskComponent } from '../components/fields/input-text-mask/input-text-mask.component';
import { FieldType } from '../configurations/fields/field-type';

export const fieldTypeToComponent = {
  [FieldType.InputText]: InputTextComponent,
  [FieldType.InputTextMask]: InputTextMaskComponent,
};
