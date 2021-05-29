let checkBtn = document.querySelector(".btn");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");
let correctCount =  0;

class Quiz{
    constructor(root,list = [],activeIndex = 0,score=0){
        this.questions = list;
        this.activeIndex = activeIndex;
        this.score = score; 
        this.root = root;
    }
    nextQuestion(){
        return this.activeIndex+=1;
    }
    prevQuestion(){
        return this.activeIndex-=1
    }
    createUI(userSelection){
        this.root.innerHTML = "";
        let currentQuestion = this.questions[this.activeIndex];
        let ui = currentQuestion.createUI();
        console.log(currentQuestion.isCorrect());
        if(currentQuestion.isCorrect(userSelection)){
            this.updateScore();
            console.log("entered");
            let extra =  document.createElement("p");
            extra.innerText = "correct Answer";
            extra.style.color = "green";
            
            correctCount++;
            let totalCorrect = document.querySelector(".totalCorrect");
            totalCorrect.innerText = correctCount;
    
            let score =  document.createElement("p");
            score.innerText = `Score : ${this.score}`;
            
            
            this.root.append(ui,extra,score);
        }else{
            this.root.append(ui);
        }                 
    }
    createEndUI(){
        this.root.innerHTML = "";
        let extra =  document.createElement("p");
        extra.innerText = "Quiz Ended";
        this.root.append(extra);      
    }
    updateScore(){
        return this.score+=1;
    }
    
}
class Question{
    constructor(qTitle,options=[],correctAns){
        this.qTitle = qTitle;
        this.options = options;
        this.correctAns = options[correctAns];
        this.id = `id-${Date.now()}`;
    }
    isCorrect(answer){
        console.log(answer)
        return answer == this.correctAns;
    }
    getCorrectAnswer(){
        return this.correctAns;
    }
    createUI(){
        let li = document.createElement("li");
        let qTitle = document.createElement("p");
        qTitle.innerText = this.qTitle;
        let subRoot = document.createElement("div");
        let optionOne = document.createElement("p");
        optionOne.setAttribute(`data-options`,this.options[0]);
        optionOne.innerText = `1. ${this.options[0]}`;

        let optionTwo = document.createElement("p");
        optionTwo.setAttribute(`data-options`,this.options[1]);
        optionTwo.innerText = `2. ${this.options[1]}`;


        let optionThree = document.createElement("p");
        optionThree.setAttribute(`data-options`,this.options[2]);
        optionThree.innerText = `3. ${this.options[2]}`;
        

        let optionFour = document.createElement("p");
        optionFour.setAttribute(`data-options`,this.options[3]);
        optionFour.innerText = `4. ${this.options[3]}`;
        

        subRoot.addEventListener("click",(event)=>{
            myQuiz.createUI(event.target.dataset.options)
        });
        
        subRoot.append(optionOne,optionTwo,optionThree,optionFour);
        li.append(qTitle,subRoot);
        return li;
    }
}


let question1 = new Question("Who is the father of the nation ?",["Gandhi","narendra","babu","sai"],0);
let question2 = new Question("Who killed Gandhi",["Himself","godse","babu","sai"],1);


let myQuiz = new Quiz(document.querySelector(".quiz"),[question1,question2]);

myQuiz.createUI()


let totalQ = document.querySelector(".totalQ");
    totalQ.innerText = `${myQuiz.questions.length}`;
    
nextBtn.addEventListener("click",()=>{
    myQuiz.nextQuestion();
    if(myQuiz.activeIndex < myQuiz.questions.length){
        myQuiz.createUI();
        console.log(`1st time`,myQuiz.activeIndex,myQuiz.questions.length-1);
    }
});

prevBtn.addEventListener("click",()=>{
    myQuiz.prevQuestion()
    if(myQuiz.activeIndex >=0){
        myQuiz.createUI();
    }
});
