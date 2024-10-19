import { DioAccount } from "./DioAccount";

export class ToAddAccount extends DioAccount {
  
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (depositAmountPlusTen: number) => {
    const firstValue = depositAmountPlusTen
    const valuePlusTen = depositAmountPlusTen += 10
    console.log(`Valor de depósito: R$ ${firstValue}. Mais R$ 10,00 serão acrescidos. \nValor total depósito: R$ ${valuePlusTen}`)
  };
}