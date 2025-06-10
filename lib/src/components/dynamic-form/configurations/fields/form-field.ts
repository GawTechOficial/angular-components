import { TemplateRef } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { InferValueType } from '../../factories/form-group-builder';
import { FieldTypePropsMap } from '../../mappings/field-type-props-map';
import { FieldSize } from './field-size';
import { FieldType } from './field-type';

export type AnyFormField = FormField<string, FieldType, any>;

export type AnyFormFieldsArray = AnyFormField[];

export interface FormField<
  N extends string,
  T extends FieldType = FieldType,
  VT = any
> {
  id?: string;
  name: N;
  type: T;
  size?: FieldSize;
  tooltip?: string;
  visible?: () => boolean;
  valueType?: VT;
  defaultValue?: InferValueType<VT>;
  nonNullable?: boolean;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
  updateOn?: 'change' | 'blur' | 'submit';
  disabled?: boolean;
  props?: FieldTypePropsMap[T];
  footer?: FieldFooter<N, T, VT>; //TODO
  bottomTemplate?: TemplateRef<Element>; //TODO
}

type FieldFooter<
  N extends string = string,
  T extends FieldType = FieldType,
  VT = any
> = {
  help?: {
    text: string;
    visible?: (options: { formField: FormField<N, T, VT> }) => boolean;
  };
  link?: {
    label: string;
    onClick: (options: { formField: FormField<N, T, VT> }) => void;
    visible?: (options: { formField: FormField<N, T, VT> }) => boolean;
  };
};
