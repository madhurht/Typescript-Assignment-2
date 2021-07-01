//Signature

let greet2: (a:string, b: string) => void;

greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let logDetails: (obj:{name: string, age: number}) => void;
type person = {name: string, age: number};

logDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
//   logDetails = (ninja: {name: person) => {
//      console.log(`${ninja.name} is ${ninja.age} years old`);
//  }


const form = document.querySelector('.new-form') as HTMLFormElement;

const type1 = document.querySelector('#html') as HTMLInputElement;

const type2 = document.querySelector('#javascript') as HTMLInputElement;

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();

    console.log(
        type1.value,
        type2.value

    );
})


//Classes and Constructor

class Invoice {
    client:string;
    details:string;
    amount: number;

    constructor(c: string, d: string,e: number){
        this.client =c;
        this.details =d;
        this.amount =e;
    }

    format() {
        return `${this.client} ows $${this.amount} for ${this.details}`
    }
}

const inOne = new Invoice('Madhur','works on Devops',250);
const inTwo = new Invoice('Mary','works on website',200);

console.log(inOne,inTwo);

let invoices: Invoice[] =[];


invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);


// we can add public and private keyword to property of the class 
// they work as access modifier 
// one more access specifier "readonly"


invoices.forEach(inv =>{
    console.log(inv.client,inv.details,inv.amount);
});