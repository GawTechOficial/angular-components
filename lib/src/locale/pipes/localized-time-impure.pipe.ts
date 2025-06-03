import { Pipe, PipeTransform } from "@angular/core";
import { LocalizedTimePipe } from "./localized-time.pipe";

@Pipe({
    name: "localizedTimeImpure",
    pure: false,
})
export class LocalizedTimeImpurePipe extends LocalizedTimePipe implements PipeTransform {}
