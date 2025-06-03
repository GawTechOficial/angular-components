import { NumberLocaleOptions } from "./number";

describe("NumberLocaleOptions", () => {
    it("should create the NumberLocaleOptions with default configs", () => {
        const sut = new NumberLocaleOptions();
        expect(sut.thousandsSeparator).toBe(".");
        expect(sut.decimalSeparator).toBe(",");
        expect(sut.currencySymbol).toBe("R$");
    });

    it("should create the NumberLocaleOptions with custom configs", () => {
        const sut = new NumberLocaleOptions({
            thousandsSeparator: "#",
            decimalSeparator: "@",
            currencySymbol: "&"
        });
        expect(sut.thousandsSeparator).toBe("#");
        expect(sut.decimalSeparator).toBe("@");
        expect(sut.currencySymbol).toBe("&");
    });

    it("should create the NumberLocaleOptions with custom empty configs", () => {
        let sut = new NumberLocaleOptions({
            thousandsSeparator: ""
        });
        expect(sut.thousandsSeparator).toBe("");
        expect(sut.decimalSeparator).toBe(",");
        expect(sut.currencySymbol).toBe("R$");

        sut = new NumberLocaleOptions({
            decimalSeparator: ""
        });
        expect(sut.thousandsSeparator).toBe(".");
        expect(sut.decimalSeparator).toBe("");
        expect(sut.currencySymbol).toBe("R$");

        sut = new NumberLocaleOptions({
            currencySymbol: ""
        });
        expect(sut.thousandsSeparator).toBe(".");
        expect(sut.decimalSeparator).toBe(",");
        expect(sut.currencySymbol).toBe("");
    });
});
