'use strict';

alert("Welcome to the guessing game quiz!!! Please answer with either yes or no, or y / n");
// kids will hold the user promt while uKids will hold the user promt in uppercase
var kids = prompt('Does Peter have 1 child?');
var uKids = kids.toUpperCase();
console.log('Number of children question:', uKids);

//if else statement that gives the user feed back if they are correct or wrong
if (uKids === 'YES' || uKids === 'Y'){
    alert('Correct!');
}
else{
    alert('Wrong! Peter does have 1 child')
}
// start of user prompt for question 2
var dogs = prompt('Does Peter have 2 dogs?');
var uDogs = dogs.toUpperCase();
console.log('Number of dogs question:', uDogs);

if (uDogs === 'NO' || uDogs === 'N'){
    alert('Correct! He has 3 dogs');
}
else{
    alert('Wrong! He has 3 dogs');
}
//start of user prompt for question 3
var outdoors = prompt('Does Peter enjoy the outdoors?');
var uOutdoors = outdoors.toUpperCase();
console.log('Enjoy Outdoors Question:', uOutdoors);

if (uOutdoors === 'YES' || uOutdoors === 'Y'){
    alert('Correct!');
}
else{
alert('Wrong! Peter does enjoy the outdoors')
}
//start of user prompt for question 4
var family = prompt('Does Peter enjoy spending time with family?');
var uFamily = family.toUpperCase();
console.log('Family Time Question:', uFamily);

if (uFamily === 'YES' || uFamily === 'Y'){
    alert('Correct!');
}
else{
alert('Wrong! He does enjoy spending time with his family')
}
//start of user prompt for question 5
var commute = prompt('Does Peter have a short commute in the mornings?');
var uCommute = commute.toUpperCase();
console.log('Commute Question', uCommute);

if (uCommute === 'NO' || uCommute === 'N'){
    alert('Correct, he does not have a short commute');
}
else{
alert('Wrong! He has a long commute')
}