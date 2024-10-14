import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  // assinatura do método pode ser alterada
  // assinatura do método = tipo de retorno
  getLoan = (): void => {
    console.log('Você pegou um empréstimo')
  }

  deposit = (): void => {
    console.log('A empresa depositou')
  }
}