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
import { FieldType, FormField } from '../../../configurations/fields';
import { LabelLayoutComponent } from '../label-layout/label-layout.component';

@Component({
  selector: 'app-input-text-mask',
  templateUrl: './input-text-mask.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    LabelLayoutComponent,
    ReactiveFormsModule,
    InputMaskModule,
  ],
})
export class InputTextMaskComponent implements AfterViewInit {
  @Input() field!: FormField<FieldType.InputTextMask>;
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

  onKeydownHandler(event: Event) {
    this.field.props?.onKeydown?.(event as KeyboardEvent);
  }

  onClearHandler(value: any) {
    this.field.props?.onClear?.(value);
  }

  get validSize(): 'small' | 'large' | null {
    const size = this.field.props?.size;
    return size === 'small' || size === 'large' ? size : null;
  }

  getInputStyleClass(): string {
    const styleClass = this.field.props?.styleClass;
    const labelType = this.field.props?.labelType;

    if (styleClass) {
      return styleClass;
    }

    if (labelType && labelType !== 'default') {
      return 'w-full';
    }

    return 'w-full mt-1';
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
