import { PanelAfterToggleEvent, PanelBeforeToggleEvent } from 'primeng/panel';
import { Structure } from './structure';
import { StructureType } from './structure-type';
import { FormField } from '../fields/form-field';

export interface PanelConfig {
  type?: StructureType;
  header?: string;
  fields?: FormField[];

  // Personalizações visuais
  collapsed?: boolean;
  toggleable?: boolean;
  style?: { [klass: string]: any };
  styleClass?: string;
  iconPos?: 'start' | 'center' | 'end';
  expandIcon?: string;
  collapseIcon?: string;
  showHeader?: boolean;
  toggler?: 'icon' | 'header';
  transitionOptions?: string;
  toggleButtonProps?: any;

  // Eventos
  beforeToggle?: (event: PanelBeforeToggleEvent) => void;
  afterToggle?: (event: PanelAfterToggleEvent) => void;
}

export class Panel extends Structure {
  collapsed?: boolean = false;
  toggleable?: boolean = true;
  showHeader?: boolean = true;
  iconPos?: 'start' | 'center' | 'end' = 'end';
  toggler?: 'icon' | 'header' = 'icon';
  transitionOptions?: string = '400ms cubic-bezier(0.86, 0, 0.07, 1)';

  style?: { [klass: string]: any };
  styleClass?: string;
  expandIcon?: string;
  collapseIcon?: string;
  toggleButtonProps?: any;

  beforeToggle?: (event: PanelBeforeToggleEvent) => void;
  afterToggle?: (event: PanelAfterToggleEvent) => void;

  constructor(config: PanelConfig) {
    super({
      header: config.header ?? '',
      type: StructureType.Panel,
      fields: config.fields ?? [],
    });

    Object.assign(this, config);
  }
}
