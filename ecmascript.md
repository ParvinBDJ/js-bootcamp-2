# ✨ Day 1 - ECMAScript

## Table of Contents
  - [Introduction to JavaScript](#introduction-to-javascript)
  - [The Complete ECMAScript 2015-2019 Guide](#the-complete-ecmascript-2015-2019-guide)
  - [You Don't Know JS Yet](#You Don't Know JS Yet)
  - [Conventions](#Conventions)
  
### Introduction to JavaScript

Before the age of programming languages programs there we 0's and 1's. In 1995 Javascript was introduced as a way to add programs to webpages. It allows users to interact with webpages without reloading a website for each interaction. 

The Javascript language follows the ECMAScript standardization. Using standardization helps us to prevent compatibility issues and improvement of the language (and browsers).

[source](https://eloquentjavascript.net/00_intro.html)

---

### The Complete ECMAScript 2015-2019 Guide
>ECMAScript is the standard upon which JavaScript is based, and it's often abbreviated to ES. Discover everything about ECMAScript and its latest features

>ECMAScript is the standard upon which Javascript is based. Its often abbreviated to ES. Beside JS, other languages implement ECMAScript, including:
>* Actionscript (Flash scripting language), which is losing popularity since Flash will be officially discontinued in 2020.
>* JScript (Microsoft scripting dialect), since at the time JS was only supported by Netscape and the browser wars were at their peak, Microsoft had to build its own version for Internet Explorer.
>
>Ecma International is a Swiss standards accosiation who's in charge of defining international standards. Currently using ES6 introduced in 2015.

>| Edition | Official name | Date published |
>| ------- | ------------- | -------------- |
>| ES10    | ES2019        | Summer 2019    |
>| ES9     | ES2018        | June 2018      |
>| ES8     | ES2017        | June 2017      |
>| ES7     | ES2016        | June 2016      |
>| ES6     | ES2015        | June 2015      |
>| ES5.1   | ES5.1         | June 2011      |
>| ES5     | ES5           | December 2009  |

[source](https://flaviocopes.com/ecmascript/)

### You Don't Know JS Yet

#### What's With That Name?
When Brendan Eich first conceived of the language, he code-named it Mocha. Because this language was originally designed to appeal to an audience of mostly Java programmers, and because the word «script» was popular at the time to refer to lightweight programs. In other words, JavaScript was a marketing ploy to try to position this language as a palatable alternative to writing the heavier and more well-known Java of the day.

#### Language Specification

>Back in the early 2000s, when Microsoft maintained a forked and reverse-engineered (and not entirely compatible) version of JS called "JScript," there were legitimately "multiple versions" of JS. But those days are long gone. It's outdated and inaccurate to make such claims about JS today.
>
>All major browsers and device makers have committed to keeping their JS implementations compliant with this one central specification. Of course, engines implement features at different times. But it should never be the case that the v8 engine (Chrome's JS engine) implements a specified feature differently or incompatibly as compared to the SpiderMonkey engine (Mozilla's JS engine).
>
>That means you can learn one JS, and rely on that same JS everywhere.

### ES6 - var, let and const

#### Var features
* Can be reassigned a new value 
* Can be used globally, in/outside a loop or function


### Let features
* Cannot be used in a global scope
* Is limited to a function or block scope
* Can be reassigned a new value (no need to call let at the second run)
  
### Const features
* The same as let but cannot be reassigned
---
### Conventions

#### Lines
Do: 
```js
function myFunc() {
  console.log('Hello!');
};
```

Don't:
```js
function myFunc() { console.log('Hello!'); };
```
One-liners are cool if you're a joke and your code is the punchline.

#### Spaces
Do: 
```js
if(dayOfWeek === 7 && weather === 'sunny') {
};
```

Don't:
```js
if(dayOfWeek===7&&weather==='sunny'){
```
Add spaces between each the characters and words.

#### Naming
Do: 
```js
const dayOfWeek = "Monday"
};
```

Don't:
```js
const dayofweek = "Monday"
```
Use lowerCamelCasing in the variable names to keep your code readable.


#### Declaring variables
Do: 
```js
// my name wont change thus is a constant variable
const myName = 'Chris';
// you age therefore it makes sense to use let
let myAge = '40';
};
```

Don't:
```js
// you age therefore it doesnt make sense to use constant.
const myAge = 40;
```


#### Strict equality
Do: 
```js
name === 'Chris';
age !== 25;
```

Don't:
```js
name == 'Chris';
age != 25;
```

When expecting a data-type use `strict` to make sure its type is correct.


[source](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript#General_JavaScript_guidelines)