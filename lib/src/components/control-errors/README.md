# Control Errors

O objetivo deste módulo é prover um componente para exibição padronizada de mensagens de erro de validação para campos de formulário.

## Features

- Mensagens de erro para campos de formulário

## Dependências

- [PrimeNG](https://www.npmjs.com/package/primeng)

## Utilização

[**Exemplo completo de implementação**](../../../../src/app/components/control-errors-showcase)

- **Componente**: `ControlErrorsComponent`
- **Seletor**: `g-control-errors`

### Import

```typescript
import { ControlErrorsModule } from "@gawtech/angular-components";
```

### Exemplo de utilização simples

```html
<form [formGroup]="formGroup" novalidate>
  <input type="number" id="client" name="client" pInputText formControlName="client" autocomplete="off" />
  <g-control-errors
    [control]="formGroup.controls['client']"
    [errorMessages]="{
        required: 'Esse campo é obrigatorio!',
        min: 'Esse cadastro é apenas para maiores de idade',
        max: 'A medicina ainda não nos permite viver tanto!'
    }"
  ></g-control-errors>
</form>
```

### Exemplo de utilização com tradução

```html
<form [formGroup]="formGroup" novalidate>
  <input type="number" id="client" name="client" pInputText formControlName="client" autocomplete="off" />
  <g-control-errors
    [control]="formGroup.controls['client']"
    [errorMessages]="{
        required: ('error_required' | translate),
        min: ('error_min_value' | translate: {value: 0}),
        max: ('error_max_value' | translate: {value: 5})
    }"
  ></g-control-errors>
</form>
```

### Inputs

| Nome          | Tipo          | Valor Padrão                   | Obrigatório | Descrição                                                               |
| :------------ | :------------ | :----------------------------- | :---------- | :---------------------------------------------------------------------- |
| id            | `string`      | `g-control-errors-${nextId++}` | Não         | Id do componente. Utilizado como prefixo para id dos elementos internos |
| control       | `FormControl` | N/A                            | Sim         | Controlador do qual se obterão os erros                                 |
| errorMessages | `object`      | `{}`                           | Sim         | Objeto com chave de erro e mensagem que deverá ser exibida              |
