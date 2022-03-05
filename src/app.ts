//class
class Invoice {
  //   readonly client: string;
  //   private details: string; //private은 클래스 외부에서는 접근 불가능
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = "some";
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on  the mario website", 250);
const invTwo = new Invoice("luigi", "work on  the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  //   inv.client = "something"; //readonly : 다른 값으로 할당 불가능
  console.log(inv.client, inv.amount, inv.format());
});

//as를 이용한 type casting
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

//inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
