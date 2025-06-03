import { StructureType } from '../configurations/structure';
import { SectionComponent } from '../components/structure/section/section.component';
import { PanelComponent } from '../components/structure/panel/panel.component';

export const structureTypeToComponent = {
  [StructureType.Panel]: PanelComponent,
  [StructureType.Section]: SectionComponent,
};
