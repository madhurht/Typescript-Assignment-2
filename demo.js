//Signature
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
//   logDetails = (ninja: {name: person) => {
//      console.log(`${ninja.name} is ${ninja.age} years old`);
//  }
var form = document.querySelector('.new-form');
var type1 = document.querySelector('#html');
var type2 = document.querySelector('#javascript');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type1.value, type2.value);
});
//Classes and Constructor
var Invoice = /** @class */ (function () {
    function Invoice(c, d, e) {
        this.client = c;
        this.details = d;
        this.amount = e;
    }
    Invoice.prototype.format = function () {
        return this.client + " ows $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var inOne = new Invoice('Madhur', 'works on Devops', 250);
var inTwo = new Invoice('Mary', 'works on website', 200);
console.log(inOne, inTwo);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
// we can add public and private keyword to property of the class 
// they work as access modifier 
// one more access specifier "readonly"
invoices.forEach(function (inv) {
    console.log(inv.client, inv.details, inv.amount);
});
