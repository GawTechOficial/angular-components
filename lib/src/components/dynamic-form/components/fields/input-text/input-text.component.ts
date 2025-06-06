import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FieldType, FormField } from '../../../configurations/fields';
import { LabelLayoutComponent } from '../label-layout/label-layout.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    LabelLayoutComponent,
    KeyFilterModule,
    InputMaskModule,
  ],
})
export class InputTextComponent implements AfterViewInit {
  @Input() field!: FormField<FieldType.InputText>;
  @Input() formControl!: FormControl;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  onBlurHandler(event: Event) {
    this.field.props?.onBlur?.(event as FocusEvent);
  }

  onInputHandler(event: Event) {
    this.field.props?.onInput?.(event as InputEvent);
  }

  onFocusHandler(event: Event) {
    this.field.props?.onFocus?.(event as FocusEvent);
  }

  getInputStyle(): Record<string, string> {
    const style = this.field.props?.style;
    const labelType = this.field.props?.labelType;

    if (style) {
      return style;
    }

    if (labelType && labelType !== 'default') {
      return { width: '100%' };
    }

    return { width: '100%', marginTop: '0.25rem' };
  }

  getInputClasses(): string[] {
    const classes = [];
    const size = this.field.props?.size;
    if (size === 'small') {
      classes.push('p-inputtext-sm');
    } else if (size === 'large') {
      classes.push('p-inputtext-lg');
    }
    return classes;
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
