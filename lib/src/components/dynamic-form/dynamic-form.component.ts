import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  Input,
  Signal,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StructureFieldsComponent } from './components/structure';
import { Structure } from './configurations/structure';
import { StructureType } from './configurations/structure/structure-type';

@Component({
  selector: 'g-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StructureFieldsComponent],
})
export class DynamicFormComponent {
  @Input() id!: string;
  @Input() formGroup!: FormGroup;
  @Input() structures!: Signal<Structure[]>;
  @Input() errorMessages?: any;

  readonly structureType = StructureType;
}
