import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { FormField } from '../../../configurations/fields';
import { Panel } from '../../../configurations/structure';
import { BaseStructureComponentConfig } from '../../../configurations/structure/base-structure-component';
import { StructureRendererContentComponent } from '../structure-renderer-content/structure-renderer-content.component';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, PanelModule, StructureRendererContentComponent],
})
export class PanelComponent implements BaseStructureComponentConfig {
  @Input() structure!: Panel;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: any;
}
