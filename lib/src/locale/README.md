# Locale

O objetivo deste módulo é prover formas de tratar dados relacionados a localidade, como datas e valores numéricos

## Features

 - Pipe para formatar valores numéricos
 - Pipe para formatar datas
 - Pipe para formatar horas
 - Service para obter informações relacionadas a localidade

 ## Dependências

 * [ng2-currency-mask](https://git.senior.com.br/arquitetura/ng2-currency-mask)
 * [bignumber.js](https://github.com/MikeMcl/bignumber.js/) 

## Utilização

-   [**Exemplo completo de implementação**](https://git.senior.com.br/arquitetura/angular-components/-/tree/develop/src/app/components/locale-showcase)
-   **Módulo**: `LocaleModule`

### Import

```typescript
import { LocaleModule } from "@seniorsistemas/angular-components";

@NgModule({
    imports: [
        /* ... */
        LocaleModule,
    ],
})
export class MyModule {
    /* ... */
}
```

### Pipes

 - LocalizedBignumberPipe
 ```html
 <span>{{ number | localizedBignumber | async }}</span>
 ```

- LocalizedDatePipe
 ```html
  <span>{{ date | localizedDate | async }}</span>
 ```

- LocalizedTimePipe
```html
 <span>{{ dateTime | localizedTime | async }}</span>
```

### LocaleService

| Método      | Descrição                                                                          | Input | Output                      |
| ----------- | ---------------------------------------------------------------------------------- | ----- | --------------------------- |
| `get`       | Método responsável por retornar os valores de data e números conforme a localidade | N/A   | `Observable<LocaleOptions>` |
| `getLocale` | Método responsável por retornar o identificador de localidade                      | N/A   | `Observable<string>`        |
