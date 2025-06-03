import * as moment_ from "moment";
import { Pipe, PipeTransform } from "@angular/core";

import { LocaleService } from "../locale.service";
import { map } from "rxjs/operators";

const moment = moment_; // @HACK Necessary because of https://github.com/rollup/rollup/issues/670

@Pipe({
    name: "localizedDate",
})
export class LocalizedDatePipe implements PipeTransform {
    constructor(private localeService: LocaleService) {}

    public transform(value: any, format: string = "L LTS"): any {
        return this.localeService.get().pipe(map(() => (value ? moment(value).format(format) : value)));
    }
}
