import { Component, OnInit, signal, Signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AnyFormFieldsArray,
  createStructure,
  DynamicFormComponent,
  Structure,
  StructureType,
} from '@gawtech/angular-components';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { defaultFieldsBuilder } from './fields/default-fields';
import { floatFieldsBuilder } from './fields/float-fields';
import { iftaFieldsBuilder } from './fields/ifta-fields';
@Component({
  selector: 'app-input-text-showcase',
  templateUrl: './input-text-showcase.component.html',
  standalone: true,
  imports: [
    DynamicFormComponent,
    ReactiveFormsModule,
    SelectModule,
    FormsModule,
    DividerModule,
  ],
})
export class InputTextShowcaseComponent implements OnInit {
  currentFieldsBuilder = defaultFieldsBuilder;
  formGroup!: (typeof this.currentFieldsBuilder)['formGroup'];
  fields!: (typeof this.currentFieldsBuilder)['fields'];

  structures: Signal<Structure[]> = signal([]);

  activeInputTextVariant: string = 'default';

  inputTextVariants = [
    { label: 'Default', value: 'default' },
    { label: 'Float Label', value: 'float' },
    { label: 'Ifta Label', value: 'ifta' },
  ];

  public ngOnInit(): void {
    this.generateFormByVariant(this.activeInputTextVariant);
    // this.formGroup.controls.textFieldType.setValue(55);
  }

  onVariantChange(variant: string): void {
    this.generateFormByVariant(variant);
  }

  generateFormByVariant(variant: string) {
    switch (variant) {
      case 'float':
        this.currentFieldsBuilder = floatFieldsBuilder;
        break;
      case 'ifta':
        this.currentFieldsBuilder = iftaFieldsBuilder;
        break;
      default:
        this.currentFieldsBuilder = defaultFieldsBuilder;
        break;
    }

    this.formGroup = this.currentFieldsBuilder.formGroup;
    this.fields = this.currentFieldsBuilder.fields;

    this.createStructures(this.fields, variant);
  }

  createStructures(fields: AnyFormFieldsArray, variant: string) {
    this.structures = signal([
      createStructure({
        type: StructureType.Section,
        fields: fields,
        errorMessages: {
          required: 'Campo obrigatório',
          email: 'Email inválido',
          noWhitespace: 'Não pode conter espaços em branco',
        },
        props: {
          header: 'Exemplo de Input ' + variant.toUpperCase(),
        },
      }),
    ]);
  }
}
