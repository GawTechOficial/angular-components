import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  Input,
  Signal,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { normalizeStructure } from './components/structure/normalizeStructure';
import { StructureType } from './configurations/structure/structure-type';
import { StructureFieldsComponent } from './components/structure';
import { Structure } from './configurations/structure';

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
