import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlErrorMessages } from 'lib/src/components/control-errors/control-error-messages';
import { ControlErrorsComponent } from '../../../../control-errors/control-errors.component';
import { AnyFormField } from '../../../configurations/fields';
import { Structure } from '../../../configurations/structure/structure';
import { DynamicFormDirective } from '../../../directives/dynamic-form.directive';

@Component({
  selector: 'structure-renderer-content',
  templateUrl: './structure-renderer-content.component.html',
  standalone: true,
  imports: [CommonModule, DynamicFormDirective, ControlErrorsComponent],
})
export class StructureRendererContentComponent {
  @Input() structure!: Structure;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: ControlErrorMessages;

  getTailwindSize(field: AnyFormField): string {
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
