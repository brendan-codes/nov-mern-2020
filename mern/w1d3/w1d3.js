// functional programming

const numbers = Object.freeze([1, 2, 3]);
// console.log(numbers);

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2;
// }

// console.log(numbers);

function doubleNumbers(nums){
    const newNumbers = [];
    for(let i = 0; i < nums.length; i++){
       newNumbers.push(nums[i] * 2);
    }

    return newNumbers;
}

function tripleNumbers(nums){
    const newNumbers = [];
    for(let i = 0; i < nums.length; i++){
       newNumbers.push(nums[i] * 3);
    }

    return newNumbers;
}

function multipleBy(nums, value){
    const newNumbers = [];
    for(let i = 0; i < nums.length; i++){
       newNumbers.push(nums[i] * value);
    }

    return newNumbers;
}

const newArray = doubleNumbers(numbers);
// console.log(newArray);

// .map

const exampleArray = numbers.map(number =>  number * 3);
const exampleArray2 = numbers.map((number) =>  number === 3 ? number * 3 : number);

// console.log(exampleArray);
// console.log(exampleArray2);

const more_numbers = Object.freeze([1, 2, 3, 4, 9, 22, 23, 24, 99, 120]);

function getEvens(nums){
    const evens = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 !== 0){
            evens.push(nums[i]);
        }
    }

    return evens;
}

console.log(getEvens(more_numbers));

const test = (number) => number % 2 === 0;
const evenNumbers = more_numbers.filter(test);

console.log(evenNumbers);


const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


console.log(pokemon.filter(function(object){ return object.types.includes("fire") }));
var nameTest = object => object.name;
console.log(pokemon.map(nameTest));


var flyingSecondaries = pokemon.filter(object => object.types[1] === "flying");
console.log(flyingSecondaries.map(nameTest));






//              arguement
let ten = 10;
function doStuff(number, arr, callback){

    number // 22
    arr // []
    callback // () => {} anonymous function
}

doStuff(22, [], () => {});

numbers.map