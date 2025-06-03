export interface ICalendarLocaleOptions {
    hourFormat?: string;
    dateFormat?: string;
    firstDayOfWeek?: number;
    today?: string;
    clear?: string;
    dayNames?: string[];
    dayNamesShort?: string[];
    dayNamesMin?: string[];
    monthNamesShort?: string[];
    monthNames?: string[];
}

export class CalendarLocaleOptions implements ICalendarLocaleOptions {
    public hourFormat = "24";
    public dateFormat = "dd/mm/yy";
    public firstDayOfWeek = 0;
    public today = "Hoje";
    public clear = "Limpar";
    public dayNames: string[] = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    public dayNamesShort: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    public dayNamesMin: string[] = ["D", "S", "T", "Q", "Q", "S", "S"];
    public monthNamesShort: string[] = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    public monthNames: string[] = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    constructor(config: ICalendarLocaleOptions = {}) {
        Object.keys(config).forEach(key => (this[key] = config[key] || this[key]));
    }
}
