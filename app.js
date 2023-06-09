// I Variables & Datatypes
// A. Q + A
// 1 How do we assign a value to a variable?
// With the assignment operator.
// 2 How do we change the value of a variable?
// With the assignment operator and adding a new variable to it.
// 3 How do we assign an existing variable to a new variable?
// Initiate the new variable and assign the old variable to it.
// 4 Remind me, what are declare, assign, and define?
// Declare - a keyword (let and const) declares a variable.
// Assign - to set a value to a variable.
// Define - a method used to load modules.
// 5 What is pseudocoding and why should you do it?
// Writing out the process of your code in human readable terms before coding it. It breaks down what you'll be programming into bite-sized chunks making it easier to plan out your code.
// 6 What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// B. Strings

let firstVariable = "Hello World";
firstVariable = 28;
secondVariable = firstVariable;
secondVariable = "Slowly but surely";
console.log(firstVariable);

let yourName = "Lawrence Mitchell";
x = "Hello, my name is " + yourName;
console.log(x);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a + b);
console.log(c + d);
console.log("Name" == "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false == false);
console.log(e == "Kevin");
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The Farm

let Animal = "Cow";

if (Animal == "Cow") {
  console.log("mooooo");
}

// E. Drivers Ed

let age = 36;

if (age >= 16) {
  console.log("Hey here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// II Loops
// A. The Basics

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// B. Get Even

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " is an even number.");
  } else {
    console.log(i);
  }
}

// C. Give Me Five

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`I found a ${i}. High five!`);
    console.log(`I found a ${i}. Three is a crowd.`);
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd.`);
  } else {
    console.log(i);
  }
}

// D. Savings Account

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bank_account = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(bank_account);

let nums = [];

for (let i = 0; i <= 100; i++) {
  nums.push(i);
  const bonus = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(bonus * 2);
}

// III Arrays and Control Flow
// A. Talk About It
// 1. What are the things in an array called? Elements
// 2. Do Arrays guarantee those things will be in order? No
// 3. What real-life thing could you model with an array? A fleet of cars

// B. Easy Does It

let quotes = [
  "Life is like a box of chocolates, you never know what your gonna get",
  "The stock market is a place where the impatient transfer their wealth to the patient",
  "That we may judge a man by the content of his character and not the color of his skin",
];

// C. Accessing Elements

const randomThings = [1, 10, "Hello", true];

x = randomThings[0];
console.log(x);

y = randomThings[2];
console.log(y);

// D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

ourClass[4] = "Octocat";
console.log(ourClass);

ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It UP

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Spawn");

console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.unshift("Bob Marley");
myArray.pop();

myArray.reverse(myArray);
console.log(myArray);

// F. Biggie Smalls

g = 5;

if (g < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. Monkey in the Middle

if (g < 5) {
  console.log("little number");
} else if (g > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in your Closet

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

kristynsCloset.splice(6, 0, "raybans");

kristynsCloset[5] = "stained knit hat";

console.log(kristynsCloset);

h = thomsCloset[0][0];
console.log(h);

i = thomsCloset[1][1];
console.log(i);

f = thomsCloset[2][2];
console.log(f);

console.log(`Thoms is looking fierce in a ${h}, ${i} and ${f}!`);

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// IV Functions
// A. printGreeting

function printGreeting(name) {
  return `Hello there, ${name}!`;
}

console.log(printGreeting("Lawrence"));

// B. printCool

function printCool(name) {
  return `${name} is cool!`;
}

console.log(printCool("Captain Reynolds"));

// C. calculateCube

function calculateCube(x) {
  return x ** 3;
}

console.log(calculateCube(5));

// D. isVowel

function isVowel(x) {
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel("b"));

// E. getTwoLengths

function getTwoLengths(x, y) {
  return [x.length, y.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths

function getMultipleLengths(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i].length);
  }
  return arr;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree

function maxOfThree(num1, num2, num3) {
  let max = Math.max(num1, num2, num3);
  return max;
}

console.log(maxOfThree(5, 8, 11));

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maxOfThree(77, 25, 42));

// H. printLongestWord

function printLongestWord(x) {
  let longest = 0;
  let position = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i].length > longest) {
      longest = x[i].length;
      position = i;
    }
  }
  return x[i];
}
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// V. Objects
// A. Make a User Object

user = {
  name: "Sally",
  email: "sallyride@gmail.com",
  age: 35,
  purchased: [],
};

// B. Update the User

user.email = "salride@gmail.com";
console.log(user);

user.age = age++;
console.log(user);

// C. Adding Keys and Values

user.location = "Manhattan";
console.log(user);

// D. Shopaholic!

user.purchased.push("carbohydrates");
console.log(user);

user.purchased.push("peace of mind");
console.log(user);

user.purchased.push("Merino jodhpurs");
console.log(user);

console.log(user.purchased[2]);

// E. Object within an Object

user.friend = {
  name: "Jennifer",
  age: 32,
  location: "Brooklyn",
  purchased: [],
};

console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;
console.log(user.friend);

user.friend.purchased.push("The One Ring");
console.log(user.friend);

user.friend.purchased.push("A latte");
console.log(user.friend);

console.log(user.friend.purchased[1]);

// F. Loops

let vals = Object.values(user.purchased);

vals.forEach((val) => console.log(val));

let fvals = Object.values(user.friend.purchased);

fvals.forEach((fval) => console.log(fval));

// G. Functions Operating on Object

function updateUser() {
  age = age++;
  name = name.toUppercase();
}
