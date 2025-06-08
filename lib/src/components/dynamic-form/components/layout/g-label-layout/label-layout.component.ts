import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import {
  FloatLabelVariant,
  LabelType,
} from '../../../configurations/fields/label-type';
import { LabelComponent } from '../../fields/label/label.component';

@Component({
  selector: 'g-label-layout',
  templateUrl: './label-layout.component.html',
  encapsulation: ViewEncapsulation.None,
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
  @Input() fieldTemplate!: TemplateRef<any>;

  ngAfterContentInit() {
    if (!this.fieldTemplate) {
      console.warn(
        'g-label-layout: nenhum conteúdo #fieldContent foi fornecido!'
      );
    }
  }
}
