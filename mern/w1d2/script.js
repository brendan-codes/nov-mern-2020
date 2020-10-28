class Animal {
    constructor(name){
        this.name = name;
    }

    makeNoise(){
        console.log(`Hey my name is ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
        this.loyalty = 50;
    }

    barkAt(animal){
        console.log(`hey you ${animal.name}, get away from my yard!`);
    }
}

let cinder = new Dog("Cinder");
let oscar = new Animal("Oscar");
let fergus = new Dog("Fergus");

cinder.barkAt(oscar);
cinder.barkAt(fergus);

let obj = {
    name: "brendan",
    email: "brendan@email.com",
    likes: 255,
    favorites: [{keys: []}, "not sleeping right", "staying indoors"]
};

let objectCopy = {...obj};

console.log(objectCopy);
console.log(obj);
console.log(obj.favorites.push("Javascript!"));

objectCopy.name = "Beth";
obj.email = "email@gmail.com";

console.log(objectCopy);
console.log(obj);

// let keys = Object.keys(obj);

// console.log(obj);

// console.log(obj[keys[0]]);

for(let value of Object.keys(obj)){
    // console.log(obj[value]);
}


// console.log(obj["name"]);

// "name" -> hashingFunction(str) -> 3847293492

// [.. 3847293491, 3847293492: "Brendan", 3847293493 ...]

// standalone function
function doStuff(){

}

// anonymous function stored in a variable
var doStuff = function(){

}

let object = {
    // methods (also anonymous)
    doStuff: function(){

    }
}

var example = () => {};

// asynchronous
function httpRes(callback){
    // after some logic

    // ...
    callback();
}

                // callback
httpRes(() => {console.log("hello page has loaded")});