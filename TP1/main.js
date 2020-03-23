const Person = require('./modules/person.js');
// import Person from modules;

const a = new Person('Dupont', 'Toto');
const b = a;
a.firstname = 'Tata';
console.log(a.firstname);
console.log(b.firstname);

/* expected :
Tata
Tata

*/