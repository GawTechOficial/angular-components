import { Structure } from './structure';
import { StructureType } from './structure-type';
import { StructureConfig } from './structure';

export class Section extends Structure {
  constructor(config: Omit<StructureConfig, 'type'>) {
    super({ ...config, type: StructureType.Section });
  }
}
