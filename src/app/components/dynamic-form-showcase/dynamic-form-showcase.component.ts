import { Component, OnInit, signal, Signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  buildFormGroup,
  createField,
  createStructure,
  DynamicFormComponent,
  FieldType,
  Structure,
  StructureType,
  FormField,
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
        type: FieldType.Text,
        size: { sm: 12, md: 12 },
        visible: () => true,
        validators: [CustomValidators.noWhitespace, Validators.email],
        disabled: false,
        nonNullable: true,
        props: {
          label: 'Email',
          placeholder: 'Digite seu email',
          onBlur: (e: any) =>
            console.log('blur name', this.formGroup.get('email')?.value),
        },
      }),
      createField({
        name: 'Endereço',
        type: FieldType.Text,
        size: { sm: 12, md: 12 },
        visible: () => true,
        validators: [Validators.required],
        disabled: false,
        nonNullable: true,
        props: {
          label: 'Endereço',
          placeholder: 'Digite seu endereço',
        },
      }),
      createField({
        name: 'cidade',
        label: 'Cidade',
        type: FieldType.Text,
        size: { sm: 12, md: 4 },
        visible: () => true,
        props: {
          label: 'Cidade',
          placeholder: 'Digite sua cidade',
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
