import { Pipe, PipeTransform } from "@angular/core";
import { LocaleService } from "../locale.service";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import { applyMask, MaskConfig } from "@seniorsistemas/ng2-currency-mask";
import BigNumber from "bignumber.js";

@Pipe({
    name: "localizedBignumber",
})
export class LocalizedBignumberPipe implements PipeTransform {
    constructor(
        private localeService: LocaleService
    ) {}

    public transform(value?: any, options?: MaskConfig): any {
        return value !== undefined && value !== null ? this.applyMask(value, options) : of(value);
    }

    private applyMask(value?: any, options?: MaskConfig) {
        return this.localeService.get().pipe(
            map(localeConfig => {
                const configs: MaskConfig = {
                    prefix: options?.prefix ?? localeConfig?.number?.currencySymbol ?? "R$",
                    thousandsSeparator: options?.thousandsSeparator ?? localeConfig?.number?.thousandsSeparator ?? ".",
                    decimalSeparator: options?.decimalSeparator ?? localeConfig?.number?.decimalSeparator ?? ",",
                    scale: options?.scale ?? 2,
                    allowNegative: options?.allowNegative ?? true
                };
                const isNumber = !(new BigNumber(value).isNaN());
                return applyMask(value, configs, isNumber);
            })
        );
    }
}
