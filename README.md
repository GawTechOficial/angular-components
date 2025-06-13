# Angular Components Library

[![npm version](https://img.shields.io/npm/v/@gawtech/angular-components.svg)](https://www.npmjs.com/package/@gawtech/angular-components)
[![npm downloads](https://img.shields.io/npm/dm/@gawtech/angular-components.svg)](https://www.npmjs.com/package/@gawtech/angular-components)
[![License: MIT](https://img.shields.io/npm/l/@gawtech/angular-components.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/GawTechOficial/angular-components)](https://github.com/GawTechOficial/angular-components/issues)

A collection of reusable Angular components to accelerate your development.  
Each component is documented individually—refer to their respective documentation for detailed usage and examples.

## Installation

```bash
npm install @gawtech/angular-components
```

## Main Requirements

Before using this library, ensure your project meets the following requirements:

- Angular v19+
- PrimeNG v19+
- @primeng/themes (for theme support)
- Tailwind CSS v3+ (with tailwindcss-primeui plugin)
- tailwindcss-primeui (for PrimeNG + Tailwind integration)
- @angular/forms and rxjs (for reactive forms and observables)

## Install All Required Peer Dependencies

You can quickly install all necessary peer dependencies with this command:

```bash
npm install @angular/common@^19 @angular/core@^19 @angular/forms@^19 @angular/platform-browser@^19 primeng@^19 @primeng/themes@^19 rxjs@~7.8 tailwindcss@^3 tailwindcss-primeui@^0.6
```

> **Note**  
> It is highly recommended to always use the versions specified in peerDependencies for maximum compatibility.

## Available Components

- **Breadcrumb** – Breadcrumb navigation component. [Documentation](lib/src/components/breadcrumb/README.md).
- **Control Errors** – Standardized validation error messages. [Documentation](lib/src/components/control-errors/README.md).
- **Dynamic Form** _(beta)_ – Renders forms dynamically from configuration objects. [Documentation](lib/src/components/dynamic-form/README.md).

## Roadmap

This library is under active development.
New components and features will be added in future releases.

## Contributing

Contributions, bug reports, and suggestions are welcome!
Feel free to open an issue or submit a pull request.
