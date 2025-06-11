import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlErrorMessages } from 'lib/src/components/control-errors/control-error-messages';
import { Structure, StructureType } from '../../../configurations/structure';
import { StructureRendererContentComponent } from '../structure-renderer-content/structure-renderer-content.component';

@Component({
  selector: 'g-section',
  templateUrl: './section.component.html',
  standalone: true,
  imports: [CommonModule, StructureRendererContentComponent],
})
export class SectionComponent {
  @Input() structure!: Structure<StructureType.Section>;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: ControlErrorMessages;
}
