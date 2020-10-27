// hoisting

var x = 10;


// ex: 1
var x = 10;

function doStuff(){ // function scope
    var x = 30;
}

doStuff();
console.log(x); // 10




// ex: 2
var output;
var x; // undefined

    output = x();
    x = function(){
        return 20;
    }

console.log(output); // logs


var x = function(){
    return 10;
}
var output = x();

// pass by reference
var array = ["orange"];
function addColorToArray(color, arr){
    arr.push(color);
}
addColorToArray("red", array);
console.log(array);


// pass by value
var x = 10;
function add10toN(n){
    return n + 10;
}

let newNumber = add10toN(x);

console.log(newNumber);


const x = ["apple", "pear"];
x.pop(); // ["apple"]






// arrays, objects, instances -> pass by reference
// booleans and numbers -> pass by value

var x = ["banana", "pear"];
var y = x;
y.push("apple");

console.log(x); // banana, bear, apple
console.log(y); // banana, bear, apple




var person = {
    name: "Beth",
    age: "33",
    email: "beth@gmail.com",
    favorite_colors: ["blue", "green"]
}

var {name, age, favorite_colors: [colorA, colorB]} = person;

name; // "Beth"
colorB; // "green"

function returnCats(){
    return ["Oscar", "Alex", "Sheba"];
}
var [cat1, cat2, cat3] = returnCats();

const colors = ["red", "blue", "green", "orange"];

const colorsCopy = ["pink", ...colors];

const [pink] = colorsCopy;

console.log("My favorite color is " + pink);
console.log(`My favorite color is ${pink}`);
// [pink, red, blue, green, organge]

// for(var i = 0; i < colors; i++){
//     colorsCopy.push(colors[i]);
// }



// variable x contain anonymous function
function x(){
    return 10;
}

var x = function(){
    return 10;
}

// implicit return
var x = () => 10;


var ex1 = 10;
var ex2 = 20;

if(ex1 > ex2){
    return true;
}else{
    return "this is an error";
}

ex1 > ex2 ? true : "this is an error";

var example = function(ex1, ex2){
    if(ex1 > ex2){
        return true;
    }else{
        return "this is an error";
    }
}

// functional programming
let example = () => ex1 > ex2 ? true : "this is an error";