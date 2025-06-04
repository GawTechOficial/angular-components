import { PanelAfterToggleEvent, PanelBeforeToggleEvent } from 'primeng/panel';

export interface PanelProps {
  header?: string;
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
  beforeToggle?: (event: PanelBeforeToggleEvent) => void;
  afterToggle?: (event: PanelAfterToggleEvent) => void;
}
