import { Component, OnInit, signal, Signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  buildFormGroup,
  createField,
  createStructure,
  DynamicFormComponent,
  FieldType,
  FormField,
  Structure,
  StructureType,
} from '@gawtech/angular-components';
import { CustomValidators } from '../utils/custom-validators';

@Component({
  selector: 'app-dynamic-form-showcase',
  templateUrl: './dynamic-form-showcase.component.html',
  standalone: true,
  imports: [DynamicFormComponent, ReactiveFormsModule],
})
export class DynamicFormShowcaseComponent implements OnInit {
  formGroup = new FormGroup({});
  structures: Signal<Structure[]> = signal([]);

  public ngOnInit(): void {
    this.createFields();
  }

  createFields() {
    const fields = [
      createField({
        name: 'email',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        visible: () => true,
        validators: [CustomValidators.noWhitespace, Validators.email],
        disabled: false,
        nonNullable: true,
        props: {
          label: 'Email',
          placeholder: 'Digite seu email',
          onInput: (e: any) =>
            console.log('blur name', this.formGroup.get('email')?.value),
        },
      }),
      createField({
        name: 'inputMask',
        type: FieldType.InputTextMask,
        size: { sm: 12, md: 4 },
        visible: () => true,
        props: {
          label: 'Input Mask',
          placeholder: '(99) 99999-9999',
          mask: '(99) 99999-9999',
          unmask: true,
          onBlur: (e: any) =>
            console.log('blur name', this.formGroup.get('email')?.value),
        },
      }),
    ];

    this.formGroup = buildFormGroup(fields);
    this.createStructures(fields);
  }

  createStructures(fields: FormField[]) {
    this.structures = signal([
      createStructure({
        type: StructureType.Panel,
        fields: fields,
        errorMessages: {
          required: 'Campo obrigatório',
          email: 'Email inválido',
          noWhitespace: 'Não pode conter espaços em branco',
        },
        props: {
          header: 'Dados Pessoais',
        },
      }),
    ]);
  }
}
