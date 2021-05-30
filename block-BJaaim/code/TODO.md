We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

1. Quiz is a collection of Questions.
2. Question will need `Title`, `Options` and `Correct Answer`

### Make a Question class with these data and methods:

DATA:

- Title of the question
- Options of the question
- Correct answer

METHODS:

- isCorrect(answer)

Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

- getCorrectAnswer()
  This method will return the correct answer of the question.

- createUI (this will create the layout of a single question)

This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

### Make quiz class with these data and properties

DATA:

- allQuestions
  Collection of Questions. An array with multiple question.
- activeIndex
  Index of the active visible question
- score
  Total number of correct answer

METHOD:

- nextQuestion()
  This method should get the next question.
- createUI
  This will create the ui of the whole app.
- updateScore
  This method will update the score.




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="./styles.css"/>
</head>
<body>
    <div class="container flex">
        <article class="article">
            <div class="flex-box heading">
                <p>Quiz App</p>
                <p>Score:<span class="scoreRoot">0</span></p>
            </div>
            
            <div class=""></div>
                <ul class="quiz"></ul>
                <button class="prevBtn">PREVIOUS</button>
                <button class="nextBtn">NEXT</button>
            </div>
        </article>
    </div>
    <script src="index.js"></script>
</body>
</html>