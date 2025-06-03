import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "@seniorsistemas/senior-platform-data";
import * as moment_ from "moment";
import { from, Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ILocaleOptions, LocaleOptions } from "./options/index";
import { CookieService } from "ngx-cookie-service";

const moment = moment_; // @HACK Necessary because of https://github.com/rollup/rollup/issues/670

@Injectable()
export class LocaleService {
    private locale: string;
    private localeOptions: LocaleOptions;
    private localeOptionsAddress = "https://cdn.senior.com.br/primeng/locales";
    private localeOptionsVersion = "3.0.0";

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) {}

    get(): Observable<LocaleOptions> {
        return this.localeOptions
            ? of(this.localeOptions)
            : this.getLocaleConfig().pipe(
                  tap((localeOptions: LocaleOptions) => (this.localeOptions = { ...localeOptions, locale: this.locale }))
              );
    }

    getLocale(): Observable<string> {
        return this.locale
            ? of(this.locale)
            : from(this.getUserData()).pipe(
                  map((userData: any) => {
                      this.locale = <string>userData.locale || <string>userData.tenantLocale || "pt-BR";
                      return this.locale;
                  })
              );
    }

    /**
     * Returns an object with the locale options based on the user's locale(platform locale).
     * @return The locale options object.
     */
    getLocaleOptions(): LocaleOptions {
        return this.localeOptions;
    }

    private getUserData() {
        try {
            return of(JSON.parse(this.cookieService.get("com.senior.token")));
        } catch (ex) {
            console.warn("Unable to obtain user locale from cookie, calling getUser");
            return user.getUserData();
        }
    }

    private getLocaleConfig(): Observable<LocaleOptions> {
        return this.getLocale().pipe(
            switchMap((locale: string) => {
                moment.locale(locale);

                return this.http
                    .get<ILocaleOptions>(`${this.localeOptionsAddress}/${this.localeOptionsVersion}/${locale}.json`)
                    .pipe(map((response) => new LocaleOptions(response)));
            }),
            catchError((err: any) => {
                console.warn(`Error getting locale configuration. Using fallback.`, err);
                return of(new LocaleOptions());
            })
        );
    }

    getGroupingSeparator(): string {
        const numberFormat = new Intl.NumberFormat(this.locale, {
            style: "decimal",
            minimumFractionDigits: 5,
            maximumFractionDigits: 5,
        });

        // The default groupingSeparator for 'fr' is the character code 8239. We need it to be the regular space.
        if (this.locale.includes("fr")) return " ";

        return numberFormat.formatToParts(1000).find((part) => part.type === "group")?.value;
    }

    getDecimalSeparator(): string {
        const numberFormat = new Intl.NumberFormat(this.locale, {
            style: "decimal",
            minimumFractionDigits: 5,
            maximumFractionDigits: 5,
        });

        return numberFormat.formatToParts(1.2).find((part) => part.type === "decimal")?.value;
    }
}
