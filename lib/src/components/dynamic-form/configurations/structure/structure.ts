// structure.ts
import { FormField } from '../fields/form-field';
import { StructureType } from './structure-type';

export interface StructureConfig {
  type: StructureType;
  header?: string;
  fields?: FormField[];
}

export class Structure {
  type: StructureType;
  header?: string;
  fields: FormField[] = [];

  constructor(config: StructureConfig) {
    this.type = config.type;
    this.header = config.header ?? '';
    this.fields = config.fields ?? [];
  }
}
