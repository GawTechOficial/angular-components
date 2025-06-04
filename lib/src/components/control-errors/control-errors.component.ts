import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'g-control-errors',
  templateUrl: './control-errors.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ControlErrorsComponent {
  public static nextId = 0;

  @Input() id: string = `g-control-errors-${ControlErrorsComponent.nextId++}`;
  @Input() control!: AbstractControl;
  @Input() errorMessages: any = {};

  getErrorMessagesList() {
    if (!this.control || !this.control.dirty) {
      return [];
    }
    return Object.keys(this.control.errors || {}).map(
      (error) => this.errorMessages?.[error]
    );
  }
}
