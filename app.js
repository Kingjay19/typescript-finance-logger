import { Invoice } from './classes/invoice.js';
import { ListTempalte } from './classes/listtemplate.js';
import { Payment } from './classes/payment.js';
//const form = document.querySelector('form')!
//const form = document.querySelector('.new-item-form')
//we use type casting so specify what type of element what we're declaring is going to be
// we do it in this way
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
//The Exclamation mark behind is just to show that it will be found
const list = new ListTempalte(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    //putting ... infront of the values in an array spreads them out i.e. ...values spreads out the content in the values array created
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
