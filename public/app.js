"use strict";
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("hello", person.age);
};
greetPerson(me);
console.log(me);
// import { Invoice } from "./classes/Invoice.js";
// const invOne = new Invoice("mario", "work on  the mario website", 250);
// const invTwo = new Invoice("luigi", "work on  the luigi website", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   //   inv.client = "something"; //readonly : 다른 값으로 할당 불가능
//   console.log(inv.client, inv.amount, inv.format());
// });
//as를 이용한 type casting
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
