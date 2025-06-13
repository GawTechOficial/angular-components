# Control Errors

The purpose of this module is to provide a component for standardized display of validation error messages for form fields.

## Features

- Standardized error messages for form fields

## Requirements

- Angular v19+
- PrimeNG v19+
- @primeng/themes (for theme support)
- Tailwind CSS v3+ (with `tailwindcss-primeui` plugin)
- tailwindcss-primeui (for full integration with PrimeNG)

## Usage

[**Complete implementation example**](../../../../src/app/components/control-errors-showcase)

- **Component**: `ControlErrorsComponent`
- **Selector**: `g-control-errors`

### Import

```typescript
import { ControlErrorsModule } from "@gawtech/angular-components";
```

### Basic Usage Example

```html
<form [formGroup]="formGroup" novalidate>
  <input type="number" id="client" name="client" pInputText formControlName="client" autocomplete="off" />
  <g-control-errors
    [control]="formGroup.controls['client']"
    [errorMessages]="{
      required: 'This field is required!',
      min: 'Only for adults.',
      max: 'That is beyond the current limits of medicine!'
    }"
  ></g-control-errors>
</form>
```

### Example with Translations

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

| Name          | Type          | Default Value                  | Required | Description                                                   |
| :------------ | :------------ | :----------------------------- | :------- | :------------------------------------------------------------ |
| id            | `string`      | `g-control-errors-${nextId++}` | No       | Component ID. Used as prefix for internal element IDs         |
| control       | `FormControl` | N/A                            | Yes      | The form control from which errors will be displayed          |
| errorMessages | `object`      | `{}`                           | Yes      | Object with error keys and messages to display for each error |
