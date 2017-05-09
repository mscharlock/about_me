'use strict';

var user = prompt('Welcome to Michelle\'s Website! What is your name?');
console.log('user: ',user);

alert('Nice to meet you, ' + user +'. To get to know me better, let\'s play a game. I\'ll ask you five questions about me.');

var michelleBorn = prompt('Was I born in the USA? Answer with Y/N, please.');
console.log('michelleBorn: ',michelleBorn);

if (michelleBorn === 'yes' || michelleBorn === 'y') {
  console.log('Good guess, but no! I was actually born in Germany!');
} else if (michelleBorn === 'no' || michelleBorn === 'n') {
  console.log('Correct! I was not born in the US. I was actually born in Heidelberg, Germany.');
} else {
  console.log('I didn\'t understand your answer but I\'ll just tell you: I was born in Germany!');
}
}

var michelleCollege = prompt('Did Michelle go to Montreal, to McGill University, for her undergraduate degree?');
console.log('michelleCollege: ', michelleCollege);

if (michelleCollege === 'McGill' || michelleCollege === 'McGill University') {
  console.log('Right! She studied opera over in Montreal!');
}else if (michelleCollege === 'yes' || michelleCollege === 'Y') {
  console.log('Oui oui!')
}
} else {
  console.log('I didn\'t catch that! But the correct answer was yes!');
}
}

var michelleLikesCoding = prompt('Do you think Michelle enjoys coding?');
console.log('michelleLikesCoding: ', michelleLikesCoding);

if (michelleLikesCoding === 'Y' || michelleLikesCoding === 'yes') {
  console.log('Right!!')
}
else {
  console.log('That was an easy one! Of course she likes coding!');
}
}

var michelleFictionalCharacterBff = prompt('Time to have a little more fun with these questions! If Michelle could be best friends with any fictional character, who would she choose to befriend?');
console.log('michelleFictionalCharacterBff: ', michelleFictionalCharacterBff);

if (michelleFictionalCharacterBff === "Sherlock Holmes" || michelleFictionalCharacterBff === "Sherlock") {
  console.log('Bingo, super sleuth! The game is afoot!')
}
else if (michelleFictionalCharacterBff === "Benedict Cumberbatch") {
  console.log("Eh, close enough! We'll mark that as right!")
}
else if (michelleFictionalCharacterBff === 'Mr. Darcy') {
  console.log('Uhhhh no. He\'s way too whiny!')
}
else if (michelleFictionalCharacterBff === 'Buffy' || michelleFictionalCharacterBff === 'Batman' || michelleFictionalCharacterBff === 'Superman') {
  console.log('Those are pretty popular characters, but nope! The answer was Sherlock Holmes!')
} else {
  console.log('Good guess! But the answer was Sherlock Holmes. Sherlock...it\'s pretty close to Scharlock, right?')
}
}

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
