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


| Property | Description 
| ------- | ------------- 
| length    | returns number of elements in the array

| Method | Description 
| ------- | ------------- 
| pop()    | `removes last element` from the array
| push(ekement) | `adds element` to the end of an array
| reverse() | `reverses` the order of an array
| shift() | `removes` the first element of an array
| sort() | [sorts array by converting elements to utf-16 first and  then comparing them](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
| concat(value or array) | `joins parameters to the current array`, then returns it as new array
| includes("match") | `searches for argument` in array, then returns true or false
| join() | `returns all elements as one strings`
| slice([n, n]) | `extracts n to n` as new array
| toString() | returns array as string 

```js
* array mapping
let listOfNumbers = [11, 2, 3, 5, 7];

console.log(
  listOfNumbers.map(index => {console.log(index)})
)

// → 11
// → 2
// → 3
// → 5
// → 7

```


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

| Method | Description 
| ------- | ------------- 
| Object.assign(`sourceArray`, `targetArray`)    | pastes target to source as new object
| Object.Create(`object`) | turns variable to new object using data from the old object  
| Object.defineProperties(`object`, `key`: {`value`: 11}) | adds new key:value pair
| Object.entries(`object`) | returns all key:value pairs as arrays
| Object.freeze(`object`) | makes object read-only
| Object. is(`val1`, `val2`) | compares values, returns boolean
| Object.isFrozen(`object`) | returns boolean
| Object.keys(`object`) | returns all keys as object
| Object.value(`object`) | returns all values as object


**sidenote: null vs undefined**
>| null | undefined 
>| ------- | ------------- 
>| variable isn't defined yer    | variable is defined but isn't assigned a value at the time of being called       


