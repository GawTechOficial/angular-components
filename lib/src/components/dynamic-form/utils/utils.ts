import { FormControl, FormGroup } from '@angular/forms';

export function validateFields(formGroup: FormGroup): void {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);

    if (control instanceof FormControl) {
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateFields(control);
    }
  });
}
