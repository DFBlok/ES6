//Arrow functions

const add = (a, b) =>  + b;
console.log(add(10, 10));

const numbers= [1, 2,3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const greeting = value =>console.log(`hellow ${value}`)
greeting();

//arrow function implicit return
const square = a => a *a;
square();
console.log("---------------BACK TICK--------------------")
//back tick
let str = "one";
let str2 = "two";

//console.log(str+" "+str2+ 5+6);

console.log(`hello ${str} ${str2} : ${5+6}`);

console.log("-----------------------------------")
//Template Literals
let x =6;
let y =10;
console.log(`hello sum of two number is: ${x+y}`)
console.log("-----------------------------------")
//Default parameter
function greet(name = "Guest"){
    console.log(`Hello, ${name}!`);
}
greet();
greet("John Walker");
console.log("-----------------------------------")
//rest parameter and spread operator
function abcd(a,b,c,...d){
    console.log(a,b,c,d);
}
abcd(1,2,3,4,5,6,7,8); //rest operator

const arr1 = [1,2,3];
const arr2 = [...arr1,4,5]; //spread operator
console.log(arr2);
console.log("-----------------------------------")
//dev explaination
let obj = {name:"dev", school: "online"}
let obj2 = {...obj, age:45, school: "Chatty Senior Secondary School", name: "Duwayne"}
console.log(obj2);

//DESTRUCTURING
const num = [1,2,3];
const [first, second] = num;
console.log(first, second);

const person = {name: 'Kim', age: 40};
const {name, age} = person;
console.log(name, age);

let a = [2,3]
let [b, c] = a;
console.log(a);
//object
let obj1 = {name1: "dev", age1: 45}
let {name1, age1} = obj1;
console.log(name1 +" -------- " +age1);

console.log("-----------------------------------")

/* import { add, subtract } from './math.js';
import custom from './math.js';

//multiple variable function
console.log(add(5, 10));
console.log(subtract(90,55));
console.log(custom(5,5)); */

function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }
  
  function findUser(username) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username);
    return user;
  }
  
  console.log(findUser('jane'));

console.log("-------------------------------------")
function callback(a, b){
  return a + b;
}

function findSum(fn){
  let x = 20;
  let y = 50;
  console.log(fn(x, y));
}
findSum(callback);

console.log("Start");
setTimeout(()=>{
console.log("after 2 seconds")
}, 2000)
setTimeout(()=>{
  console.log("End")
  })

console.log("-------------------------------------")
/* const myPromise = new Promise((resolve, reject)=>{
  if(false){
    resolve("Data is feteched!")
  }else{
    reject("Try again, data is failed")
  }
})
myPromise.then((result)=>console.log(result)); */
function fetchData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data fetched from an API";
      //simulate error condition
      const error  = false;
      if(!error){
        resolve(data);
      }
      else{
        reject("Error: Unable to fetch data");
      }
    }, 5000);
  });
}

fetchData()
  .then(data => {
    console.log("Data: ",data);
  })
  .catch(error => {
    console.error(error);
  });
console.log("-------------------------------------")

/* function myDisplayer(some){
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject){
  let x = 0;

  if(x ==0){
    myResolve("OK")
  }
  else{
    myReject("Error")
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
); */