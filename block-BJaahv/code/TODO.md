# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
//Factory pattern
function createData(name,id,noOfProjects){
   data = {};
  data.name = name;
  data.id = id;
  data.noOfProjects = noOfProjects;
  data.getProjects = function(){
  return data.noOfProjects;
}

data.changeName = function(newName){
  let dummy = data.name;
  data.name = newName;
  return dummy;
}
data.incrementProject = function(value=1){
  data.noOfProjects +=value;
  return data.noOfProjects;
}
data.decrementProject = function(value=1){
  data.noOfProjects -=value;
  return data.noOfProjects;
}
  return data;
}

let data1 = createData("narendra",20,8);
data1.getProjects();//8
data1.changeName("babu");//"narendra"
data1.decrementProject();//7
data1.incrementProject();//8


//prototypical pattern
function createData(name,id,noOfProjects){
   let data = Object.create(dataMethods);
  data.name = name;
  data.id = id;
  data.noOfProjects = noOfProjects;
  return data;
}

let dataMethods = {
  getProjects : function(){
    return this.noOfProjects;
  },
  changeName : function(newName){
    let dummy = this.name;
    this.name = newName;
    return dummy;
  },
  incrementProject : function(value=1){
    this.noOfProjects +=value;
    return this.noOfProjects;
  },
  decrementProject : function(value=1){
    this.noOfProjects -=value;
    return this.noOfProjects;
  }
}

let data1 = createData("narendra",20,8);
data1.getProjects();//8
data1.changeName("babu");//"narendra"
data1.decrementProject();//7
data1.incrementProject();//8


//psuedoclassical pattern
function CreateData(name,id,noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;

}

CreateData.prototype = {
  getProjects : function(){
    return this.noOfProjects;
  },
  changeName : function(newName){
    let dummy = this.name;
    this.name = newName;
    return dummy;
  },
  incrementProject : function(value=1){
    this.noOfProjects +=value;
    return this.noOfProjects;
  },
  decrementProject : function(value=1){
    this.noOfProjects -=value;
    return this.noOfProjects;
  }
};

let data1 = new CreateData("narendra",20,8);
data1.getProjects();//8
data1.changeName("babu");//"narendra"
data1.decrementProject();//7
data1.incrementProject();//8



// Class pattern

class Data{
  constructor(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects(){
    return this.noOfProjects;
  }
  changeName(newName){
    let dummy = this.name;
    this.name = newName;
    return dummy;
  }
  incrementProject(value=1){
    this.noOfProjects +=value;
    return this.noOfProjects;
  }
  decrementProject(value=1){
    this.noOfProjects -=value;
    return this.noOfProjects;
  }
}


let data1 = new Data("narendra",20,8);
data1.getProjects();//8
data1.changeName("babu");//"narendra"
data1.decrementProject();//7
data1.incrementProject();//8


```