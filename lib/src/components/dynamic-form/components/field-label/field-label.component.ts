import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'g-field-label',
  templateUrl: './field-label.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FieldLabelComponent {
  @Input() label!: string;
  @Input() id?: string;
  @Input() required: boolean = false;
}
