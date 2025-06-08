import { Component, OnInit, signal, Signal } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
import { SelectModule } from 'primeng/select';
import { CustomValidators } from '../../utils/custom-validators';

@Component({
  selector: 'app-input-text-showcase',
  templateUrl: './input-text-showcase.component.html',
  standalone: true,
  imports: [
    DynamicFormComponent,
    ReactiveFormsModule,
    SelectModule,
    FormsModule,
  ],
})
export class InputTextShowcaseComponent implements OnInit {
  formGroup = new FormGroup({});
  structures: Signal<Structure[]> = signal([]);

  inputTextVariants = [
    { label: 'Default', value: 'default' },
    { label: 'Float Label', value: 'float' },
    { label: 'Ifta Label', value: 'ifta' },
  ];

  activeInputTextVariant = 'default';

  public ngOnInit(): void {
    this.generateFormByVariant(this.activeInputTextVariant);
  }

  generateFormByVariant(variant: string) {
    let fields: FormField[] = [];

    switch (variant) {
      case 'float':
        fields = this.getFloatFields();
        break;
      case 'ifta':
        fields = this.getIftaFields();
        break;
      case 'default':
      default:
        fields = this.getDefaultFields();
        break;
    }

    this.formGroup = buildFormGroup(fields);
    this.createStructures(fields, variant);
  }

  createStructures(fields: FormField[], variant: string) {
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

  getFloatFields(): FormField[] {
    return [
      createField({
        name: 'requiredText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        validators: [Validators.required],
        defaultValue: 'Texto obrigatório',
        props: {
          label: 'Validator: ',
          labelType: 'float',
          floatLabelVariant: 'on',
        },
      }),
      createField({
        name: 'noWhitespaceText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        validators: [CustomValidators.noWhitespace],
        defaultValue: 'Não aceita espaços em branco',
        props: {
          labelType: 'float',
          label: 'CustomValidator ',
          floatLabelVariant: 'on',
        },
      }),
      createField({
        name: 'maxLengthText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Máximo 10 caracteres',
          labelType: 'float',
          floatLabelVariant: 'on',
          maxLength: 10,
        },
      }),
      createField({
        name: 'onlyNumbers',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Somente números',
          keyFilter: 'int',
        },
      }),
      createField({
        name: 'readonlyText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        defaultValue: 'Texto somente leitura',
        props: {
          label: 'Somente leitura',
          labelType: 'float',
          floatLabelVariant: 'on',
          readonly: true,
        },
      }),
      createField({
        name: 'leftAddonText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Com prefixo',
          leftAddon: 'R$',
          leftAddonType: 'text',
        },
      }),
      createField({
        name: 'rightAddonIcon',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Com sufixo',
          rightAddon: 'pi pi-check',
          rightAddonType: 'icon',
        },
      }),
      createField({
        name: 'iconsBothSides',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Com ícones',
          leftIcon: 'pi pi-user',
          rightIcon: 'pi pi-check',
        },
      }),
      createField({
        name: 'inputEventText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Com Eventos',
          onInput: (e: InputEvent) => console.log('Input:', e),
          onBlur: (e: FocusEvent) => console.log('Blur:', e),
          onFocus: (e: FocusEvent) => console.log('Focus:', e),
        },
      }),
      createField({
        name: 'email',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Autocomplete TRUE',
          browserAutocomplete: true,
        },
      }),
      createField({
        name: 'placeholderfield',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Com placeholder',
        },
      }),
      createField({
        name: 'customStyleField',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Com estilo',
          style: {
            backgroundColor: '#054f77',
            color: '#ff00ff',
            width: '100%',
          },
        },
      }),
      createField({
        name: 'inputTypePassword',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Campo senha',
          inputType: 'password',
        },
      }),
      createField({
        name: 'small',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Size Small',
          size: 'small',
        },
      }),
      createField({
        name: 'grande',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Size Large',
          size: 'large',
        },
      }),
      createField({
        name: 'disabledField',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        disabled: true,
        defaultValue: 'Desabilitado',
        props: {
          labelType: 'float',
          floatLabelVariant: 'on',
          label: 'Disabled',
          size: 'large',
        },
      }),
    ];
  }

  getIftaFields(): FormField[] {
    return [
      createField({
        name: 'requiredText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        validators: [Validators.required],
        props: {
          label: 'Validator: ',
          placeholder: 'Texto obrigatório',
          labelType: 'ifta',
        },
      }),
      createField({
        name: 'noWhitespaceText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        validators: [CustomValidators.noWhitespace],
        props: {
          labelType: 'ifta',
          label: 'CustomValidator ',
          placeholder: 'Não aceita espaços em branco',
        },
      }),
      createField({
        name: 'maxLengthText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Máximo 10 caracteres',
          labelType: 'ifta',
          maxLength: 10,
        },
      }),
      createField({
        name: 'onlyNumbers',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Somente números',
          labelType: 'ifta',
          keyFilter: 'int',
        },
      }),
      createField({
        name: 'readonlyText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        defaultValue: 'Texto somente leitura',
        props: {
          label: 'Somente leitura',
          labelType: 'ifta',
          readonly: true,
        },
      }),
      createField({
        name: 'leftAddonText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com prefixo',
          labelType: 'ifta',
          leftAddon: 'R$',
          leftAddonType: 'text',
        },
      }),
      createField({
        name: 'rightAddonIcon',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com sufixo',
          labelType: 'ifta',
          rightAddon: 'pi pi-check',
          rightAddonType: 'icon',
        },
      }),
      createField({
        name: 'iconsBothSides',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com ícones',
          labelType: 'ifta',
          leftIcon: 'pi pi-user',
          rightIcon: 'pi pi-check',
        },
      }),
      createField({
        name: 'inputEventText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com Eventos',
          labelType: 'ifta',
          onInput: (e: InputEvent) => console.log('Input:', e),
          onBlur: (e: FocusEvent) => console.log('Blur:', e),
          onFocus: (e: FocusEvent) => console.log('Focus:', e),
        },
      }),
      createField({
        name: 'email',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Autocomplete TRUE',
          labelType: 'ifta',
          browserAutocomplete: true,
        },
      }),
      createField({
        name: 'placeholderfield',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com placeholder',
          labelType: 'ifta',
          placeholder: 'Digite Aqui...',
        },
      }),
      createField({
        name: 'customStyleField',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com estilo',
          labelType: 'ifta',
          style: {
            backgroundColor: '#054f77',
            color: '#ff00ff',
            width: '100%',
          },
        },
      }),
      createField({
        name: 'inputTypePassword',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Campo senha',
          labelType: 'ifta',
          inputType: 'password',
        },
      }),
      createField({
        name: 'small',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Size Small',
          labelType: 'ifta',
          size: 'small',
        },
      }),
      createField({
        name: 'grande',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Size Large',
          labelType: 'ifta',
          size: 'large',
        },
      }),
      createField({
        name: 'disabledField',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        disabled: true,
        defaultValue: 'Desabilitado',
        props: {
          label: 'Disabled',
          labelType: 'ifta',
          size: 'large',
        },
      }),
    ];
  }

  getDefaultFields(): FormField[] {
    return [
      createField({
        name: 'requiredText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        validators: [Validators.required],
        props: {
          label: 'Validator',
          placeholder: 'Texto obrigatório',
          labelType: 'default',
        },
      }),
      createField({
        name: 'noWhitespaceText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        validators: [CustomValidators.noWhitespace],
        props: {
          label: 'CustomValidator',
          placeholder: 'Não aceita espaços em branco',
          labelType: 'default',
        },
      }),
      createField({
        name: 'maxLengthText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Máximo 10 caracteres',
          labelType: 'default',
          maxLength: 10,
        },
      }),
      createField({
        name: 'onlyNumbers',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Somente números',
          labelType: 'default',
          keyFilter: 'int',
        },
      }),
      createField({
        name: 'readonlyText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        defaultValue: 'Texto somente leitura',
        props: {
          label: 'Somente leitura',
          labelType: 'default',
          readonly: true,
        },
      }),
      createField({
        name: 'leftAddonText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com prefixo',
          labelType: 'default',
          leftAddon: 'R$',
          leftAddonType: 'text',
        },
      }),
      createField({
        name: 'rightAddonIcon',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com sufixo',
          labelType: 'default',
          rightAddon: 'pi pi-check',
          rightAddonType: 'icon',
        },
      }),
      createField({
        name: 'iconsBothSides',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com ícones',
          labelType: 'default',
          leftIcon: 'pi pi-user',
          rightIcon: 'pi pi-check',
        },
      }),
      createField({
        name: 'inputEventText',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com Eventos',
          labelType: 'default',
          onInput: (e: InputEvent) => console.log('Input:', e),
          onBlur: (e: FocusEvent) => console.log('Blur:', e),
          onFocus: (e: FocusEvent) => console.log('Focus:', e),
        },
      }),
      createField({
        name: 'email',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Autocomplete TRUE',
          labelType: 'default',
          browserAutocomplete: true,
        },
      }),
      createField({
        name: 'placeholderfield',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com placeholder',
          labelType: 'default',
          placeholder: 'Digite Aqui...',
        },
      }),
      createField({
        name: 'customStyleField',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Com estilo',
          labelType: 'default',
          style: {
            backgroundColor: '#054f77',
            color: '#ff00ff',
            width: '100%',
          },
        },
      }),
      createField({
        name: 'inputTypePassword',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Campo senha',
          labelType: 'default',
          inputType: 'password',
        },
      }),
      createField({
        name: 'small',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Size Small',
          labelType: 'default',
          size: 'small',
        },
      }),
      createField({
        name: 'grande',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        props: {
          label: 'Size Large',
          labelType: 'default',
          size: 'large',
        },
      }),
      createField({
        name: 'disabledField',
        type: FieldType.InputText,
        size: { sm: 12, md: 4 },
        disabled: true,
        defaultValue: 'Desabilitado',
        props: {
          label: 'Disabled',
          labelType: 'default',
          size: 'large',
        },
      }),
    ];
  }
}
