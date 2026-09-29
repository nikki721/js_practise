//objects and this 
const person = {
    firstName : "niki",
    lastName : "golla",
    age: 18,
    sayHello: function(){console.log(`hi i am ${this.firstName}`)},
}
console.log(person.firstName);
