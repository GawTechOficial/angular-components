import { Pipe, PipeTransform } from "@angular/core";
import { MaskConfig } from "@seniorsistemas/ng2-currency-mask";
import { LocalizedBignumberPipe } from "./localized-bignumber.pipe";

@Pipe({
    name: "localizedBignumberImpure",
    pure: false,
})
export class LocalizedBignumberImpurePipe extends LocalizedBignumberPipe implements PipeTransform {
    public transform(value?: any, options?: MaskConfig): any {
        return super.transform(value, options);
    }
}
