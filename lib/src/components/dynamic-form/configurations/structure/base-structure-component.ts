import { Panel } from './panel';
import { Section } from './section';
import { FormGroup } from '@angular/forms';

export interface BaseStructureComponentConfig {
  structure: Panel | Section;
  formGroup: FormGroup;
  errorMessages?: any;
}
