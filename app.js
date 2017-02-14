'use strict';

// Quiz Confirmation
var confirmQuiz = prompt('Hello, would you like to take a quiz? Answer using Y or N').toUpperCase();

if(confirmQuiz === 'Y' || confirmQuiz === 'YES'){
  console.log('Awesome! Letsssa Goooooo!');
} else {
  console.log('Your taking it anyway.  Email StopCryingandTaketheQuiz@aol.com with complaints. Thx');
}
function QuestionOne(){
// Question One
  var quizResponseOne = prompt('Does Kevin have a cat?').toUpperCase();

  if(quizResponseOne === 'Y' || quizResponseOne === 'YES'){
    console.log('Awesome! You are correct!');
  } else if(quizResponseOne === 'N' || quizResponseOne === 'NO'){
    console.log('No!. Kevin has a dog. Cats are the devil!');
  } else {
    console.log('Please answer using Y or N or Yes/No. PAY ATTENTION');
  }
}
QuestionOne();

function QuestionTwo(){
//Question Two
  var quizResponseTwo = prompt('Has Kevin been to Spain?').toUpperCase();

  if(quizResponseTwo === 'Y' || quizResponseTwo === 'YES'){
    console.log('Correct, Kevin has been to many European countries but not Spain. He would love to go someday!');
  } else if(quizResponseTwo === 'N' || quizResponseTwo === 'NO'){
    console.log('Your right! Kevin has gone to many other European countries but never Spain... yet');
  } else {
    console.log('Please answer using Y/N or Yes/No. Didn\'t we go over this?');
  }
}
QuestionTwo();

function QuestionThree(){
// Question Three
  var quizResponseThree = prompt('Has Kevin ever gone 180mph?').toUpperCase();

  if(quizResponseThree === 'Y' || quizResponseThree === 'YES'){
    console.log('Yes! 181mph in an Audi S4 with BIG turbos on it. Dont tell the Po-Po.');
  } else if(quizResponseThree === 'N' || quizResponseThree === 'NO'){
  } else {
    console.log('Please answer using Y/N or Yes/No. I feel like I\'m repeating myself.');
  }
}
QuestionThree();

function beerQuestion(){
// Question Four
  var quizResponseFour = prompt('Is lager Kevin\'s favorite kind of beer?').toUpperCase();

  if(quizResponseFour === 'Y' || quizResponseFour === 'YES'){
    console.log('Nope, he likes himself a nice cold IPA.');
  } else if(quizResponseFour === 'N' || quizResponseFour === 'NO'){
    console.log('Your right! You won a free IPA.');
  } else {
    console.log('Please answer using Y/N or Yes/No. Not trying to insult your intelligence but....');
  }
}
QuestionFour();

function kickQuestion(){
// Question Five
  var quizResponseFive = prompt('Can Kevin do a jump kick?').toUpperCase();

  if(quizResponseFive === 'Y' || quizResponseFive === 'YES'){
    console.log('Your confidence is appreciated, but Kevin would hurt himself. He is getting old.');
  } else if(quizResponseFive === 'N' || quizResponseFive === 'NO'){
    console.log('What? He can do a jump kick like a friggin ninja!');
  } else {
    console.log('Please answer using Y/N or Yes/No. Just do it. It will make everyone\'s life easier.');
  }
}
QuestionFour();

function numGame(){
// Question Six Random Number
  var correctAnswer = 6;

  for (var i = 0; i < 4; i++){
    var quizResponseSix = prompt('Bonus Round! Guess a number between 1 and 10');
    var numberGuess = parseInt(quizResponseSix);
    if (numberGuess === correctAnswer){
      alert('You guessed correct!');
      break;
    } else if (numberGuess < correctAnswer){
      alert('Too low! Guess again.');
    } else if (numberGuess > correctAnswer){
      alert('Too high!');
    }
  }
}
numGame();

function QuestionFive(){
//Question Seven States Question
  var statesVisited = ['WASHINGTON', 'OREGON'];
//number of guesses
  for(var i = 0; i < 6; i++){
    var quizResponseSeven = prompt('Which states has Kevin visited?').toUpperCase();
    for(var ii = 0; ii < statesVisited.length; ii++){
      if(quizResponseSeven === statesVisited[ii]);
      alert('Good Job! ' + ii + ' is a state Kevin has visited');
      i = 30;
      //rightAnswer++;
      break;
    }
  } if(i === 5){
    alert('Your all out of guesses. The correct answers are ' + statesVisited);
  }
}
QuestionFive();
// var correctState = ['WASHINGTON, OREGON, IDAHO, MONTANA, NEW YORK, NEW JERSEY, TEXAS, NEVADA, MONTANA, CALIFORNIA, PENNSYLVANIA, NORTH CAROLINA'];
//
// // console.log(correctState);
//
// // for (var questionSix = 0; questionSix < 4; questionSix++){
// //   var quizResponseSeven = (prompt('What US states has Kevin been to?').toUpperCase);
// //   if (correctState === ()){
// //     prompt('Thats 1, try to pick another');
// //   } else if (quizResponseSeven < correctState){
// //     alert('Too low! Guess again.');
// //   } else if (quizResponseSeven > correctState){
// //     alert('Too high!');
// //   }
// // }
// var confirmQuiz = confirm('Now your going to take a quiz. Now.')
//
// var score = 0
//
// var StartQuiz = false;
//
// console.console.log();
//
// do {
//   if (confirmQuiz) {
//     prompt('Slright, lets go');
//   } else {
//   confirmQuiz = alert('wrong answer')
//   }
// } while (true);
//
//
// // array = array("Kyle","Ben","Sue","Phil","Ben","Mary","Sue","Ben");
// // Counts = array_count_values($array);
// // echo $counts['Ben'];
//
// // var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// // var counts = {};
// //
// // for(var i = 0; i< arr.length; i++) {
// //     var num = arr[i];
// //     counts[num] = counts[num] ? counts[num]+1 : 1;
/*break

sumOfnumbers(3,7);

var name = 'Adam';
var otherName = 'Amanda';
var myDog = 'Mika';

var addTwoThings = function(numOne, numTwo){
  return numOne + numTwo;
};

function sumOfnumbers(numOne, numTwo){
  console.log(numOne + numTwo);
}*/
