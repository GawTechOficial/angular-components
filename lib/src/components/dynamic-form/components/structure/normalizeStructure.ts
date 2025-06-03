import { StructureType } from '../../configurations/structure/structure-type';
import { Panel } from '../../configurations/structure/panel';
import { Section } from '../../configurations/structure/section';
import { Structure } from '../../configurations/structure/structure';

export function normalizeStructure(structure: any): Structure {
  switch (structure.type) {
    case StructureType.Panel:
      return new Panel(structure);
    case StructureType.Section:
      return new Section(structure);
    default:
      throw new Error('Unknown structure type');
  }
}
