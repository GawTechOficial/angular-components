import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../configurations/fields';
import { Section } from '../../../configurations/structure/section';
import { CommonModule } from '@angular/common';
import { DynamicFormDirective } from '../../../directives/dynamic-form.directive';
import { ControlErrorsComponent } from '../../../../control-errors/control-errors.component';

@Component({
  selector: 'structure-renderer-content',
  templateUrl: './structure-renderer-content.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, DynamicFormDirective, ControlErrorsComponent],
})
export class StructureRendererContentComponent {
  @Input() structure!: Section;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: any;

  getTailwindSize(field: FormField): string {
    const size = field.size ?? {};
    return [
      `col-span-${size.sm ?? 12}`,
      size.md ? `md:col-span-${size.md}` : '',
      size.lg ? `lg:col-span-${size.lg}` : '',
      size.xl ? `xl:col-span-${size.xl}` : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  getErrorMessages(customErrors: any): any {
    if (customErrors) {
      return typeof customErrors === 'function'
        ? { ...this.errorMessages, ...customErrors() }
        : { ...this.errorMessages, ...customErrors };
    }
    return this.errorMessages;
  }
}
