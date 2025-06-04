import type { StructureType } from '../configurations/structure/structure-type';
import type { FormField } from '../configurations/fields/form-field';
import { StructureTypePropsMap } from '../mappings/structure-type-props-map';
import { Structure } from '../configurations/structure/structure';

export function createStructure<T extends StructureType>(config: {
  type: T;
  fields: FormField[];
  props?: StructureTypePropsMap[T];
}): Structure {
  return {
    type: config.type,
    fields: config.fields || [],
    props: config.props || {},
  };
}
