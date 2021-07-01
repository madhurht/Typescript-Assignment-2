var x1 = 123;
//x1='madhur';

let firstname:string = 'madhur';
console.log(firstname);
firstname = 'Raj';
console.log(firstname);
//firstname =123,

let y:any;
y='Jain';
console.log(y);
y=123;
console.log(y);

let z:string | number;
z='madhur';
z=123;
//z=false;


var obj = {
    "name":'Madhur',
    'age':23
}

console.log(obj);

//console.log(5+6);

let arr = [];   //empty array

arr = ['madhur','jain'];
console.log(arr);
console.log(arr[0]);

//functions in TS

let greet1 = ()=>{
    console.log("Hello Good Morning !!");
}

//greet ='hello';

let sum : Function;

sum = () => {
    console.log('Add');
}

const add = (a:number,b:number) =>{
    console.log(a+b);

}

add(10,10);

// Type aliases

type StringOrNum = string | number;

let abc :StringOrNum;

abc = 'Devops';
console.log(abc);

abc = 123;
console.log(abc);

type objWithName = {name:string,uid:StringOrNum};

