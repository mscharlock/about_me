'use strict';
var michelleFictionalCharacterBff = prompt('Time for one last question! If Michelle could be best friends with any fictional character, who would she choose to befriend?');

console.log('michelleFictionalCharacterBff: ', michelleFictionalCharacterBff);
var bffAnswerCounter = 1;

console.log('bffAnswerCounter: ', bffAnswerCounter);

//I need a way to get bffAnswerCounter activated when michelleFictionalCharacterBff is answered
while (bffAnswerCounter < 6) {
  if (michelleFictionalCharacterBff === "Sherlock Holmes" || michelleFictionalCharacterBff === "Sherlock") {
    alert('Bingo, super sleuth! The game is afoot!');
    bffAnswerCounter++;
  } else if (michelleFictionalCharacterBff === "Benedict Cumberbatch") {
  alert("Eh, close enough! We'll mark that as right!");
  bffAnswerCounter++;
  } else if (michelleFictionalCharacterBff === 'Mr. Darcy') {
  alert('Uhhhh no. He\'s way too whiny!');
  bffAnswerCounter++;
  } else if (michelleFictionalCharacterBff === 'Buffy' || michelleFictionalCharacterBff === 'Batman' || michelleFictionalCharacterBff === 'Superman') {
  alert('Those are pretty popular characters, but nope! The answer was Sherlock Holmes!');
  bffAnswerCounter++;
  } else {
    bffAnswerCounter++;
  }

  if (bffAnswerCounter === 6) {
  alert ('You ran out of guesses! The acceptable answer was Sherlock Holmes');
  break;
  }
}
