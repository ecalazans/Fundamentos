interface Pessoa {
  name: String,
  age: Number,
  work?: String
}

const pessoa: Pessoa = {
  name: 'Erick',
  age: 28,
}

const outraPessoa: Pessoa = {
  name: 'Katarina',
  age: 30,
  work: 'Médica'
}

// 2° Maneira de declarar array com
// os valores recebidos sendo do tipo Pessoa
const arrayPessoa: Pessoa[] = [
  pessoa,
  outraPessoa
]

// 2° Maneira de declarar array com
// os valores recebidos sendo do tipo Pessoa
const arrayPessoa1: Array<Pessoa> = [
  pessoa,
  outraPessoa
]

const arrayNum: number[] = [
  1, 2, 3
]

const arrayString: Array<string> = [
  '1', '2', '3'
]