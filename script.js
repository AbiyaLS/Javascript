class Person{
  constructor(name, age){
    this.name=name
    this.age=age
  }

  introduce(){
    console.log(`"Hi, I'm ${this.name} and I'm ${this.age} years old."`)
  }
}
class Employee extends Person{
  constructor(name,age,jobTitle){
    super(name,age)
    this.jobTitle=jobTitle
  }
  work(){
    console.log(`${this.name} is working as a ${this.jobTitle}`)
  }
}

const employe=new Employee("Abiya",23,"Software Enginner")
employe.work()
employe.introduce()