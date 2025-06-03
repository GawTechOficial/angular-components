import { Pipe, PipeTransform } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { LocaleService } from "../locale.service";

/**
 * @deprecated Should use localizedBignumberPipe instead
 */
@Pipe({ name: "localizedNumber" })
export class LocalizedNumberPipe implements PipeTransform {
    constructor(private localeService: LocaleService) {}

    transform(value: number | string, minimumFractionDigits?: number) {
        return from(this.localeService.getLocale()).pipe(
            map((locale: string) => {
                const numericValue = Number(value);

                if (!value && isNaN(numericValue)) return;

                return new Intl.NumberFormat(locale, {
                    minimumFractionDigits: minimumFractionDigits || 0,
                }).format(Number(value));
            })
        );
    }
}

export interface Locale {
    localidade?: string;
    tenantLocale?: string;
}
