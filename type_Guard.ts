/*
    * type_Guard: is a concept in TypeScript that allows you to narrow down the type of an object within a conditional block.
    * Type Guards are some expressions that perform runtime checks on the type of an object.
    * Type Guards are used to determine the type of an object at runtime.
*/

// Example 1: typeof Type Guard
let num: number = 10;
if (typeof num === 'number') {
    console.log("The variable is a number");
}

// Example 2: instanceof Type Guard
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let mohamed = new Person( "Mohamed",10);
if (mohamed instanceof Person) {
    console.log("The object is an instance of Person class");
}

// Example 3: in Type Guard
function display(x: any) {
    if(typeof x === 'string') {
        return x.length;
    }
    return x;
}

console.log(display("Hello")); // 5

