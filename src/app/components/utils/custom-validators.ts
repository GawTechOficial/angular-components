import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    const isWhitespace = typeof value === 'string' && value.trim().length === 0;
    return isWhitespace ? { noWhitespace: true } : null;
  }
}
