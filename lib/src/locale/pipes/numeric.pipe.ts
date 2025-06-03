import { Pipe, PipeTransform } from "@angular/core";
import BigNumber from "bignumber.js";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { LocaleService } from "../locale.service";
import { NumericService } from "../services/numeric.service";

@Pipe({ name: "numeric" })
export class NumericPipe implements PipeTransform {
    constructor(
        private readonly numericService: NumericService,
        private readonly localeService: LocaleService
    ) {}

    transform(
        value: number | string | BigNumber,
        options?: {
            locale?: string;
            numberFormatOptions?: Intl.NumberFormatOptions;
        }
    ) {
        return options?.locale
            ? of(this.numericService.instant(value, options))
            : this.localeService.getLocale().pipe(
                  map((locale) =>
                      this.numericService.instant(value, {
                          locale,
                          numberFormatOptions: options?.numberFormatOptions,
                      })
                  )
              );
    }
}
