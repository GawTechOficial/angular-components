import { Pipe, PipeTransform } from "@angular/core";
import { LocalizedDatePipe } from "./localized-date.pipe";

@Pipe({
    name: "localizedDateImpure",
    pure: false,
})
export class LocalizedDateImpurePipe extends LocalizedDatePipe implements PipeTransform {}
