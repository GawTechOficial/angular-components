import { Component, OnInit, signal, Signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  buildFormGroup,
  createField,
  DynamicFormComponent,
  FieldType,
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

  configs: Signal<Structure[]> = signal([]);

  public ngOnInit(): void {
    this.createFields();
  }

  createFields() {
    const fields = [
      createField({
        name: 'name',
        type: FieldType.Text,
        size: { sm: 12, md: 4 },
        visible: () => true,
        validators: [Validators.required, CustomValidators.noWhitespace],
        disabled: false,
        nonNullable: true,
        props: {
          label: 'Email',
          placeholder: 'Digite seu nome',
          onBlur: (e: any) =>
            console.log('blur name', this.formGroup.get('name')?.value),
        },
      }),
      createField({
        name: 'www',
        type: FieldType.Text,
        size: { sm: 12, md: 4 },
        visible: () => true,
        validators: [Validators.required],
        disabled: false,
        nonNullable: true,
        props: {
          label: 'Email',
          placeholder: 'Digite seu nome',
        },
      }),
      createField({
        name: 'label',
        label: 'Nome completo',
        type: FieldType.Text,
        size: { sm: 12, md: 4 },
        visible: () => true,
        validators: [Validators.email],
        props: {
          label: 'Label',
          placeholder: 'Digite seu nome',
        },
      }),
    ];

    this.formGroup = buildFormGroup(fields);

    this.configs = signal([
      {
        type: StructureType.Panel,
        header: 'Informações em Painel',
        fields: fields,
      },
    ]);
  }
}
