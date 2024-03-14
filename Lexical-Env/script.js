function outer(){
    let a = 15;
    let b = 'Duwayne';
    let c = 1.2;
    let d = 23;
    let e = 'Kelly'
    let f = '2.5'
    function inner(){
        console.log(a + " -- " +b + " -- " + c);
        console.log(d + " -- " + e + "-- "+ f);
    }
    inner();
}
outer();
/* console.log("--------------------------------------") */
/* function outer() {
    let cal = 10;
    console.log(cal); //acces
} */
/* console.log("--------------------------------------") */
/* let globalVar = 'global';

function outer(){
    let outerVar = 'outer';

    function inner(){
        console.log(globalVar);
        console.log(outerVar);
    }
    inner();
    console.log(outerVar)
}
outer();
console.log(globalVar)
console.log(outerVar) */
/* function outer(){
    let a =10;
    function inner(){
        console.log(a);
    }
    return inner;
} */
/* let closeFn = outer();
closeFn(); */


// Closure Example

function outerFunction() {
    let outerVariable = 'I am outer'; // Variable declared within the lexical environment of outerFunction

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from its parent lexical environment (closure)
    }

    return innerFunction; // Return innerFunction (creating a closure)
}

const closureExample = outerFunction(); // Execute outerFunction and store the returned innerFunction

closureExample(); // Call innerFunction (accessing outerVariable from closure)

/* let globalVar = "I am global";

function shadowingExample(){
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

shadowingExample(); */

