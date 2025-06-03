import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

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
  ];

  public filteredSections: MenuItem[] = this.sections;

  constructor(private router: Router) {}

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
