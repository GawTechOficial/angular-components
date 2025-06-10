import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FieldType, FormField } from '../../../configurations/fields';
import { GLabelLayoutComponent } from '../../layout/g-label-layout/g-label-layout.component';

@Component({
  selector: 'g-input-text',
  templateUrl: './input-text.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    KeyFilterModule,
    GLabelLayoutComponent,
  ],
})
export class InputTextComponent implements AfterViewInit {
  @Input() field!: FormField<string, FieldType.InputText, any>;
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

    if (style) {
      return style;
    }

    return { width: '100%' };
  }

  getSizeClasses(): string[] {
    const classes = [];
    const size = this.field.props?.size;
    if (size === 'small') {
      classes.push('p-inputtext-sm');
    } else if (size === 'large') {
      classes.push('p-inputtext-lg');
    }
    return classes;
  }
}
