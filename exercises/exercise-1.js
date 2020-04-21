// https://www.freecodecamp.org/learn

/**
 * Comment your JavaScript code
 */

// in-line comment

/**
 * multi-line comment
 */

/**
 * Declare Javascript variables
 */

var myName;

/**
 * Storing Values with the Assignment Operator
 * Assign the value 7 to variable a.
 * Assign the contents of a to variable b.
 */
var a;
var b = 2;

var a = 7;
var b = a;

/**
 * Initializing Variables with the Assignment Operator
 */

var a = 9;

/**
 * Understanding Uninitialized Variables
 */

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

/**
 * Understanding Case Sensitivity in Variables
 */

// Variable declarations
var studlyCapVar = 10;
var properCamelCase = "A String";
var titleCaseOver = 9000;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/**
 * Add Two Numbers with JavaScript
 */

var sum = 10 + 10;

/**
 * Subtract One Number from Another with JavaScript
 */

var difference = 45 - 33;

/**
 * Multiply Two Numbers with JavaScript
 */

var product = 8 * 10;

/**
 * Divide One Number by Another with JavaScript
 */

var quotient = 66 / 33;

/**
 * Increment a Number with JavaScript
 */

var myVar = 87;

// Only change code below this line
myVar++;

/**
 * Decrement a Number with JavaScript
 */

var myVar = 11;

// Only change code below this line
myVar--;

/**
 * Create Decimal Numbers with JavaScript
 */

var myDecimal = 5.7;

/**
 * Multiply Two Decimals with JavaScript
 * Change the 0.0 so that product will equal 5.0.
 */

var product = 2.0 * 2.5;

/**
 * Divide One Decimal by Another with JavaScript
 */

var quotient = 4.4 / 2.0; // Change this line

/**
 * Finding a Remainder in JavaScript
 * Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
 */

var remainder = 11 % 3;

/**
 * Compound Assignment With Augmented Addition
 * Convert the assignments for a, b, and c to use the += operator.
 */

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

/**
 * Compound Assignment With Augmented Subtraction
 * Convert the assignments for a, b, and c to use the -= operator.
 */

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;


/**
 * Compound Assignment With Augmented Multiplication
 * You should use the *= operator for each variable.
 */

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


/**
 * Compound Assignment With Augmented Division
 * You should use the /= operator for each variable.
 */

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

/**
 * Declare String Variables
 * myFirstName should be a string with at least one character in it.
 */

var myFirstName = "a"
var myLastName = "a"

/**
 * Escaping Literal Quotes in Strings
 */

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/**
 * Quoting Strings with Single Quotes
 */

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/**
 * Escape Sequences in Strings
 */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/**
 * Concatenating Strings with Plus Operator
 */

var myStr = "This is the start. " + "This is the end."; // Only change this line


/**
 * Concatenating Strings with the Plus Equals Operator
 */

var myStr  = "This is the first sentence. "

myStr += "This is the second sentence."

/**
 * Constructing Strings with Variables
 */

var myName = "def"; 
var myStr = "abc" + myName + "ghi"

/**
 * Appending Variables to Strings
 */

var someAdjective= "abc";
var myStr = "Learning to code is ";

myStr += someAdjective


/**
 * Find the Length of a String
 */

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

/**
 * Use Bracket Notation to Find the First Character in a String
 */

firstLetterOfLastName = lastName[0]

/**
 * Understand String Immutability
 */
var myStr = "Jello World";
myStr = "Hello World";

/**
 * Use Bracket Notation to Find the Nth Character in a String
 */

var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2];

/**
 * Use Bracket Notation to Find the Last Character in a String
 */

var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1];

/**
 * Use Bracket Notation to Find the Nth-to-Last Character in a String
 */

lastName[lastName.length - 1];

/**
 * Word Blanks
 */

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;


/**
 * Store Multiple Values in one Variable using JavaScript Arrays
 */

var myArray = ["peanut butter", 4];

/**
 * Nest one Array within Another Array
 */

var myArray = ["aye", ["aye", "lmao"]];

/**
 * Access Array Data with Indexes
 */

var myArray = [50,60,70];
var myData = myArray[0]

/**
 * Modify Array Data With Indexes
 */

var myArray = [18,64,99];
myArray[0] = 45;
myArray[1] = 64;
myArray[3] = 99;

/**
 * Access Multi-Dimensional Arrays With Indexes
 */

var myArray = [
  [1,2,3], [4,5,6], [7,8,9], 
  [[10,11,12], 13, 14]
  ];

// Only change code below this line
var myData = myArray[2][1];

/**
 * Manipulate Arrays With push()
 */

myArray.push(["dog", 3]);

/**
 * Manipulate Arrays With pop()
 * removes last value
 */

var removedFromMyArray = myArray.pop();

/**
 * Manipulate Arrays With shift()
 */

var removedFromMyArray = myArray.shift();

/**
 * Manipulate Arrays With unshift()
 * adds value to the beginning
 */

myArray.unshift(["Paul", 35]);

/**
 * Shopping List
 */

var myList = [
  ["Canned Beans", 3],
  ["Milk Galon", 1],
  ["Cereal", 2],
  ["Toilet Paper", 12],
  ["Sack of Rice", 1]
];

/**
 * Write Reusable JavaScript with Functions
 */

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction()

/**
 * Passing Values to Functions with Arguments
 */

function functionWithArgs(one, two) {
  console.log(one + two);
}

functionWithArgs(1, 2)
functionWithArgs(7, 9)
