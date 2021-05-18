If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
- Organize using object
- Use a function to create object
- Convert the function to use `this` keyword
- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```
- Without Object
```js
  let title = 'Where is the capital of Jordan';
  let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
  let correctAnswerIndex = 1;


function isAnswerCorrect(index){
  if(index==correctAnswerIndex){
    return true;
  }
  return false;
}
function getCorrectAnswer(){
  return options[correctAnswerIndex];
}
isAnswerCorrect(0);//false
getCorrectAnswer();//Amaan
```
- Organize using object
```js

const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
  isAnswerCorrect(index){
    if(index==testData.correctAnswerIndex){
      return true;
    }
    return false;
  },
  getCorrectAnswer(){
    return testData.options[testData.correctAnswerIndex];
  }
};
testData.getCorrectAnswer();//Amaan
testData.isAnswerCorrect(2);//false
testData.isAnswerCorrect(1);//true
```
- Use a function to create object
```js
function createData(title,options,answer){
  const testData={};
  testData.title=title;
  testData.options=options;
  testData.correctAnswerIndex=answer;
  testData.isAnswerCorrect=function(index){
    if(index==testData.correctAnswerIndex){
      return true;
    }
    return false;
  },
  testData.getCorrectAnswer=function(){
    return testData.options[testData.correctAnswerIndex];
  }
  return testData;
}
let data1= createData('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);


data1.getCorrectAnswer()//Amaan
data1.isAnswerCorrect(1)//true
```
- Convert the function to use `this` keyword
```js

function createData(title,options,answer){
  const testData={};
  testData.title=title;
  testData.options=options;
  testData.correctAnswerIndex=answer;
  testData.isAnswerCorrect=function(index){
    if(index==this.correctAnswerIndex){
      return true;
    }
    return false;
  },
  testData.getCorrectAnswer=function(){
    return this.options[testData.correctAnswerIndex];
  }
  return testData;
}
let data1= createData('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);
let data2= createData('Where is the capital of india',['Delhi', 'Chennai', 'Kuwait City', 'Nairobi'],0);


data1.getCorrectAnswer()//Amaan

data2.getCorrectAnswer()//Delhi

data1.isAnswerCorrect(1)//true

data2.isAnswerCorrect(0)//true
```