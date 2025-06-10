import { FormGroup } from '@angular/forms';
import { AnyFormField } from '../fields';
import { Structure } from '../structure';

export interface DynamicFormContext {
  config: AnyFormField | Structure;
  formGroup: FormGroup;
}
