import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Structure, StructureType } from '../../../configurations/structure';
import { StructureRendererContentComponent } from '../structure-renderer-content/structure-renderer-content.component';
import { ControlErrorMessages } from 'lib/src/components/control-errors/control-error-messages';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, StructureRendererContentComponent],
})
export class SectionComponent {
  @Input() structure!: Structure<StructureType.Section>;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: ControlErrorMessages;
}
