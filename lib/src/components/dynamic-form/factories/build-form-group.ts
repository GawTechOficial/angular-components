import { AbstractControlOptions, FormControl, FormGroup } from '@angular/forms';
import { FormField } from 'lib/src/components/dynamic-form/configurations/fields';

export function buildFormGroup(fields: FormField[]): FormGroup {
  const controls: Record<string, FormControl> = {};

  fields.forEach((field) => {
    const options: AbstractControlOptions = {
      validators: field.validators ?? [],
      asyncValidators: field.asyncValidators ?? [],
      updateOn: field.updateOn ?? 'change',
    };

    controls[field.name] = new FormControl(
      { value: field.defaultValue, disabled: field.disabled ?? false },
      options
    );
  });

  return new FormGroup(controls, { updateOn: 'change' });
}
