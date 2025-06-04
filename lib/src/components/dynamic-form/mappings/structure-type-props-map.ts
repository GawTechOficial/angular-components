import { PanelProps } from '../configurations/structure/props/panel-props';
import { SectionProps } from '../configurations/structure/props/section-props';
import { StructureType } from '../configurations/structure/structure-type';

export type StructureTypePropsMap = {
  [StructureType.Panel]: PanelProps;
  [StructureType.Section]: SectionProps;
};
