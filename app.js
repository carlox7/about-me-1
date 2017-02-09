'use strict';

var confirmQuiz = prompt('Hello, would you like to take a quiz? Answer using Y or N').toUpperCase();

if(confirmQuiz === 'Y' || confirmQuiz === 'YES'){
  console.log('Awesome! Letsssa Goooooo!');
} else {
  console.log('Your taking it anyway.  Email StopCryingandTaketheQuiz@aol.com with complaints. Thx');
}

var quizResponseOne = prompt('Does Kevin have a cat?').toUpperCase();

if(quizResponseOne === 'Y' || quizResponseOne === 'YES'){
  console.log('Awesome! You are correct!');
} else if(quizResponseOne === 'N' || quizResponseOne === 'NO'){
  console.log('No!. Kevin has a dog. Cats are the devil!');
} else {
  console.log('Please answer using Y or N or Yes/No. PAY ATTENTION');
}

var quizResponseTwo = prompt('Has Kevin been to Spain?').toUpperCase();

if(quizResponseTwo === 'Y' || quizResponseTwo === 'YES'){
  console.log('Correct, Kevin has been to many European countries but not Spain. He would love to go someday!');
} else if(quizResponseTwo === 'N' || quizResponseTwo === 'NO'){
  console.log('Your right! Kevin has gone to many other European countries but never Spain... yet');
} else {
  console.log('Please answer using Y/N or Yes/No. Didn\'t we go over this?');
}

var quizResponseThree = prompt('Has Kevin ever gone 180mph?').toUpperCase();

if(quizResponseThree === 'Y' || quizResponseThree === 'YES'){
  console.log('Yes! 181mph in an Audi S4 with BIG turbos on it. Dont tell the Po-Po.');
} else if(quizResponseThree === 'N' || quizResponseThree === 'NO'){
  console.log('Wrong! In the words of Ricky Bobby... I like to go fast');
} else {
  console.log('Please answer using Y/N or Yes/No. I feel like I\'m repeating myself.');
}

var quizResponseFour = prompt('Is lager Kevin\'s favorite kind of beer?').toUpperCase();

if(quizResponseFour === 'Y' || quizResponseFour === 'YES'){
  console.log('Nope, he likes himself a nice cold IPA.');
} else if(quizResponseFour === 'N' || quizResponseFour === 'NO'){
  console.log('Your right! You won a free IPA.');
} else {
  console.log('Please answer using Y/N or Yes/No. Not trying to insult your intelligence but....');
}

var quizResponseFive = prompt('Can Kevin do a jump kick?').toUpperCase();

if(quizResponseFive === 'Y' || quizResponseFive === 'YES'){
  console.log('Your confidence is appreciated, but Kevin would hurt himself. He is getting old.');
} else if(quizResponseFive === 'N' || quizResponseFive === 'NO'){
  console.log('What? He can do a jump kick like a friggin ninja!');
} else {
  console.log('Please answer using Y/N or Yes/No. Just do it. It will make everyone\'s life easier.');
}
