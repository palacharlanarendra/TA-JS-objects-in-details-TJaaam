//pseudoclassical pattern
function CreateAnimal(location,numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

CreateAnimal.prototype = {
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


function CreateDog(name,color){
    this.name = name;
    this.color = color;
}

CreateDog.prototype = {
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

Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);

let animal1 = new CreateAnimal("hyderabad",4);
let dog1 = new CreateDog("bunny","black");






function CreateCat(name,colorOfEyes){
    this.name = name;
    this.changeColorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
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

Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);

let animal1 = new CreateAnimal("hyderabad",4);
let cat1 = new CreateCat("sunny","white");


//class pattern


class CreateAnimal{
    constructor (location,numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    set changeLocation(newLocation){
        this.location = newLocation;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;
    }

}



class CreateDog{
    constructor (name,color){
        this.name = name;
        this.color = color;
    }
    bark(){
        console.log(`I am ${this.name} and I can bark 🐶`);
    }
    set changeName(newName){
        this.name = newName;
    }
    set changeColor(newColor){
        this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}



Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);

let animal1 = new CreateAnimal("hyderabad",4);
let dog1 = new CreateDog("bunny","black");






class CreateCat{
    constructor(name,colorOfEyes){
        this.name = name;
        this.changeColorOfEyes = colorOfEyes;
    }
    meow(){
        console.log(`I am ${this.name} and I can do mewo meow 😹`);
    }
    set changeName(newName){
        this.name = newName;
    }
    set changeColorOfEyes(newColor){
        this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }

}
    


let animal1 = new CreateAnimal("hyderabad",4);
let cat1 = new CreateCat("sunny","white");
