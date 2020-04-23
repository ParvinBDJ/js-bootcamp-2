# ✨ Day 3 - Data Structures


### What are datasets?
Datasets are sets of structured digital data. One way to store data are as strings or intigers but that would not be practical when you're dealing with a lot of data. In javascript you use array's or object. Instead of entering each piece of data in a seperate (or the same) variable, each piece gets it's dedicted spot. The use of arrays allows us to easily collect, structure and process data.

#### Arrays
Arrays can hold all supported data types in javascript and has (along a list of methods) a property `length` which returns the amount of the entries. 

```js
let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
console.log(listOfNumbers.length);
// → 5
```

Properties of variables return properties of the data type. Variables can also have methods; these methods can modify the data of their variable.

Arrays for example has the method `.push()` and `.pop()` which can add and remove entries to an array.

Strings on the other hand have methods such as `.toUpperCase()` which transforms the string to uppercase.

#### Objects
`Objects` are very similar to arrays, it can store all kinds of data, even arrays. In objects data is stored as `key:value` so that means each key will have a value. Objects are usefull to fill dynamically.

```js
let objectSet = {
  name: "Shabier",
  key: "value",
  array: ["red", "green", "blue"] 
}

console.log(objectSet.key)
// → value

console.log(objectSet.array[1])
// → green

console.log("name" in objectSet)
// → true

console.log(Object.keys(objectSet))
// → ["name", "key", "array"]
```
##### Context
It is possible to refer to a value inside the array by calling its key (or by prefixing it with `this.`).

**sidenote: null vs undefined**
>| null | undefined 
>| ------- | ------------- 
>| variable isn't defined yer    | variable is defined but isn't assigned a value at the time of being called       


