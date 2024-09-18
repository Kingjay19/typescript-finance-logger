export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // creating a method for this class
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
