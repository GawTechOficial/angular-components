import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StructureFieldsComponent } from './components/structure';
import { Structure } from './configurations/structure';

@Component({
  selector: 'g-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StructureFieldsComponent],
})
export class DynamicFormComponent {
  @Input() id!: string;
  @Input() formGroup!: FormGroup;
  @Input() structures!: Signal<Structure[]>;
}
