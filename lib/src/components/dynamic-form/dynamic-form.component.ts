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
import { normalizeStructure } from './components/structure/normalizeStructure';
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
  @Input() configs!: Signal<Structure[]>;
  @Input() errorMessages?: any;

  readonly structureType = StructureType;

  readonly normalizedStructures = computed(() =>
    this.configs().map(normalizeStructure)
  );
}
