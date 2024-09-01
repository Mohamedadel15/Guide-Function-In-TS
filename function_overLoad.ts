/* 
    * Function Overloading in TypeScript is a concept where a single function can have multiple signatures.
    * Function Overloading is a type of polymorphism. 
    * In Function Overloading, the function is defined multiple times with different parameters.
    * The function is called with different parameters to perform different tasks.
*/



function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string | number, b: string | number) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

let sum1 = add(10, 20);
console.log(sum1); // 30

let sum2 = add("Hello ", "TypeScript");
console.log(sum2.split("")); // Hello TypeScript