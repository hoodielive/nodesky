function Person(name, surname, age) {
  this.name = name; 
  this.surname = surname; 
  this.age = age; 
}; 

Person.prototype.getFullName = function() {
  return this.name + '' + this.surname; 
}; 

Person.older = function(person1, person2) {
  return ( person1.age >= person2.age ) ? person1 : person2; 
}; 

// Damn I feel bad that I like this syntactic sugar lunancy lol 

class Person2 {
  constructor(name, surname, age) {
    this.name = name; 
    this.surname = surname; 
    this.age = age; 
  };
  
  getFullname() {
    return this.name + ' '  + this.surname; 
  };

  static older(person1, person2) {
    return (person1.age >= person2.age) ? person1 : person2; 
  }; 
}; 

console.log(Person2.older('Larry', 'kyrah'))


class PersonWithMiddlename extends Person {
  constructor(name, middlename, surname, age) {
    super(name, surname, age);  
    this.middlename = middlename; 
  }

  getFullName() {
    return this.name + '' + this.middlename + '' + this.surname; 
  }
}

new PersonWithMiddlename(); 

