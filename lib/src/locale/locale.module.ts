import { CommonModule } from "@angular/common";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { LocaleService } from "./locale.service";
import { LocalizedBignumberImpurePipe } from "./pipes/localized-bignumber-impure.pipe";
import { LocalizedBignumberPipe } from "./pipes/localized-bignumber.pipe";
import { LocalizedCurrencyImpurePipe } from "./pipes/localized-currency-impure.pipe";
import { LocalizedCurrencyPipe } from "./pipes/localized-currency.pipe";
import { LocalizedDateImpurePipe } from "./pipes/localized-date-impure.pipe";
import { LocalizedDatePipe } from "./pipes/localized-date.pipe";
import { LocalizedNumberPipe } from "./pipes/localized-number.pipe";
import { LocalizedTimeImpurePipe } from "./pipes/localized-time-impure.pipe";
import { LocalizedTimePipe } from "./pipes/localized-time.pipe";
import { NumericPipe } from "./pipes/numeric.pipe";

@NgModule({
    imports: [CommonModule],
    exports: [
        LocalizedCurrencyPipe,
        LocalizedDatePipe,
        LocalizedTimePipe,
        LocalizedNumberPipe,
        LocalizedCurrencyImpurePipe,
        LocalizedDateImpurePipe,
        LocalizedTimeImpurePipe,
        LocalizedBignumberPipe,
        LocalizedBignumberImpurePipe,
        NumericPipe
    ],
    declarations: [
        LocalizedCurrencyPipe,
        LocalizedDatePipe,
        LocalizedTimePipe,
        LocalizedNumberPipe,
        LocalizedCurrencyImpurePipe,
        LocalizedDateImpurePipe,
        LocalizedTimeImpurePipe,
        LocalizedBignumberPipe,
        LocalizedBignumberImpurePipe,
        NumericPipe
    ],
})
export class LocaleModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: LocaleModule,
            providers: [
                LocaleService,
                LocalizedCurrencyPipe,
                LocalizedDatePipe,
                LocalizedTimePipe,
                LocalizedNumberPipe,
                LocalizedCurrencyImpurePipe,
                LocalizedDateImpurePipe,
                LocalizedTimeImpurePipe,
                LocalizedBignumberPipe,
                LocalizedBignumberImpurePipe,
                NumericPipe
            ],
        };
    }

    public static forChild(): ModuleWithProviders {
        return {
            ngModule: LocaleModule,
        };
    }
}
