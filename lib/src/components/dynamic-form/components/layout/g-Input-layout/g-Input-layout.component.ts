import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
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

@Component({
  selector: 'g-input-layout',
  templateUrl: './g-Input-layout.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    InputGroupModule,
    IconFieldModule,
    InputIconModule,
    InputGroupAddonModule,
    FloatLabelModule,
    IftaLabelModule,
  ],
})
export class GInputLayoutComponent {
  @Input() field!: FormField<FieldType.InputText | FieldType.InputTextMask>;
  @Input() for: string = '';

  @ContentChild(TemplateRef) inputField!: TemplateRef<any>;

  get props(): Partial<InputTextProps | InputTextMaskProps> {
    return this.field?.props ?? {};
  }

  get hasAnyAddon(): boolean {
    return this.hasLeftAddon || this.hasRightAddon;
  }

  get hasLeftAddon(): boolean {
    return this.isLeftAddon(this.props);
  }

  get hasRightAddon(): boolean {
    return this.isRightAddon(this.props);
  }

  get leftAddon(): string | undefined {
    return this.leftAddonRaw?.leftAddon;
  }

  get leftAddonType(): 'text' | 'icon' | undefined {
    return this.leftAddonRaw?.leftAddonType;
  }

  get rightAddon(): string | undefined {
    return this.rightAddonRaw?.rightAddon;
  }

  get rightAddonType(): 'text' | 'icon' | undefined {
    return this.rightAddonRaw?.rightAddonType;
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

  private get leftAddonRaw(): LeftAddon | undefined {
    return this.isLeftAddon(this.props) ? this.props : undefined;
  }

  private get rightAddonRaw(): RightAddon | undefined {
    return this.isRightAddon(this.props) ? this.props : undefined;
  }

  private isLeftAddon(p: any): p is LeftAddon {
    return !!p?.leftAddon && !!p?.leftAddonType;
  }

  private isRightAddon(p: any): p is RightAddon {
    return !!p?.rightAddon && !!p?.rightAddonType;
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
