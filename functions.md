# ✨ Day 2 - Functions

Calling a function: 
```
myFunction(param)
```

Defining a function: 
```js 
function myFunction(params) {
  // some code
}
```

```js
function myFunction(p1, p2) {
  return 'got '+ p1 + ' & ' + p2
}

var myVar = myFunction('aaaa', 'bbbb')

console.log(myVar) // got aaaa & bbbb
```

```js
* ES6 + arrow function

const someFunction = (p1, p2) => {
  return 'got '+ p1 + ' & ' + p2
}

var myVar = someFunction('aaaa', 'bbbb')

console.log(myVar) // got aaaa & bbbb
```

```js
* ternary
const someFunction = (p1, p2) => {
  return p1 == p2 ? true : false
}

let a = 2;
let b = 10;

var myVar = someFunction(a, b) ? "gelijk!" : "niet gelijk"

console.log(myVar) // niet gelijk
```

3rd party libraries allow users to call their functions or make use of their preset function to execute actions.

* What are functions?
Functions are a way to organize your code. Each function is a module that does it's own task whenever its called.

* Why would you want to make your own functions?
 1. mudulairity \
Functions can help the user to devide a code's purpose over multiple generic functions. These are similar to features that can be added or removed.
 2. reusability  
Generic/dynamic functions can reduce the amount of code by a lot. The function can repeat the processes with the arguments that are passed to it as parameters. 
---
## Higher Order Function

**Hoisting**
>When JavaScript compiles all of your code, all variable declarations using var are lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”. (Sandhu, 2018)

**Higher Order Function**
>A higher order function is a function that kinda has two levels of functions to it.

HOF can be functions that depend on parameters from functions above them or functions that generates and returns functions.

**Higher Order Array functions**
Arrays: 
* map()
* sort()
* reduce()
* filter()

**HOF example**
```js
function firstFunction(callback){
  console.log('first')
  // only call if paramater is passed
  if (callback){
    callback();
  }
}

function secondFunction(){
  console.log('callback')
}

firstFunction(secondFunction)
```


```js
function multiplier(factor){
  return x => x * factor

  /* is actually
  return function(x) {
    return x * factor
  }
   */
}

let doubler = multiplier(2)
/**
doubler is now:

function(x){ 
  return x * factor
}
*/

console.log(doubler(2)) // 4

```