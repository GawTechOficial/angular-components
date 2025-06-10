import { StructureTypePropsMap } from '../../mappings/structure-type-props-map';
import { AnyFormFieldsArray, FormField } from '../fields/form-field';
import { StructureType } from './structure-type';
import { ControlErrorMessages } from '../../../control-errors/control-error-messages';

export interface Structure<T extends StructureType = StructureType> {
  type: T;
  fields?: AnyFormFieldsArray;
  errorMessages?: ControlErrorMessages;
  props?: StructureTypePropsMap[T];
}
