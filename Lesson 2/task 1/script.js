alert("Please use console.");

var person = {};
person.name = "Пилия";
person.surname = "Шевченко";

console.log(person);

person.name = "Сергій";

console.log(person);

delete person.name;

console.log(person);