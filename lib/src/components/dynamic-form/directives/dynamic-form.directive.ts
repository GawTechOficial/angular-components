import {
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DynamicFormContext } from '../configurations/directive/dynamic-form-context';
import { AnyFormField, FieldType } from '../configurations/fields';
import { Structure, StructureType } from '../configurations/structure';

@Directive({
  selector: '[gDynamicForm]',
  standalone: true,
})
export class DynamicFormDirective implements OnChanges, OnDestroy {
  @Input('gDynamicForm') context!: DynamicFormContext;

  private componentRef?: ComponentRef<any>;

  constructor(private readonly vcRef: ViewContainerRef) {}

  async ngOnChanges(): Promise<void> {
    this.vcRef.clear();

    const componentType = await this.resolveComponent();

    if (!componentType) {
      throw new Error(`Tipo não suportado: ${this.context.config.type}`);
    }

    this.componentRef = this.vcRef.createComponent(componentType);
    const instance = this.componentRef.instance;

    if (this.isField(this.context.config)) {
      const field = this.context.config;
      instance.field = field;
      instance.formControl = this.context.formGroup.get(field.name);
    } else {
      instance.formGroup = this.context.formGroup;
      instance.structure = this.context.config;
      instance.errorMessages = this.context.config.errorMessages;
    }
  }

  ngOnDestroy(): void {
    this.componentRef?.destroy();
  }

  private async resolveComponent(): Promise<Type<any> | null> {
    const { config: config } = this.context;

    if (this.isField(config)) {
      const { fieldTypeToComponent } = await import(
        '../mappings/field-type-map'
      );

      return fieldTypeToComponent[config.type];
    }

    if (this.isStructure(config)) {
      switch (config.type) {
        case 'panel': {
          const { PanelComponent } = await import(
            '../components/structure/panel/panel.component'
          );
          return PanelComponent;
        }
        case 'section': {
          const { SectionComponent } = await import(
            '../components/structure/section/section.component'
          );
          return SectionComponent;
        }
        default:
          throw new Error(`Unknown structure type: ${config.type}`);
      }
    }

    return null;
  }

  private isField(config: any): config is AnyFormField {
    return Object.values(FieldType).includes(config.type);
  }

  private isStructure(config: any): config is Structure {
    return Object.values(StructureType).includes(config.type);
  }
}
