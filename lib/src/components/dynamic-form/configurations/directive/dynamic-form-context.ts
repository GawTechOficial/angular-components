import { FormGroup } from '@angular/forms';
import { FormField } from '../fields';
import { Structure } from '../structure';

export interface DynamicFormContext {
  config: FormField | Structure;
  formGroup: FormGroup;
}
