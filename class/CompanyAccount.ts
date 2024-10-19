import { DioAccount } from './DioAccount';
export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
    
  }

  // assinatura do método pode ser alterada
  // assinatura do método = tipo de retorno
  getLoan = (loanAmount: number) => {
    if(this.validateStatus()) {
      const value = this.updateBalance(loanAmount) 
      console.log(`O seu empréstimo de R$ ${loanAmount} foi aprovado!. \nSaldo atual: R$ ${value}`)
    }
  }

  deposit = (): void => {
    console.log('A empresa depositou')
  }

}