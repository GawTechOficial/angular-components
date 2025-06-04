import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../configurations/fields';
import { BaseStructureComponentConfig } from '../../../configurations/structure/base-structure-component';
import { Section } from '../../../configurations/structure/section';
import { StructureRendererContentComponent } from '../structure-renderer-content/structure-renderer-content.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, StructureRendererContentComponent],
})
export class SectionComponent implements BaseStructureComponentConfig {
  @Input() structure!: Section;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: any;
}
