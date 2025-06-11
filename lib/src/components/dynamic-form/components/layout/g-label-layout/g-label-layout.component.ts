import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import {
  FieldType,
  FormField,
  InputTextMaskProps,
  InputTextProps,
} from '../../../configurations/fields';
import {
  LeftAddon,
  RightAddon,
} from '../../../configurations/fields/props/input-shared-props';
import { LabelComponent } from '../../fields/label/label.component';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { GInputGroupLayoutComponent } from '../g-input-group-layout/g-input-group-layout.component';
@Component({
  selector: 'g-label-layout',
  templateUrl: './g-label-layout.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FloatLabelModule,
    IftaLabelModule,
    LabelComponent,
    GInputGroupLayoutComponent,
    IconFieldModule,
    InputIconModule,
  ],
})
export class GLabelLayoutComponent implements AfterContentInit {
  @Input() field!: FormField<
    string,
    FieldType.InputText | FieldType.InputTextMask,
    any
  >;
  @Input() for: string = '';

  @ContentChild(TemplateRef) fieldTemplate!: TemplateRef<any>;

  ngAfterContentInit() {
    if (!this.fieldTemplate) {
      console.warn(
        'g-label-layout: nenhum conteúdo #fieldTemplate foi fornecido!'
      );
    }
  }

  get props(): Partial<InputTextProps | InputTextMaskProps> {
    return this.field?.props ?? {};
  }

  get hasAnyAddon(): boolean {
    return this.isLeftAddon(this.props) || this.isRightAddon(this.props);
  }

  private isLeftAddon(p: any): p is LeftAddon {
    return !!p?.leftAddon && !!p?.leftAddonType;
  }

  private isRightAddon(p: any): p is RightAddon {
    return !!p?.rightAddon && !!p?.rightAddonType;
  }

  get hasIcon(): boolean {
    return !!this.leftIcon || !!this.rightIcon;
  }

  get leftIcon(): string {
    return this.props.leftIcon ?? '';
  }

  get rightIcon(): string {
    return this.props.rightIcon ?? '';
  }

  hasRequiredValidator(): boolean {
    if (!this.field.validators?.length) {
      return false;
    }

    const control = new FormControl('');

    return (
      this.field.validators.some((validator) => {
        const errors = validator(control);
        return errors?.['required'];
      }) ?? false
    );
  }
}
