import { HasFormatter } from "../interfaces/HasFormatter.js";

//class
export class Invoice implements HasFormatter {
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
