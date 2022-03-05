"use strict";
//class
var Invoice = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string; //private은 클래스 외부에서는 접근 불가능
    //   public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = "some";
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on  the mario website", 250);
var invTwo = new Invoice("luigi", "work on  the luigi website", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    //   inv.client = "something"; //readonly : 다른 값으로 할당 불가능
    console.log(inv.client, inv.amount, inv.format());
});
//as를 이용한 type casting
var form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
