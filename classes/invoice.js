export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // creating a method for this class
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
