// equality with numbers
let x = '11';

if (x > 10) {
    console.log('x is greater than 10');
} else if (x < 10) {
    console.log('x is less than 10');
} else {
    console.log('x is equal to 10');
}

// check value and data type
const myVar = 25;

if (typeof myVar === 'number' && myVar > 10) {
    console.log('myVar is a number and greater than 10');
} else {
    console.log('myVar is not a number or is not greater than 10');
}

// check for equality with strings
let day = 'Monday';

if (day === 'Saturday' || day === 'Sunday') {
    console.log('Hooray for the weekend');
} else {
    console.log('Go to work!');
}

// else/if statements
let budget = 51;

if (budget > 50) {
    console.log('take a taxi')
} else if (budget > 30 && budget <= 50) {
    console.log('take the bus')
} else if (budget > 10 && budget <= 30) {
    console.log('take the train')
} else {
    console.log('walk')
}

// switch case statement
const environment = "production";
switch (environment) {
    case "production":
        console.log("Production environment");
        break;

    case "staging":
        console.log("staging environment");
        break;

    default:
    case "development":
        console.log("Default development environment");
        break;
}

// while loop
let whileCount = 0;
while (whileCount < 10) {
    whileCount++;
    console.log("while count", whileCount);
}

// do while loop
let doWhileCount = 0;

do {
    console.log("do while count", doWhileCount);
    doWhileCount++;
} while (doWhileCount < 10);

// for loop
for (let i = 0; i <= whileCount; i++) {
    // some code here
    console.log("for count", i);
}

// height of a tree
const treeHeight = 7;

// loop to draw the tree
for (let i = 1; i <= treeHeight; i++) {
    // create spaces for indentation
    const spaces = " ".repeat(treeHeight - i);

    // create asterisks for the tree branches
    let stars = "*".repeat(2 * i - 1);

    // combine spaces and stars for each row
    const treeRow = spaces + stars;

    // log the tree row to the console
    console.log(treeRow);
}

// draw the tree trunk
const trunkWidth = 2;
const trunkHeight = 4;

for (let i = 0; i < trunkHeight; i++) {
    const spaces = " ".repeat(treeHeight - trunkWidth / 2);
    const trunk = "#".repeat(trunkWidth);
    console.log(spaces + trunk);
}

// generate random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempt = 0;
let isGameOver = false;

do {
    guess = prompt("Guess a number between 1 and 100");

    if (isNaN(guess)) {
        // code here
        alert("Please enter a valid number");
    } else {
        // code here
        attempt++;

        if (guess < targetNumber) {
            alert("TOO LOW! Try again.")
        } else if (guess > targetNumber) {
            alert("TOO HIGH! Try again.")
        } else {
            isGameOver = true;
            alert("CORRECT! You guessed the number in " + attempt + " attempts.")
        }
    }
} while (!isGameOver);
