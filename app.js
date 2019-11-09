'use strict';
var counter = 0;
var username;
function welcome() {

    // initial prompt to welcome the user and get their name
    username = prompt('Welcome to the guessing game quiz!!! What is your name?');
    // a message to the user welcoming them by name and displaying game rules


    //if user doesn't provide name the alert will just not input the name instead of saying NULL
    if (username) {
        alert(' Welcome ' + username + ' Please answer each question with either yes or no, or y / n');
    }
    else {
        alert('Please answer each question with either yes or no, or y / n');
    }
}

function question1() {


    // kids will hold the user promt while uKids will hold the user promt in uppercase
    var kids = prompt('Does Peter have 1 child?');
    var uKids = kids.toUpperCase();
    console.log('Number of children question:', uKids);

    //if else statement that gives the user feed back if they are correct or wrong
    if (uKids === 'YES' || uKids === 'Y') {
        alert('Correct!');
    }
    else {
        alert('Wrong! Peter does have 1 child')
        counter++;
    }
}

// start of user prompt for question 2
function question2() {
    var dogs = prompt('Does Peter have 2 dogs?');
    var uDogs = dogs.toUpperCase();
    console.log('Number of dogs question:', uDogs);

    if (uDogs === 'NO' || uDogs === 'N') {
        alert('Correct! He has 3 dogs');
    }
    else {
        alert('Wrong! He has 3 dogs');
        counter++;
    }
}

//start of user prompt for question 3
function question3() {
    var outdoors = prompt('Does Peter enjoy the outdoors?');
    var uOutdoors = outdoors.toUpperCase();
    console.log('Enjoy Outdoors Question:', uOutdoors);

    if (uOutdoors === 'YES' || uOutdoors === 'Y') {
        alert('Correct!');
    }
    else {
        alert('Wrong! Peter does enjoy the outdoors');
        counter++;
    }
}

//start of user prompt for question 4
function question4() {
    var family = prompt('Does Peter enjoy spending time with family?');
    var uFamily = family.toUpperCase();
    console.log('Family Time Question:', uFamily);

    if (uFamily === 'YES' || uFamily === 'Y') {
        alert('Correct!');
    }
    else {
        alert('Wrong! He does enjoy spending time with his family');
        counter++;
    }
}

//start of user prompt for question 5
function question5() {
    var commute = prompt('Does Peter have a short commute in the mornings?');
    var uCommute = commute.toUpperCase();
    console.log('Commute Question', uCommute);

    if (uCommute === 'NO' || uCommute === 'N') {
        alert('Correct, he does not have a short commute');
    }
    else {
        alert('Wrong! He has a long commute');
        counter++;
    }
}

//start of question 6
function question6() {
    var number;
    //counter will count misses specifically for the while loop
    var counter2 = 1;
    while (number !== 5) {

        //parse int turns word form of a number to a number
        number = parseInt(prompt('what is peters favorite number?'));
        console.log('Number Guess: ' + number);
        // this alerts the user if they did not enter a number
        if (isNaN(number)) {
            alert('not a number please enter a number');
        }
        // if the number is low user message
        if (number < 5) {
            alert('you guessed too low');
            counter2++;
        }
        //if the number is high user message
        else if (number > 5) {
            alert('you guessed too high');
            counter2++;
        }
        //if user guesses wrong 4 times break the while loop
        if (counter2 === 4) {
            break;
        }

    }
    // will tell user if they failed or passed question based on 4 guess limit
    if (counter2 === 4) {
        alert('you failed the number game, the answer ws 5!');
        counter++;
    }
    else {
        alert('You guessed correctly the answer is 5!');
    }
}

//start of 7th question
// array holding favorite sports
function question7() {
    var arr = ['soccer', 'football', 'cycling', 'weightlifting', 'hiking'];
    var test = false;
    var counter3 = 0;
    //counter3 will count attempts 6 misses possible 
    while (counter3 != 6) {

        var sports = prompt('what is one of peters favorite sports? You only get 6 Guesses').toLocaleLowerCase();
        console.log('sports Question: ' + sports);
        //forloop that will test users input to the sports in the array
        for (var i = 0; i < arr.length; i++) {

            if (sports === arr[i]) {
                alert('Correct!!! ' + sports + ' is a favorite sport of his.');
                //test is a boolean value used as a break case when a correct answer is said it will change to true
                test = true;
                break;
            }

        }
        //if win requirements made then break if not count and tell them how many misses
        if (test === true) {
            break;
        }
        else {
            counter3++;
            alert('Wrong! ' + counter3 + ' Guesses out of 6!');
        }
    }
    // if user misses 6 they will be booted from while loop and this will alert result and count overall misses
    if (counter3 === 6) {
        alert('You failed this question.');
        counter++;
    }
}

//final message thanking person by name for playing and give total missed based on counter

function question8() {
    if (username) {
        alert(' Thanks for playing ' + username + '! Out of 7 question you missed ' + counter + '! ' + (7 - counter) + ' correct answers, not bad!');
    }
    else {
        alert(' Thanks for playing! Out of 7 question you missed ' + counter + '! ' + (7 - counter) + ' correct answers, not bad!');

    }
}

welcome();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
question8();