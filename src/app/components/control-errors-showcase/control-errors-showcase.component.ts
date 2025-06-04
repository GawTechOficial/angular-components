import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ControlErrorsComponent } from '@gawtech/angular-components';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-control-errors-showcase',
  templateUrl: './control-errors-showcase.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ControlErrorsComponent,
  ],
})
export class ControlErrorsShowcaseComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.formGroup = this.formBuilder.group({
      nome: [
        { value: undefined, disabled: false },
        [Validators.required, Validators.minLength(3)],
      ],
      idade: [
        { value: undefined, disabled: false },
        [Validators.required, Validators.min(18), Validators.max(120)],
      ],
      email: [
        { value: undefined, disabled: false },
        [Validators.email, Validators.pattern(/.*(gawtech).*/i)],
      ],
    });
  }
}
