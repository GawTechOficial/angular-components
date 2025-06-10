import type { StructureType } from '../configurations/structure/structure-type';
import type {
  AnyFormFieldsArray,
  FormField,
} from '../configurations/fields/form-field';
import { StructureTypePropsMap } from '../mappings/structure-type-props-map';
import { Structure } from '../configurations/structure/structure';
import type { ControlErrorMessages } from '../../control-errors/control-error-messages';

export function createStructure<T extends StructureType>(config: {
  type: T;
  fields: AnyFormFieldsArray;
  errorMessages?: ControlErrorMessages;
  props?: StructureTypePropsMap[T];
}): Structure {
  return {
    type: config.type,
    fields: config.fields || [],
    errorMessages: config.errorMessages || {},
    props: config.props || {},
  };
}
