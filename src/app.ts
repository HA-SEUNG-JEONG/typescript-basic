// const anchor = document.querySelector("a")!;

// console.log(anchor.href);

// const form = document.querySelector("form")!;

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
