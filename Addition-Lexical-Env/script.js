//variable_shadowing--------start
/* let globalVar = "I am global"

function shadowingExample(){
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar)
}
shadowingExample(); */
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

