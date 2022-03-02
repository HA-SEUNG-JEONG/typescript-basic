let age: any = 25;

age = true;
console.log(age);

age = "hello";
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push("mario");
console.log(mixed);

let ninja: { name: any; age: any };

ninja = { name: "yoshi", age: 26 };
console.log(ninja);

ninja = { name: 25, age: "26" };
console.log(ninja);
