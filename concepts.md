# ✨ Day 4 - Concepts


### Bindings and scopes
Bindings are variables with an assigned value. These binding have metaphorical fences; they cant reach over the fence. These fences are the scopes wherein bindings, declared variables with a value if you will, can be accessed. The variable doen not exist outside its own scope. 

For example: bindings in a function have they fences around the fences. That means another code is not able to call it if its not within the same scope

```js
let someFunction = () => {
  let value = "Can you read me?"
  console.log(value)
  // Can you read me?
}

console.log(value)
// value is not defined
```

Another example: bindings declared in loops/conditions (both are function btw) follow the same principle, they are not accessable outside their scopes

```js
if (1 === 1){
  let value = "equal"
  console.log(value)
  // equal
}

console.log(value)
// value is not defined
```

Bindings declared outside functions are global, these should be places at the top of your file. Glocal variables are accessable anywhere in your code by any function that desires to do so.

```js
let value = "global value" 

function someFunction(){
  console.log(value)
  // global value
}

console.log(value)
// global value
```
### Hoisting
Hoisting is the process of the vm putting the bindings in the memory before execting the rest of the code.

For example; if you declare a function it'll be put in the memory before it can be called in the code. This process is invisable to the user.

```js
catName("Chloe");
// My cat's name is Chloe

function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");
// My cat's name is Tiger
```

So, calling a function that is defined later in the code will work because of hoisting.

#### Sidenote
Only variables that are declared wil be put into a reserved place in the memory. 

```js
console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // declaration
num = 6; // initialization
```


```js
* no declaration has taken place here

console.log(num); // throws ReferenceError exception 
num = 6; // initialization
```
[See more](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

