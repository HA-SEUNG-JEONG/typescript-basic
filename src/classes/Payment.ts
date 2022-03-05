import { HasFormatter } from "../interfaces/HasFormatter.js";

//class
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = "some";
    return `${this.recipient} owes £${this.amount} for ${this.details}`;
  }
}
