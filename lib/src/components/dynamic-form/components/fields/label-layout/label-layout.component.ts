import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import {
  LabelType,
  FloatLabelVariant,
} from '../../../configurations/fields/label-type';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { LabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'g-label-layout',
  templateUrl: './label-layout.component.html',
  standalone: true,
  imports: [CommonModule, FloatLabelModule, IftaLabelModule, LabelComponent],
})
export class LabelLayoutComponent {
  @Input() labelType?: LabelType = 'default';
  @Input() floatVariant?: FloatLabelVariant = 'over';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() for: string = '';
  @Input() isRequired: boolean = false;

  @ContentChild('fieldContent', { static: true })
  fieldTemplate?: TemplateRef<any>;

  ngAfterContentInit() {
    if (!this.fieldTemplate) {
      console.warn(
        'g-label-layout: nenhum conteúdo #fieldContent foi fornecido!'
      );
    }
  }
}
