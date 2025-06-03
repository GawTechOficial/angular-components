import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Section } from '../../../configurations/structure/section';
import { BaseStructureComponentConfig } from '../../../configurations/structure/base-structure-component';

@Component({
  template: `
    <ng-container>
      <ng-container></ng-container>
    </ng-container>
  `,
})
export class SectionComponent implements BaseStructureComponentConfig {
  @Input()
  public id!: string;
  @Input()
  public structure!: Section;
  @Input()
  public formGroup!: FormGroup;
  @Input()
  public errorMessages: any;
}
