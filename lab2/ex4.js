'use strict'

function fn() {
  const obj1 = { name: "olena" };
  let obj2 = { name: "maksym" };

  obj1.name = "sofia"; // робить
  obj2.name = "andrii"; // робить

  // obj1 = { name: "dmytro" }; // помилка: TypeError: Assignment to constant variable.
  obj2 = { name: "anna" };    

  console.log(obj1); // { name: "sofia" }
  console.log(obj2); // { name: "anna" }
}

fn();

function createUser(name, city) {
  return {
    name: name,
    city: city
  };
}

console.log(createUser("olena", "Lviv"));
