function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

let animalMethods = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    set changeLocation(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }
}


function createDog(name,color){
    let animal = Object.create(dogMethods);
    animal.name = name;
    animal.color = color;
    return animal;
}

let dogMethods = {
    bark: function(){
        console.log(`I am ${this.name} and I can bark 🐶`);
    },
    set changeName(newName){
        this.name = newName;
    },
    set changeColor(newColor){
        this.color = newColor;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}

Object.setPrototypeOf(dogMethods,animalMethods);

let animal1 = createAnimal("hyderabad",4);
let dog1 = createDog("bunny","black");



function createCat(name,colorOfEyes){
    let animal = Object.create(catMethods);
    animal.name = name;
    animal.changeColorOfEyes = colorOfEyes;
    return animal;
}

let catMethods = {
    meow: function(){
        console.log(`I am ${this.name} and I can do mewo meow 😹`);
    },
    set changeName(newName){
        this.name = newName;
    },
    set changeColorOfEyes(newColor){
        this.color = newColor;
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }
}

Object.setPrototypeOf(catMethods,animalMethods);

let animal1 = createAnimal("hyderabad",4);
let cat1 = createDog("sunny","white");