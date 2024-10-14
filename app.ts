// Dio Banking
//name, accountNumber = atributos
//Depositar, Sacar = métodos

import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Erick D.C', 4321)
console.log(peopleAccount)
peopleAccount.deposit()
// peopleAccount.deposit()

// const companyAccount = new CompanyAccount('DIO', 440)
// companyAccount.deposit()