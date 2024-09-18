import {HasFormatter} from '../interfaces/hasformatter.js';

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}
    // creating a method for this class
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`
    }
}