import { Pipe, PipeTransform } from "@angular/core";
import { LocaleService } from "../locale.service";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import { INumberLocaleOptions, NumberLocaleOptions } from "../options";

export interface ILocalizedCurrencyPipeOptions extends INumberLocaleOptions {
    scale?: number;
}

export class LocalizedCurrencyPipeOptions extends NumberLocaleOptions implements ILocalizedCurrencyPipeOptions {
    public scale = 2;

    constructor(config: ILocalizedCurrencyPipeOptions = {}) {
        super(config);
    }
}

/**
 * @deprecated Should use localizedBignumberPipe instead
 */
@Pipe({
    name: "localizedCurrency",
})
export class LocalizedCurrencyPipe implements PipeTransform {
    constructor(private localeService: LocaleService) {}

    public transform(value?: any, options?: LocalizedCurrencyPipeOptions): any {
        if (!options) {
            options = new LocalizedCurrencyPipeOptions();
        }
        return value !== undefined && value !== null ? this.applyMask(value, options) : of(value);
    }

    private applyMask(value: any, options: LocalizedCurrencyPipeOptions) {
        return this.localeService.get().pipe(
            map(localeConfig => {
                const config = { ...localeConfig.number, ...options };
                const { scale, currencySymbol, thousandsSeparator, decimalSeparator } = config;

                const rawValue = Number(value).toFixed(scale);
                const onlyNumbers = rawValue.replace(/[^0-9]/g, ``);
                const integerPart =
                    onlyNumbers
                        .slice(0, onlyNumbers.length - scale)
                        .replace(/^0*/g, ``)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator) || `0`;
                const decimalPart = onlyNumbers.slice(onlyNumbers.length - scale);
                const newValue = scale ? integerPart + decimalSeparator + decimalPart : integerPart;
                const isZero = !Number(onlyNumbers);
                const operator = rawValue.includes("-") && !isZero ? "-" : "";
                return `${operator}${currencySymbol}${newValue}`;
            })
        );
    }
}
