import { TemplateRef } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FieldTypePropsMap } from '../../mappings/field-type-props-map';
import { FieldSize } from './field-size';
import { FieldType } from './field-type';

export interface FormField<T extends FieldType = FieldType> {
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
  errorMessages?: () => {} | {};
  footer?: {
    help?: {
      text: string;
      visible?: (options: { formField: FormField }) => boolean;
    };
    link?: {
      label: string;
      onClick: (options: { formField: FormField }) => void;
      visible?: (options: { formField: FormField }) => boolean;
    };
  };
  bottomTemplate?: TemplateRef<Element>;
}
