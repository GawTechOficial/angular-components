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
import { FieldType, FormField } from '../../../configurations/fields';
import { FieldLabelComponent } from '../../field-label/field-label.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FieldLabelComponent,
  ],
})
export class TextFieldComponent implements AfterViewInit {
  @Input() field!: FormField<FieldType.Text>;
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
