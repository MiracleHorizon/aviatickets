// NOTE: Имитация конвертации валют.

export class CurrencyConverter {
  private static readonly RUB_TO_USD: number = 1 / 80
  private static readonly RUB_TO_EUR: number = 1 / 90

  public static rubToUsd(value: number): number {
    return value * this.RUB_TO_USD
  }

  public static rubToEur(value: number): number {
    return value * this.RUB_TO_EUR
  }
}
