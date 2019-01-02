/*
   JavaScript Basics
   Basics: User input, alert, methods, debug, if-else if-else clause
   Author: Kiran Kumar P V  */

/*
  Quiz on JavaScript

  The site should:
    1. Greet the User
    2. Prompt the questions one by one and also displaying the number of questions left
    3. Rank the user based on the right responses:
        * Gold Medal: All of the questions are answered right
        * Silver Medal: 3-4 answers are correct
        * Bronze Medal: 1-2 answers are right
        * No Medal: All of the answers are incorrect
    4. Also print values to console for debugging

  Restrictions:
    * No arrays and Loops
                                                                                            */



// Greeting the User
alert('Welcome to JavaScript Quizionaire!');
console.log('Greeted the User');

var questionCount = 5; // Keeps a track of unanswered questions
var rightAnswerCount = 0; // Counts the right answers given by the User
console.log(questionCount + ' Unanswered questions');

// Below chunk of code collects answers from User
var userResponse1 = prompt('Are Java and JavaScript same?(Yes/No) ' + '[ ' + questionCount + ' questions left' + ' ]');
questionCount -= 1;
console.log(questionCount + ' Unanswered questions');
var userResponse2 = prompt('What is the character used to concatenate strings? ' + '[ ' + questionCount + ' questions left ' + ']');
questionCount -= 1;
console.log(questionCount + ' Unanswered questions');
var userResponse3 = prompt('How do you define a single line comment in JavaScript? ' + '[ ' + questionCount + ' questions left ' + ']');
questionCount -= 1;
console.log(questionCount + ' Unanswered questions');
var userResponse4 = prompt("Does JavaScript takes '7' as a number or a string? " + '[ ' + questionCount + ' questions left ' + ']');
questionCount -= 1;
console.log(questionCount + ' Unanswered questions');
var userResponse5 = prompt('What is the function used to print to console? ' + '[ ' + questionCount + ' questions left ' + ']');
questionCount -= 1;
console.log(questionCount + ' Unanswered questions');

// Key variables contain answers

var key1 = 'no';
var key2 = '+';
var key3 = '//';
var key4 = 'string';
var key5 = 'console.log()';

// Quizionaire correction

if ( userResponse1.toLowerCase() === key1 ) {
  rightAnswerCount += 1;
  console.log(userResponse1 + ' right');
}
if ( userResponse2 === key2 ) {
  rightAnswerCount += 1;
  console.log(userResponse2 + ' right');
}
if ( userResponse3.toLowerCase() === key3 ) {
  rightAnswerCount += 1;
  console.log(userResponse3 + ' right');
}
if ( userResponse4 === key4 ) {
  rightAnswerCount += 1;
  console.log(userResponse4 + ' right');
}
if ( userResponse5.toLowerCase() === key5 ) {
  rightAnswerCount += 1;
  console.log(userResponse5 + ' right');
}

// Ranking the User

console.log('Right answers: ' + rightAnswerCount);

if ( rightAnswerCount === 5 ) {
  alert('Awesome, you got all right! You get a Gold crown!');
} else if ( rightAnswerCount === 3 ||  rightAnswerCount === 4 ) {
  alert('Great, you got ' + rightAnswerCount + ' right! You get a silver crown!');
} else if ( rightAnswerCount === 1 || rightAnswerCount === 2 ) {
  alert('Cool, you got ' + rightAnswerCount + ' right! You get a bronze crown!');
} else {
  alert("Sorry, you did not answer any of the questions right. Better luck next time!");
}
