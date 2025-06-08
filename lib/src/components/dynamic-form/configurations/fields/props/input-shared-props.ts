import { LabelType } from '../label-type';

export type AddonType = 'text' | 'icon';

export type LeftAddon = {
  leftAddonType: AddonType;
  leftAddon: string;
  leftIcon?: never;
};

export type RightAddon = {
  rightAddonType: AddonType;
  rightAddon: string;
  rightIcon?: never;
};

export type AddonNone = {
  leftAddon?: undefined;
  leftAddonType?: undefined;
  rightAddonType?: undefined;
  rightAddon?: undefined;
  leftIcon?: string;
  rightIcon?: string;
};

export type AddonConfigProps =
  | LeftAddon
  | RightAddon
  | (LeftAddon & RightAddon)
  | AddonNone;

export type FloatLabelConfig = {
  labelType: 'float';
  placeholder?: never;
};

type DefaultOrIfTAConfig = {
  labelType?: Exclude<LabelType, 'float'>;
  placeholder?: string;
};

export type LabelConfigProps = FloatLabelConfig | DefaultOrIfTAConfig;

export type IconConfigProps = {
  leftIcon?: string;
  rightIcon?: string;
};
