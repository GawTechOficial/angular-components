import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'g-label',
  templateUrl: './label.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class LabelComponent {
  @Input() label!: string;
  @Input() id?: string;
  @Input() for?: string;
  @Input() required: boolean = false;
}
