
//primitive types
let name = 'Mel';
name = 1;       //can change type
let age = 21;          //all numbers are of type number
const b = 1663;        //constant
let stuff = undefined; //type: undefined
let otherstuff = null; //type: object

//referenced type: objects, array, functions
//object literal with key values
let person = {
    name: 'mel',
    age: 21
};

//dot product
person.name = 'John';
//bracket notation - dynamic
person['name'] = 'Mary';

//array can have different types
let selectedColors = ['red', 'blue', 1];

function greet(name){
    console.log('hello' + name);
}

greet('person');