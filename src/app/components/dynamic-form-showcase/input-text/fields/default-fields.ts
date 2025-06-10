import { Validators } from '@angular/forms';
import { fieldsBuilder, FieldType } from '@gawtech/angular-components';
import { CustomValidators } from 'src/app/components/utils/custom-validators';

export const defaultFieldsBuilder = fieldsBuilder()
  .addField({
    name: 'requiredText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    validators: [Validators.required],
    defaultValue: 'Texto obrigatório',
    valueType: String,
    props: {
      label: 'Validator',
      placeholder: 'Texto obrigatório',
      labelType: 'default',
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
      label: 'CustomValidator',
      placeholder: 'Não aceita espaços em branco',
      labelType: 'default',
    },
  })
  .addField({
    name: 'maxLengthText',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      label: 'Máximo 10 caracteres',
      labelType: 'default',
      maxLength: 10,
    },
  })
  .addField({
    name: 'onlyNumbers',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    valueType: Number,
    props: {
      label: 'Somente números',
      labelType: 'default',
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
      label: 'Somente leitura',
      labelType: 'default',
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
      label: 'Com Eventos',
      labelType: 'default',
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
      label: 'Com prefixo',
      labelType: 'default',
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
      label: 'Com sufixo',
      labelType: 'default',
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
      label: 'Com sufixo e prefixo',
      labelType: 'default',
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
      label: 'Com ícones',
      labelType: 'default',
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
      label: 'Autocomplete TRUE',
      labelType: 'default',
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
      label: 'Com placeholder',
      labelType: 'default',
      placeholder: 'Digite Aqui...',
    },
  })
  .addField({
    name: 'customStyleField',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: '',
    valueType: String,
    props: {
      label: 'Com estilo',
      labelType: 'default',
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
      label: 'Campo senha',
      labelType: 'default',
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
      label: 'Size Small',
      labelType: 'default',
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
      label: 'Size Large',
      labelType: 'default',
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
      label: 'Disabled',
      labelType: 'default',
    },
  })
  .addField({
    name: 'textFieldType',
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    nonNullable: true,
    valueType: Number,
    props: {
      label: 'Non Nullable',
      labelType: 'default',
    },
  })
  .build();
