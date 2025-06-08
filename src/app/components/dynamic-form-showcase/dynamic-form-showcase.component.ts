import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { InputTextShowcaseComponent } from './input-text/input-text-showcase.component';
@Component({
  selector: 'app-dynamic-form-showcase',
  templateUrl: './dynamic-form-showcase.component.html',
  standalone: true,
  imports: [TabsModule, InputTextShowcaseComponent],
})
export class DynamicFormShowcaseComponent {}
