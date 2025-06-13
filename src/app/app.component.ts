import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '@gawtech/angular-components';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    DrawerModule,
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    BreadcrumbComponent,
  ],
})
export class AppComponent {
  drawerVisible: boolean = false;

  searchTerm: string = '';

  public sections: MenuItem[] = [
    {
      label: 'Inputs',
      items: [{ label: 'Dynamic Form', routerLink: 'dynamic-form' }],
    },
    {
      label: 'Feedback',
      items: [{ label: 'Control Errors', routerLink: 'control-errors' }],
    },
  ];

  public filteredSections: MenuItem[] = this.sections;

  openDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }

  filter(query: string) {
    query = query.toLowerCase();

    if (!query) {
      this.filteredSections = this.sections;
      return;
    }

    this.filteredSections = this.sections
      .map((section) => ({
        ...section,
        items: (section.items || []).filter((item: MenuItem) =>
          item.label?.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => section.items && section.items.length > 0);
  }
}
