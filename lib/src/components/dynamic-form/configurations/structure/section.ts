import { FormField } from '../fields';
import { Structure } from './structure';
import { StructureType } from './structure-type';

export interface SectionConfig {
  type?: StructureType;
  header?: string;
  fields?: FormField[];
}
export class Section extends Structure {
  constructor(config: SectionConfig) {
    super({
      header: config.header ?? '',
      type: StructureType.Section,
      fields: config.fields ?? [],
    });

    Object.assign(this, config);
  }
}
