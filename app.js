'use strict';

var user = prompt('Welcome to Michelle\'s Website! What is your name?');
console.log('user: ',user);

alert('Nice to meet you, ' + user +'. To get to know me better, let\'s play a game. I\'ll ask you five questions about me.');

var birthPlace = function() {
  var michelleBorn = prompt('Was I born in the USA? Answer with y/n, please.').toLowerCase();
  console.log('michelleBorn: ',michelleBorn);

  if (michelleBorn === 'yes' || michelleBorn === 'y') {
    alert('Good guess, but no! I was actually born in Germany!');
  } else if (michelleBorn === 'no' || michelleBorn === 'n') {
    alert('Correct! I was not born in the US. I was actually born in Heidelberg, Germany.');
  } else {
    alert('I didn\'t understand your answer but I\'ll just tell you: I was born in Germany!');
  }
  return michelleBorn;
}
birthPlace();

var college = function(){
  var michelleCollege = prompt('Did Michelle go to Montreal, to McGill University, for her undergraduate degree?').toLowerCase();
  console.log('michelleCollege: ', michelleCollege);

  if (michelleCollege === 'yes' || michelleCollege === 'y') {
    alert('Oui oui!');
  } else {
    alert('I didn\'t quite catch that! But the correct answer was yes!');
  }
  return michelleCollege;
}
college();

var coding = function() {
  var michelleLikesCoding = prompt('Do you think Michelle enjoys coding?').toLowerCase();
  console.log('michelleLikesCoding: ', michelleLikesCoding);

  if (michelleLikesCoding === 'y' || michelleLikesCoding === 'yes') {
    alert('Right!!');
  }
  else {
    alert('That was an easy one! Of course she likes coding!');
  }
  return michelleLikesCoding;
}
coding();

var pets = function() {
  var michelleHasPets = prompt ('Do you think Michelle has any pets?').toLowerCase();
  console.log('michelleHasPets: ', michelleHasPets);

  if (michelleHasPets === 'y' || michelleHasPets === 'yes') {
    alert('Yes! She has a very fuzzy cat named Toby');
  }
  else if (michelleHasPets === 'cat' ||
  michelleHasPets === 'cats') {
    alert('Yes! She does have a cat.');
  } else {
    alert('Wrong! She has a cat!');
  }
  return michelleHasPets;
}
pets();

var whoWantsToLiveForever = function() {
var michelleImmortality = prompt('If Michelle could choose to be immortal, would she do it?').toUpperCase();
console.log('michelleImmortality: ' , michelleImmortality);

if (michelleImmortality === 'YES' || michelleImmortality === 'Y') {
  alert('I\'d rather not be forever yearning for the past, so no, I wouldn\'t want to live forever.');
} else if (michelleImmortality === 'NO' || michelleImmortality === 'N') {
  alert('Right. Just like how that song "that goes on and on my friends" gets annoying in about five seconds, living forever sounds like it could get tiresome after a while.');
} else {
  alert('You didn\'t answer yes or no! Pffffttttt!');
}
return michelleImmortality;
}
whoWantsToLiveForever();

// var michelleFictionalCharacterBff = prompt('Time for one last question! If Michelle could be best friends with any fictional character, who would she choose to befriend?');
// console.log('michelleFictionalCharacterBff: ', michelleFictionalCharacterBff);
//
// if (michelleFictionalCharacterBff === "Sherlock Holmes" || michelleFictionalCharacterBff === "Sherlock") {
//   alert('Bingo, super sleuth! The game is afoot!')
// }
// else if (michelleFictionalCharacterBff === "Benedict Cumberbatch") {
//   alert("Eh, close enough! We'll mark that as right!")
// }
// else if (michelleFictionalCharacterBff === 'Mr. Darcy') {
//   alert('Uhhhh no. He\'s way too whiny!')
// }
// else if (michelleFictionalCharacterBff === 'Buffy' || michelleFictionalCharacterBff === 'Batman' || michelleFictionalCharacterBff === 'Superman') {
//   alert('Those are pretty popular characters, but nope! The answer was Sherlock Holmes!')
// } else {
//   alert('Good guess! But the answer was Sherlock Holmes. Sherlock...it\'s pretty close to Scharlock, right?')
// }

//Six tries to guess one of multiple answers
// var ficCharas = ['Sherlock Holmes', 'Catwoman', 'Fluttershy', 'Xena'];
// var flag;
// var michelleFictionalCharacterBff = prompt('What fictional character would Michelle hang out with?');
// console.log('michelleFictionalCharacterBff: ', michelleFictionalCharacterBff);
//
// var guessCounter = 0;
// console.log('guessCounter: ', guessCounter);
//
// while (guessCounter <= 6) {
//   for (var i=0; i < ficCharas.length; i++) {
//     console.log('current guess: ', michelleFictionalCharacterBff);
//
//     if (michelleFictionalCharacterBff === ficCharas[i]) {
//       alert('Yay! You guessed right! All of the possible answers were: ' + ficCharas[i]);
//       flag = true;
//       break;
//     }
//     else if (!flag) {
//       alert('No guess again!');
//       guessCounter++;
//
//     }
//   }
// }

//Guess a number
var numberGuess = function() {
  var myNumber;
  var counter = 0;

  while (myNumber !== 12 && counter < 4) {
    myNumber = parseInt(prompt('What is my favorite number? Take a guess!'));

    if (myNumber >=13){
      alert('Too high!');
      counter++;
      console.log('counter' + counter);
    } else if (myNumber <= 11) {
      alert('Too low!');
      counter++;
      console.log('counter' + counter);
    } else if (myNumber === NaN || myNumber === null) {
      alert ('Enter a number please...');
      counter++;
      console.log('counter' + counter);
    } else if (myNumber === 12) {
      alert('Yay, you win!');
      console.log('counter' + counter);
      // return myNumber;
    } else if (counter >= 4) {
      alert('Sorry, you ran out of tries - my favorite number is 12!');
      return myNumber;
    }
  }
}
numberGuess();
//guessing that stupid fictional chara thing again
// var flag;
// //console log
// var michellesArray = ['Cat', 'Dog'];
// //console log
// var guessCount = 0;
// //console log
// var yourGuess = prompt('What pet');
// //console log
//
// while (guessCount <= 6) {
//   while (yourGuess != michellesArray[i]) {
//     alert('NO');
//     guessCount++;
//     console.log(guessCount);
//
//     if (yourGuess === michellesArray[i]){
//       alert('YAY');
//       guessCount++;
//       console.log(guessCount);
//     }
//   }
// }
