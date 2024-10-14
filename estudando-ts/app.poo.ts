// const user = {
//   name: 'Erick D.C',
//   age: 28,
//   showName() {
//     console.log(this.name)
//   }
// }

// user.showName()

class User {
  name: string = 'Erick'
  age: number = 29

  constructor(name: string, age: number) {
    // this = acessar os métodos e atributos do próprio objeto/classe
    this.name = name,
    this.age = age
  }

  showName = () => {
    console.log(this.name)
  }
}

const user: User = new User('Erick d.c', 29)
user.showName()