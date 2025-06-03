export interface INumberLocaleOptions {
    thousandsSeparator?: string;
    decimalSeparator?: string;
    currencySymbol?: string;
}

export class NumberLocaleOptions implements INumberLocaleOptions {
    public thousandsSeparator = ".";
    public decimalSeparator = ",";
    public currencySymbol = "R$";

    constructor(config: INumberLocaleOptions = {}) {
        Object.assign(this, config);
    }
}
