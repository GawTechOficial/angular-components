import { Pipe, PipeTransform } from "@angular/core";
import * as moment_ from "moment";
import { map } from "rxjs/operators";

import { LocaleService } from "../locale.service";

const moment = moment_; // @HACK Necessary because of https://github.com/rollup/rollup/issues/670

@Pipe({
    name: "localizedTime",
})
export class LocalizedTimePipe implements PipeTransform {
    constructor(private localeService: LocaleService) {}

    public transform(value: any, format: string = "LTS"): any {
        return this.localeService.get().pipe(map(() => (value ? moment(value, "HH:mm:ss").format(format) : value)));
    }
}
