//variable_shadowing--------start
let globalVar = "I am global"

function shadowingExample(){
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar)
}
shadowingExample();
//Chain scope exercise
function outerFunction(){
    let outerVariable = 'Outer variable';

    function middleFunction(){
        let middleVariable = 'Middle variable';

        function innerFunction(){
            let innerVar = 'Inner Variable';

            console.log(outerVariable);
            console.log(middleVariable);
            console.log(innerVar);
        }
        innerFunction();
    }
    middleFunction();
}
outerFunction();
//exercise
function createCount(){
    let count =0;
    function increment(){
        count++;
        console.log(count);
    }

    function decrease(){
        count--;
        console.log(count);
    }

    return{
        increment: increment,
        decrease: decrease
    } ;
}

let counter1 = createCount();
let counter2 = createCount();
counter1.increment();
counter1.increment();
counter2.decrease();
counter1.increment();
counter1.decrease();


