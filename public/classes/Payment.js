//class
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = "some";
        return `${this.recipient} owes £${this.amount} for ${this.details}`;
    }
}
