import { FormGroup } from '@angular/forms';
import type { FieldType } from '../configurations/fields/field-type';
import type { FormField } from '../configurations/fields/form-field';
import {
  buildFormGroup,
  FieldsToControls,
  InferValueType,
} from './form-group-builder';

export function fieldsBuilder() {
  return new FieldBuilder();
}

class FieldBuilder<
  T extends readonly FormField<string, FieldType, any>[] = []
> {
  private fields: T;

  constructor(fields: T = [] as unknown as T) {
    this.fields = fields;
  }

  addField<
    const N extends string,
    const F extends FieldType,
    const VT,
    const NN extends boolean = false
  >(
    field: Omit<FormField<N, F, VT> & { nonNullable?: NN }, 'defaultValue'> & {
      defaultValue?: NN extends true
        ? NonNullable<InferValueType<VT>>
        : InferValueType<VT> | null;
    }
  ): FieldBuilder<[...T, FormField<N, F, VT> & { nonNullable: NN }]> {
    const fieldName = field.name;

    if (this.fields.some((f) => f.name === fieldName)) {
      throw new Error(
        `Já existe um campo com o nome "${fieldName}". Os nomes dos campos devem ser únicos.`
      );
    }

    const fieldWithId = {
      ...field,
      id: field.id ?? `field-${field.name}`,
    } as FormField<N, F, VT> & { nonNullable: NN };

    const newFields = [...this.fields, fieldWithId] as [
      ...T,
      typeof fieldWithId
    ];
    return new FieldBuilder(newFields);
  }

  build() {
    return {
      fields: this.getFields(),
      formGroup: this.buildFormGroup(),
    };
  }

  getFields(): T {
    return this.fields;
  }

  buildFormGroup(): FormGroup<FieldsToControls<T>> {
    return buildFormGroup(this.fields);
  }
}
