# Dynamic Form

A **dynamic form builder** component for Angular, powered by [GawTech](https://github.com/GawTechOficial/angular-components).  
It enables you to build complex forms dynamically from configuration objects—no need to hard-code your form structure!

## Features

- **PrimeNG Integration**: Leverages PrimeNG's powerful UI components for consistent, modern look & feel.
- **Dynamic Schema**: Create any form structure using TypeScript objects—fields, validation.
- **Strong Typing**: Type-safe configuration for fields and validation.
- **Easy to Use**: Pass your config, get a fully working form—includes reactive forms support.
- **Custom Fields**: Supports extension and custom field types.
- **Validation**: PrimeNG UI + Angular Reactive Forms validation out of the box.

## Requirements

- Angular v19+
- PrimeNG v19+
- @primeng/themes (for theme support)
- Tailwind CSS v3+ (with `tailwindcss-primeui` plugin)
- tailwindcss-primeui (for full integration with PrimeNG)
- @angular/forms
- rxjs

## Installation

```bash
npm install @gawtech/angular-components
```

## Usage

[**Complete implementation example**](../../../../src/app/components/dynamic-form-showcase/input-text/input-text-showcase.component.ts)

- **Component**: `DynamicFormComponent`
- **Selector**: `g-dynamic-form`

### 1. Define your fields (configuration)

```typescript
import { fieldsBuilder, FieldType } from "@gawtech/angular-components";
import { Validators } from "@angular/forms";

export const floatFieldsBuilder = fieldsBuilder()
  .addField({
    name: "requiredText",
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    validators: [Validators.required],
    valueType: String,
    props: {
      labelType: "float",
      floatLabelVariant: "on",
      label: "Required",
    },
  })
  .addField({
    name: "onlyNumbers",
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    valueType: Number,
    props: {
      labelType: "float",
      floatLabelVariant: "on",
      label: "Numbers only",
      keyFilter: "int",
    },
  })
  .addField({
    name: "maxLengthText",
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    valueType: String,
    props: {
      labelType: "float",
      floatLabelVariant: "on",
      label: "Max 10 characters",
      maxLength: 10,
    },
  })
  .addField({
    name: "inputEventText",
    type: FieldType.InputText,
    size: { sm: 12, md: 4 },
    defaultValue: "",
    valueType: String,
    props: {
      labelType: "float",
      floatLabelVariant: "on",
      label: "With Events",
      onInput: (e: InputEvent) => console.log("Input:", e),
      onBlur: (e: FocusEvent) => console.log("Blur:", e),
      onFocus: (e: FocusEvent) => console.log("Focus:", e),
    },
  })
  .build();
```

### 2. Use in your component

```typescript
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AnyFormFieldsArray, createStructure, DynamicFormComponent, Structure, StructureType } from "@gawtech/angular-components";
import { floatFieldsBuilder } from "./fields/float-fields";

@Component({
  selector: "app-user-form",
  template: `
    <form [formGroup]="formGroup" class="w-full">
      <g-dynamic-form [formGroup]="formGroup" [structures]="structures" />
    </form>
  `,
  standalone: true,
  imports: [DynamicFormComponent, ReactiveFormsModule],
})
export class UserFormComponent implements OnInit {
  currentFieldsBuilder = floatFieldsBuilder;
  formGroup!: (typeof this.currentFieldsBuilder)["formGroup"];
  fields!: (typeof this.currentFieldsBuilder)["fields"];
  structures: Signal<Structure[]> = signal([]);

  ngOnInit(): void {
    this.formGroup = this.currentFieldsBuilder.formGroup;
    this.fields = this.currentFieldsBuilder.fields;

    this.createStructures();
  }

  createStructures() {
    this.structures = signal([
      createStructure({
        type: StructureType.Section,
        fields: this.fields,
        errorMessages: {
          required: "Required field",
        },
        props: {
          header: "Input Example",
        },
      }),
    ]);
  }
}
```

### 3. Template Example

```html
<form [formGroup]="formGroup" class="w-full">
  <g-dynamic-form [formGroup]="formGroup" [structures]="structures" />
</form>
```

## Inputs

| Name       | Type          | Required | Description                                    |
| ---------- | ------------- | -------- | ---------------------------------------------- |
| formGroup  | `FormGroup`   | Yes      | Angular FormGroup instance to control the form |
| structures | `Structure[]` | Yes      | Array of section or panel                      |

## Theming

Dynamic Form automatically applies your current PrimeNG theme.

## Accessibility

All dynamic forms and fields are built using PrimeNG components, which follow accessibility best practices.
However, always review your generated forms to ensure proper label, role, and focus handling for your use case.
