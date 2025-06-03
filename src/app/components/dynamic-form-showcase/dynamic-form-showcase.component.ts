import { Component, OnInit, signal, Signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  buildFormGroup,
  createField,
  DynamicFormComponent,
  FieldType,
  Structure,
  StructureType,
} from '@gawtech/angular-components';

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
        size: { sm: 12, md: 6 },
        visible: () => true,
        defaultValue: 'Alguma coisa',
        validators: [Validators.required, Validators.email],
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
        name: 'label',
        label: 'Nome completo',
        type: FieldType.Text,
        size: { sm: 12, md: 6 },
        visible: () => true,
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
        header: 'Informações Pessoais',
        fields: fields,
      },
    ]);
  }
}
