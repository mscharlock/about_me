'use strict';

var user = prompt('Welcome to Michelle\'s Website! What is your name?');
console.log('user: ',user);

alert('Nice to meet you, ' + user +'. To get to know me better, let\'s play a game. I\'ll ask you five questions about me.');

var michelleBorn = prompt('Was I born in the USA? Answer with y/n, please.').toLowerCase();
console.log('michelleBorn: ',michelleBorn);

if (michelleBorn === 'yes' || michelleBorn === 'y') {
  alert('Good guess, but no! I was actually born in Germany!');
} else if (michelleBorn === 'no' || michelleBorn === 'n') {
  alert('Correct! I was not born in the US. I was actually born in Heidelberg, Germany.');
} else {
  alert('I didn\'t understand your answer but I\'ll just tell you: I was born in Germany!');
}

var michelleCollege = prompt('Did Michelle go to Montreal, to McGill University, for her undergraduate degree?').toLowerCase();
console.log('michelleCollege: ', michelleCollege);

if (michelleCollege === 'yes' || michelleCollege === 'y') {
  alert('Oui oui!');
} else {
  alert('I didn\'t quite catch that! But the correct answer was yes!');
}

var michelleLikesCoding = prompt('Do you think Michelle enjoys coding?').toLowerCase();
console.log('michelleLikesCoding: ', michelleLikesCoding);

if (michelleLikesCoding === 'y' || michelleLikesCoding === 'yes') {
  alert('Right!!');
}
else {
  alert('That was an easy one! Of course she likes coding!');
}

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

var michelleImmortality = prompt('If Michelle could choose to be immortal, would she do it?').toUpperCase();
console.log('michelleImmortality: ' , michelleImmortality);

if (michelleImmortality === 'YES' || michelleImmortality === 'Y') {
  alert('I\'d rather not be forever yearning for the past, so no, I wouldn\'t want to live forever.');
} else if (michelleImmortality === 'NO' || michelleImmortality === 'N') {
  alert('Right. Just like how that song "that goes on and on my friends" gets annoying in about five seconds, living forever sounds like it could get tiresome after a while.');
} else {
  alert('You didn\'t answer yes or no! Pffffttttt!');
}

var michelleFictionalCharacterBff = prompt('Time for one last question! If Michelle could be best friends with any fictional character, who would she choose to befriend?');
console.log('michelleFictionalCharacterBff: ', michelleFictionalCharacterBff);

if (michelleFictionalCharacterBff === "Sherlock Holmes" || michelleFictionalCharacterBff === "Sherlock") {
  alert('Bingo, super sleuth! The game is afoot!')
}
else if (michelleFictionalCharacterBff === "Benedict Cumberbatch") {
  alert("Eh, close enough! We'll mark that as right!")
}
else if (michelleFictionalCharacterBff === 'Mr. Darcy') {
  alert('Uhhhh no. He\'s way too whiny!')
}
else if (michelleFictionalCharacterBff === 'Buffy' || michelleFictionalCharacterBff === 'Batman' || michelleFictionalCharacterBff === 'Superman') {
  alert('Those are pretty popular characters, but nope! The answer was Sherlock Holmes!')
} else {
  alert('Good guess! But the answer was Sherlock Holmes. Sherlock...it\'s pretty close to Scharlock, right?')
}

//Guess a number
var myNumber;
var counter = 0;

while (myNumber !== 12) {
  myNumber = parseInt(prompt('What is my favorite number? Take a guess!'));

  if (myNumber > 50){
    alert('Too high!');
    counter++;
  } else if (myNumber < 3) {
    alert('Too low!');
    counter++;
  } else if (myNumber < 8 && myNumber > 20) {
    alert ('You\'re getting closer...');
    counter++;
  } else if (myNumber === 12) {
    alert('Yay, you win!')
  }

  if (counter === 4) {
    alert('Sorry, you ran out of tries - my favorite number is 12!')
    break;
  }
};

console.log('counter: ', counter);









//Alternative question
// var michelleVacation = prompt('Ok, one last question. Where did Michelle go on vacation last?');
// console.log('michelleVacation: ', michelleVacation);

// if (michelleVacation === "Disneyworld") {
//   console.log('Correct! My first trip to Disneyworld was a blast!')
// }
// else {
//   console.log('Nope! You\'ll have to ask me in person to find out!');
// }
// }
