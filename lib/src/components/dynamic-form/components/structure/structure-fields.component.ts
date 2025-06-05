import { CommonModule } from '@angular/common';
import { Component, Input, Signal, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Structure } from '../../configurations/structure';
import { DynamicFormDirective } from '../../directives/dynamic-form.directive';

@Component({
  selector: 'g-structure-fields',
  templateUrl: './structure-fields.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, DynamicFormDirective],
})
export class StructureFieldsComponent {
  @Input() structures!: Signal<Structure[]>;
  @Input() formGroup!: FormGroup;
}
