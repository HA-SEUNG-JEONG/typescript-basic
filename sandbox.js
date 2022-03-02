//explicit types
var character;
var age;
var isLoggedIn;
// age = "30";
age = 30;
// isLoggedIn = 10;
isLoggedIn = true;
//arrays
// Type Error
// let ninjas: string[];
// ninjas.push("shaun");
// 빈 배열 선언
var ninjas = [];
ninjas.push("shaun");
//union types
var mixed = [];
mixed.push("hello");
mixed.push(2);
mixed.push(true);
console.log(mixed);
var uid;
uid = "123";
uid = 2;
// uid = true;
//objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
// ninjaOne = "hello";
var ninjaTwo;
ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
