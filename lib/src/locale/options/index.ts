import { CalendarLocaleOptions } from "./calendar";
import { NumberLocaleOptions } from "./number";

export interface ILocaleOptions {
    calendar?: CalendarLocaleOptions;
    number?: NumberLocaleOptions;
}

export class LocaleOptions implements ILocaleOptions {
    locale: string;
    calendar = new CalendarLocaleOptions();
    number = new NumberLocaleOptions();

    constructor(config: ILocaleOptions = {}) {
        Object.keys(config).forEach(key => (this[key] = config[key] || this[key]));
    }
}

/**
 * @deprecated
 */
export const DEFAULT_CALENDAR_LOCALE_OPTIONS = new CalendarLocaleOptions();

/**
 * @deprecated
 */
export const DEFAULT_NUMBER_LOCALE_OPTIONS = new NumberLocaleOptions();

/**
 * @deprecated
 */
export const DEFAULT_LOCALE_OPTIONS = new LocaleOptions();

export * from "./calendar";
export * from "./number";
