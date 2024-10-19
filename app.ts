// Dio Banking
//name, accountNumber = atributos
//Depositar, Sacar = métodos

import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { ToAddAccount } from "./class/ToAddAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Erick D.C', 4321)
// console.log(peopleAccount)
// peopleAccount.withdraw(120)
// peopleAccount.deposit()

const companyAccount = new CompanyAccount('DIO', 440)
// companyAccount.getLoan(20)
// companyAccount.getBalance()
// companyAccount.accountNumber = 1

const addAccount: ToAddAccount = new ToAddAccount('Erick', 9876)
// console.log(addAccount.getAccount())