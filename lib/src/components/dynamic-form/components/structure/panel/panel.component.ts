import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { FormField } from '../../../configurations/fields';
import { Panel } from '../../../configurations/structure';
import { BaseStructureComponentConfig } from '../../../configurations/structure/base-structure-component';
import { DynamicFormDirective } from '../../../directives/dynamic-form.directive';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, PanelModule, DynamicFormDirective],
})
export class PanelComponent implements BaseStructureComponentConfig {
  @Input() structure!: Panel;
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
}
