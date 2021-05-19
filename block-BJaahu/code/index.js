//prototypal pattern
let questionMethods = {
    isAnswerCorrect: function(indexArg){
        if(question.index==indexArg){
            return true;
        }
        return false;
    },
    getCorrectAnswer: function(){
        return question.options[question.index];
    }
};
function quiz(title,options,correctAnswerIndex){
    let question= Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.index = correctAnswerIndex;
    return question;
}
let firstQuestion = new quiz(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new quiz(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  console.log(firstQuestion.isAnswerCorrect(1));
  console.log(secondQuestion.isAnswerCorrect(1));
console.log(firstQuestion.getCorrectAnswer());
console.log(secondQuestion.getCorrectAnswer());



//pseudoclassical pattern
function Quiz(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.index = correctAnswerIndex;
}
Quiz.prototype = {
    isAnswerCorrect: function(indexArg){
        if(this.index==indexArg){
            return true;
        }
        return false;
    },
    getCorrectAnswer: function(){
        return this.options[this.index];
    }
};
let firstQuestion = new Quiz(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Quiz(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );
  console.log(firstQuestion.isAnswerCorrect(1));
  console.log(secondQuestion.isAnswerCorrect(1));
console.log(firstQuestion.getCorrectAnswer());
console.log(secondQuestion.getCorrectAnswer());

//class pattern
class Quiz{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.index = correctAnswerIndex;
    }
    isAnswerCorrect(indexArg){
        if(this.index==indexArg){
            return true;
        }
        return false;
    }
    getCorrectAnswer(){
        return this.options[this.index];
    }
}
let firstQuestion = new Quiz('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);

let secondQuestion = new Quiz('Where is the capital of Jamaica',['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2);
  console.log(firstQuestion.isAnswerCorrect(1));
  console.log(secondQuestion.isAnswerCorrect(2));
  console.log(firstQuestion.getCorrectAnswer());
  console.log(secondQuestion.getCorrectAnswer());