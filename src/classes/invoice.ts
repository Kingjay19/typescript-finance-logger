import {HasFormatter} from '../interfaces/hasformatter.js';

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
    // creating a method for this class
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}