import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlErrorMessages } from 'lib/src/components/control-errors/control-error-messages';
import { PanelModule } from 'primeng/panel';
import { Structure, StructureType } from '../../../configurations/structure';
import { StructureRendererContentComponent } from '../structure-renderer-content/structure-renderer-content.component';
@Component({
  selector: 'g-panel',
  templateUrl: './panel.component.html',
  standalone: true,
  imports: [CommonModule, PanelModule, StructureRendererContentComponent],
})
export class PanelComponent {
  @Input() structure!: Structure<StructureType.Panel>;
  @Input() formGroup!: FormGroup;
  @Input() errorMessages?: ControlErrorMessages;
}
