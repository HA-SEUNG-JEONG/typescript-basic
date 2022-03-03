"use strict";
let greet;
// greet = "Hello";
greet = () => {
    console.log("hello world");
};
//default paramter와 ?은 같이 쓸 수 없음
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2);
const minus = (a, b) => {
    return a + b;
};
let result = minus(2, 7);
// result = "some";
