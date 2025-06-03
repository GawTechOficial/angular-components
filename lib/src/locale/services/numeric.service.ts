import { Injectable } from "@angular/core";
import { LocaleService } from "../locale.service";
import BigNumber from "bignumber.js";
import { CurrencyService } from "../../../utils/currency/currency.service";
import { isNullOrUndefined } from "../../utils/utils";

@Injectable({
    providedIn: "root",
})
export class NumericService {
    constructor(
        private readonly localeService: LocaleService,
        private readonly currencyService: CurrencyService
    ) {}

    /**
     * Wrapper around Intl.NumberFormat that returns the localized value using the user's locale by default(platform's preferential language).
     *
     * This method should only be used after the localeService has been initialized by the host application, either by a resolver or a manual call.
     *
     * Can be overwritten by the provided Intl.NumberFormatOptions.
     *
     * Documentation is available at {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat Intl.NumberFormatOptions}.
     *
     * @param {number | string | BigNumber} value The value to be formatted.
     * @param options Locale and numberFormatOptions that overwrites the default Intl.NumberFormatOptions.
     * @return `string` The formatted value.
     */
    instant(
        value: number | string | BigNumber,
        options?: {
            locale?: string;
            numberFormatOptions?: Intl.NumberFormatOptions;
        }
    ): string {
        if (isNullOrUndefined(value))
            return null;

        options = {
            ...options,
            locale: options?.locale ?? this.localeService.getLocaleOptions()?.locale ?? "pt-BR",
            numberFormatOptions: {
                ...options?.numberFormatOptions,
                currency:
                    options?.numberFormatOptions?.style === "currency" ? (options?.numberFormatOptions?.currency ?? "BRL") : undefined,
                currencyDisplay:
                    options?.numberFormatOptions?.style === "currency"
                        ? (options?.numberFormatOptions?.currencyDisplay ?? "narrowSymbol")
                        : undefined,
                minimumFractionDigits:
                    options?.numberFormatOptions?.minimumFractionDigits ??
                    this.getCurrencyMinimumFractionDigits(options?.numberFormatOptions?.currency),
            },
        };

        options.numberFormatOptions["roundingMode"] = "trunc";

        // From https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
        return new Intl.NumberFormat(options.locale, options.numberFormatOptions).format(
            this.getType(value) === "number" || this.getType(value) === "string" ? value : ((value as BigNumber).toString() as any)
        );
    }

    private getCurrencyMinimumFractionDigits(currency: string): number {
        if (!currency) return null;

        return this.currencyService.currencies[currency.toUpperCase()]?.scale;
    }

    private getType(value: unknown): string {
        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

        if (value === null) {
            return "null";
        }

        const baseType = typeof value;

        // Primitive types
        if (baseType !== "object" && baseType !== "function") {
            return baseType;
        }

        // Symbol.toStringTag often specifies the "display name" of the
        // object's class. It's used in Object.prototype.toString().
        const tag = value[Symbol.toStringTag];

        if (typeof tag === "string") {
            return tag;
        }

        // If it's a function whose source code starts with the "class" keyword
        if (baseType === "function" && Function.prototype.toString.call(value).startsWith("class")) {
            return "class";
        }

        // The name of the constructor; for example `Array`, `GeneratorFunction`,
        // `Number`, `String`, `Boolean` or `MyCustomClass`
        const className = value.constructor.name;

        if (typeof className === "string" && className !== "") {
            return className;
        }

        // At this point there's no robust way to get the type of value,
        // so we use the base implementation.
        return baseType;
    }
}
