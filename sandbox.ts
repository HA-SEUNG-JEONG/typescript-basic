//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "30";
age = 30;

// isLoggedIn = 10;
isLoggedIn = true;

//arrays

// Type Error
// let ninjas: string[];

// ninjas.push("shaun");

// 빈 배열 선언
let ninjas: string[] = [];

ninjas.push("shaun");

//union types
let mixed: (string | number | boolean)[] = [];

mixed.push("hello");
mixed.push(2);
mixed.push(true);
console.log(mixed);

let uid: string | number;

uid = "123";
uid = 2;
// uid = true;

//objects

let ninjaOne: object;

ninjaOne = { name: "yoshi", age: 30 };
// ninjaOne = "hello";

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
