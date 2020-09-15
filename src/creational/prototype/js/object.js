const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Setten',
  age: 30,

  fullName() {
    return `${this.lastName} ${this.lastName}`;
  },
};

const anotherperon = Object.create(personPrototype);
console.log(anotherperon);
console.log(anotherperon.firstName);
console.log(anotherperon.fullName());
