import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
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
