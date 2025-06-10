import { AbstractControlOptions, FormControl, FormGroup } from '@angular/forms';
import { AnyFormField } from '../configurations/fields';

export type InferValueType<VT> = VT extends BooleanConstructor
  ? boolean
  : VT extends StringConstructor
  ? string
  : VT extends NumberConstructor
  ? number
  : VT extends ArrayConstructor
  ? any[]
  : VT extends DateConstructor
  ? Date
  : VT extends ObjectConstructor
  ? Record<string, any>
  : VT extends new (...args: any[]) => infer I
  ? I
  : VT;

type FieldValueType<F extends AnyFormField> = InferValueType<F['valueType']>;

type FieldToControl<F extends AnyFormField> = F['nonNullable'] extends true
  ? FormControl<NonNullable<FieldValueType<F>>>
  : FormControl<FieldValueType<F> | null>;

export type FieldsToControls<T extends readonly AnyFormField[]> = {
  [K in T[number]['name']]: FieldToControl<Extract<T[number], { name: K }>>;
};

export function buildFormGroup<T extends readonly AnyFormField[]>(
  fields: T
): FormGroup<FieldsToControls<T>> {
  const controls = Object.fromEntries(
    fields.map((field) => [field.name, createControl(field)])
  ) as FieldsToControls<T>;

  return new FormGroup(controls);
}

function createControl<F extends AnyFormField>(field: F): FieldToControl<F> {
  const options: AbstractControlOptions = {
    validators: field.validators ?? [],
    asyncValidators: field.asyncValidators ?? [],
    updateOn: field.updateOn ?? 'change',
  };

  const value = field.nonNullable
    ? field.defaultValue ?? getDefaultByConstructor(field.valueType)
    : field.defaultValue ?? null;

  return field.nonNullable
    ? new FormControl(
        { value, disabled: field.disabled ?? false },
        { ...options, nonNullable: true }
      )
    : new FormControl({ value, disabled: field.disabled ?? false }, options);
}

function getDefaultByConstructor<T>(ctor: Function): T {
  switch (ctor) {
    case String:
      return '' as T;
    case Number:
      return 0 as T;
    case Boolean:
      return false as T;
    case Array:
      return [] as T;
    case Object:
      return {} as T;
    case Date:
      return new Date() as T;
    default:
      try {
        return new (ctor as new () => T)();
      } catch {
        return undefined as unknown as T;
      }
  }
}
