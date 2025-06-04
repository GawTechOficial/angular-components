import { StructureTypePropsMap } from '../../mappings/structure-type-props-map';
import { FormField } from '../fields/form-field';
import { StructureType } from './structure-type';

export interface Structure<T extends StructureType = StructureType> {
  type: T;
  fields?: FormField[];
  props?: StructureTypePropsMap[T];
}
