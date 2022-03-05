//class
export class Invoice {
    //   readonly client: string;
    //   private details: string; //private은 클래스 외부에서는 접근 불가능
    //   public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = "some";
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
