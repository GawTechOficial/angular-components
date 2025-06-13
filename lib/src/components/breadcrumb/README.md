# Breadcrumb

A customizable breadcrumb navigation component for Angular projects.

## Features

- Clean, modern breadcrumb navigation
- Fully compatible with Angular Router

## Requirements

- Angular v19+
- PrimeNG v19+
- @primeng/themes (for theme support)
- Tailwind CSS v3+ (with `tailwindcss-primeui` plugin)
- tailwindcss-primeui (for full integration with PrimeNG)

## Usage

- **Component**: `BreadcrumbComponent`
- **Selector**: `g-breadcrumb`

### Import

```typescript
import { BreadcrumbComponent } from "@gawtech/angular-components";
```

## Usage with Angular Router

```typescript
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "my-component",
        loadComponent: () => import("./components/my-component.component").then((c) => c.myComponent),
        data: { breadcrumb: "My Component" },
      },
    ],
  },
];
```

```html
<g-breadcrumb></g-breadcrumb>
```
