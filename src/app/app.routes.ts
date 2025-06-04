import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'control-errors',
        loadComponent: () =>
          import(
            './components/control-errors-showcase/control-errors-showcase.component'
          ).then((c) => c.ControlErrorsShowcaseComponent),
        data: { breadcrumb: 'Control errors' },
      },
      {
        path: 'dynamic-form',
        loadComponent: () =>
          import(
            './components/dynamic-form-showcase/dynamic-form-showcase.component'
          ).then((c) => c.DynamicFormShowcaseComponent),
        data: { breadcrumb: 'Dynamic form' },
      },
    ],
  },
];
