function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Setten',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(firstName, lastName, age);
  this.fromSubClass = 'OIE';
}
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Augusto', 'Neves', 45);
console.log(person1.fullName());

const subperson1 = new SubPerson('Augusgto', 'Nevegs', 44);
console.log(subperson1.fullName());
