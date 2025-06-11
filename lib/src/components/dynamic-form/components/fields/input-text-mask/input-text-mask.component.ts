import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldType, FormField } from '../../../configurations/fields';
import { GInputGroupLayoutComponent } from '../../layout/g-input-group-layout/g-input-group-layout.component';

@Component({
  selector: 'g-input-text-mask',
  templateUrl: './input-text-mask.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputMaskModule,
    GInputGroupLayoutComponent,
  ],
})
export class InputTextMaskComponent implements AfterViewInit {
  @Input() field!: FormField<string, FieldType.InputTextMask, any>;
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

  onCompleteHandler(event: any) {
    this.field.props?.onComplete?.(event);
  }

  get validSize(): 'small' | 'large' | null {
    const size = this.field.props?.size;
    return size === 'small' || size === 'large' ? size : null;
  }

  getInputStyleClass(): string {
    const styleClass = this.field.props?.styleClass;

    if (styleClass) {
      return styleClass;
    }

    return 'w-full';
  }
}
