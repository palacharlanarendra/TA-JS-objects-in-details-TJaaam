## Working with Object Literals

#### Challenge 1/1

Create a function that accepts two inputs (name and age) and returns an object. Let's call this function `makePerson`. This function will:

1. create an empty object
2. add a `name` property to the newly created object with its value being the 'name' argument passed into the function
3. add an `age` property to the newly created object with its value being the 'age' argument passed into the function
4. return the object

## Using Object.create

```js
function makePerson(name,age){
    let obj = Object.create({});
    obj.name = name;
    obj.age = age;
    return obj;
}
```

#### Challenge 1/3

Inside `personStore` object, create a property `greet` where the value is a function that logs "hello".
```js
let personStore = {
    greet: function(){
        console.log("hello");
    }
}
personStore.greet();//hello
```
#### Challenge 2/3

Create a function `personFromPersonStore` that takes as input a `name` and an `age`. When called, the function will create person objects using the `Object.create` method on the `personStore` object. And return the object with age and name.
```js

function personFromPersonStore(name,age){
    let personStore = Object.create({});
    this.name = name;
    this.age = age;
}


```
#### Challenge 3/3

Without editing the code you've already written, add an `introduce` method to the `personStore` object that logs "Hi, my name is [name]".
```js
personFromPersonStore.prototype = {
    introduce: function(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let user = new personFromPersonStore("narendra",28);
```

## Using the NEW keyword

#### Challenge 1/3

Create a function `PersonConstructor` that uses the `this` keyword to save a single property onto its scope called `greet`. `greet` should be a function that logs the string 'hello'.
```js
function PersonConstructor(){
    this.greet = function(){
        console.log("hello")
    }
}
let person = new PersonConstructor();
person.greet();
```
#### Challenge 2/3

Create a function `personFromConstructor` that takes as input a `name` and an `age`. When called, the function will create person objects using the `new` keyword instead of the Object.create method.
```js
function personFromConstructor(name,age){
    this.name =  name;
    this.age = age;
}
let person = new personFromConstructor("narendra",28);
console.log(person);
```
#### Challenge 3/3

Without editing the code you've already written, add an `introduce` method to the `PersonConstructor` function that logs "Hi, my name is [name]".
```js
PersonConstructor.prototype = {
    introduce: function(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let user = new PersonConstructor("narendra",28);

```

## Using ES6 Classes

#### Challenge 1/2

Create a class `PersonClass`. `PersonClass` should have a constructor that is passed an input of `name` and saves it to a property by the same name. `PersonClass` should also have a method called `greet` that logs the string 'hello'.
```js
class PersonClass{
    constructor(name){
        this.name = name;
        this.greet = function(){
            console.log("hello");
        }
    }
}
let user = new PersonClass("narendra");
user.name//narendra
user.greet();//hello
```
#### Challenge 2/2

Create a class `DeveloperClass` that creates objects by extending the `PersonClass` class. In addition to having a `name` property and `greet` method, `DeveloperClass` should have an `introduce` method. When called, `introduce` should log the string 'Hello World, my name is [name]'.
```js
class DeveloperClass extends PersonClass{
    constructor(name){
       super(name,greet)
    }
    introduce(){
         console.log(`Hi, my name is ${this.name}`);
    }
} 
```
## Subclassing

#### Challenge 1/5

Create an object `adminFunctionStore` that has access to all methods in the `userFunctionStore` object, without copying them over individually.
```js
let adminFunctionStore = {
    sayHello: function(){
        console.log("Hello");
    }
}

let userFunctionStore = {
    sayFunc: function(){
        console.log("This is a function");
    }
}
Object.setPrototypeOf(adminFunctionStore,userFunctionStore);
```
#### Challenge 2/5

Create an `adminFactory` function that creates an object with all the same data fields (and default values) as objects of the `userFactory` class, but without copying each data field individually.
```js
function adminFactory(){
    this.products = 2;
    this.total = 20;
    this.sayWow= function(){
        console.log("wow");
    }
}
class userFactory extends adminFactory{
    constructor(products,total,balance){
        super(products,total,sayHello);
        this.balance = balance;
        this.sayHurray = function(){
        console.log("hurray");
        }
    }
}
let user = new userFactory(3,30,2);
user// all the adminFactory properties are present in userFactory
```
#### Challenge 3/5

Then make sure the value of the 'type' field for `adminFactory` objects is 'Admin' instead of 'User'.
```js

```
#### Challenge 4/5

Make sure that `adminFactory` objects have access to `adminFunctionStore` methods, without copying them over.
```js
function adminFactory(){
    this.products = 2;
    this.total = 20;
    this.sayWow= function(){
        console.log("wow");
    }
}
class userFactory extends adminFactory{
    constructor(products,total,balance){
        super(products,total,sayHello);
        this.balance = balance;
        this.sayHurray = function(){
        console.log("hurray");
        }
    }
}
let user = new userFactory(3,30,2);
user.sayWow();//"wow"
```
#### Challenge 5/5

Create a method called `sharePublicMessage` that logs 'Welcome users!' and will be available to `adminFactory` objects, but not `userFactory` objects. Do not add this method directly in the `adminFactory` function.
```js
adminFactory.prototype.sharePublicMessage = function(){
    console.log("Welcome Users!");
}
```