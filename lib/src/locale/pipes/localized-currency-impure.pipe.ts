import { Pipe, PipeTransform } from "@angular/core";
import { LocalizedCurrencyPipe, LocalizedCurrencyPipeOptions } from "./localized-currency.pipe";

/**
 * @deprecated Should use localizedBignumberPipe instead
 */
@Pipe({
    name: "localizedCurrencyImpure",
    pure: false,
})
export class LocalizedCurrencyImpurePipe extends LocalizedCurrencyPipe implements PipeTransform {
    public transform(value?: any, options: LocalizedCurrencyPipeOptions = new LocalizedCurrencyPipeOptions()): any {
        return super.transform(value, options);
    }
}
