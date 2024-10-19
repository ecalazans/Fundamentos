export abstract class DioAccount {
  //atributos da classe
  private  readonly name: string
  private readonly accountNumber: number
  private balance: number = 120
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name,
      this.accountNumber = accountNumber
  }

  //métodos da classe
  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  getAccount = (): number => {
    return this.accountNumber
  }

  deposit = (depositAmount: number): void => {
    if (this.validateStatus()) {
      const value = this.balance += depositAmount
      console.log('Você depositou!. Seu saldo atual é: R$', value)
    }
  }

  // retirar / sacar
  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus() && this.balance >= withdrawAmount) {
      const value = this.balance -= withdrawAmount
      console.log(`Você sacou R$: ${withdrawAmount}!. Saldo atual: R$: ${value}`)
    } else {
      console.log('O valor do saque não pode ser maior que seu saldo atual: R$', this.balance)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  updateBalance = (loanAmount: number): number => {
    const updatedBalance = this.balance += loanAmount
    return updatedBalance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}