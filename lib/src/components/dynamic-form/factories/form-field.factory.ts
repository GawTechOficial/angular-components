import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FormField } from '../configurations/fields/form-field';
import { FieldTypePropsMap } from '../mappings/field-type-props-map';
import { FieldType, FieldSize } from '../configurations/fields';

export function createField<T extends FieldType>(config: {
  id?: string;
  name: string;
  type: T;
  label?: string;
  size?: FieldSize;
  tooltip?: string;
  visible?: () => boolean;
  defaultValue?: any;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
  updateOn?: 'change' | 'blur' | 'submit';
  disabled?: boolean;
  nonNullable?: boolean;
  props?: FieldTypePropsMap[T];
}): FormField {
  return {
    id: config.id ?? 'field-' + config.name,
    name: config.name,
    type: config.type,
    label: config.label,
    size: config.size,
    tooltip: config.tooltip,
    visible: config.visible ?? (() => true),
    defaultValue: config.defaultValue,
    asyncValidators: config.asyncValidators ?? [],
    updateOn: config.updateOn,
    disabled: config.disabled ?? false,
    nonNullable: config.nonNullable ?? false,
    validators: config.validators ?? [],
    props: config.props ?? {},
  };
}
