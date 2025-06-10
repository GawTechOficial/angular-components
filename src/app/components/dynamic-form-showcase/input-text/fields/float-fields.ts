import { Validators } from '@angular/forms';
import { fieldsBuilder, FieldType } from '@gawtech/angular-components';
import { CustomValidators } from 'src/app/components/utils/custom-validators';

export const floatFieldsBuilder = fieldsBuilder()
  .addField({
    name: 'requiredText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    validators: [Validators.required],
    defaultValue: 'Texto obrigatório',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Validator',
    },
  })
  .addField({
    name: 'noWhitespaceText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    validators: [CustomValidators.noWhitespace],
    defaultValue: 'Não aceita espaços em branco',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'CustomValidator',
    },
  })
  .addField({
    name: 'maxLengthText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Máximo 10 caracteres',
      maxLength: 10,
    },
  })
  .addField({
    name: 'onlyNumbers',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    valueType: Number,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Somente números',
      keyFilter: 'int',
    },
  })
  .addField({
    name: 'readonlyText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: 'Texto somente leitura',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Somente leitura',
      readonly: true,
    },
  })
  .addField({
    name: 'inputEventText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Com Eventos',
      onInput: (e: InputEvent) => console.log('Input:', e),
      onBlur: (e: FocusEvent) => console.log('Blur:', e),
      onFocus: (e: FocusEvent) => console.log('Focus:', e),
    },
  })
  .addField({
    name: 'leftAddonText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Com prefixo',
      leftAddon: 'R$',
      leftAddonType: 'text',
    },
  })
  .addField({
    name: 'rightAddonIcon',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Com sufixo',
      rightAddon: 'pi pi-check',
      rightAddonType: 'icon',
    },
  })
  .addField({
    name: 'leftrightAddonIcon',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Com sufixo e prefixo',
      leftAddon: 'R$',
      leftAddonType: 'text',
      rightAddon: 'pi pi-check',
      rightAddonType: 'icon',
    },
  })
  .addField({
    name: 'iconsBothSides',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Com ícones',
      leftIcon: 'pi pi-user',
      rightIcon: 'pi pi-check',
    },
  })
  .addField({
    name: 'email',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Autocomplete TRUE',
      browserAutocomplete: true,
    },
  })
  .addField({
    name: 'placeholderfield',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Com placeholder',
    },
  })
  .addField({
    name: 'customStyleField',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
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
  })
  .addField({
    name: 'inputTypePassword',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Campo senha',
      inputType: 'password',
    },
  })
  .addField({
    name: 'small',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Size Small',
      size: 'small',
    },
  })
  .addField({
    name: 'grande',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Size Large',
      size: 'large',
    },
  })
  .addField({
    name: 'disabledField',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    disabled: true,
    defaultValue: 'Desabilitado',
    valueType: String,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Disabled',
    },
  })
  .addField({
    name: 'textFieldType',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    nonNullable: true,
    valueType: Number,
    props: {
      labelType: 'float',
      floatLabelVariant: 'on',
      label: 'Non Nullable',
    },
  })
  .build();
