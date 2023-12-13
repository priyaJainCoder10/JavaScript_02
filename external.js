console.log("Intro to Java Script -02")

// Array 

let priya=[];  // Empty array 
console.log(priya);

// Accessing Array Elements 
let fruits=["kiwi","Apple","Orange","Banana"];
console.log(fruits[1]);

// Modifying Array Elemets; 
fruits[3]="Grapes";
fruits[2]=["basketball","hockey"];
console.log(fruits)

// Array Length
console.log(fruits.length);

// You can decide the length of fruits and console it accordingly 
// ["kiwi","Apple"] --> output 
fruits.length=2; // we are dynamically resizing an array by assigning a new length value
console.log(fruits);

// Array Method & Operations- 
// 1 Push
// It add an element at the ebd and modifying the original array only 
fruits.push("orange");
console.log(fruits);

//  2. POP
// Remove the end element of the array
let fruits1=["Grapes","Apple","Pear","Orange","Mango"]
console.log(fruits1);
fruits1.pop();
console.log(fruits1);
fruits1.pop();
console.log(fruits1);

// 3. Shift()
// remove the element in the starting 
let names=["Aman","Priya","John","Rita","Akash","Aishwariya","Gujju"];
names.shift();
console.log(names);

// 4. Unshift() 
// Adding the element in the starting 
names.unshift("Ayush");
console.log(names);

// 5. Concatenation (concate)
// we are join two strings 
let array=[1,2,3]
let newarray=[4,5,6];
console.log(array.concat(newarray));

// 6. Slice()
// Slice method extracts a portion of an array into a new array 
// without modifying the original array     
let numbers=[1,2,3,4,5];
let newnumbers=numbers.slice(1,2);
let newnumbers2=numbers.slice(1,4);
console.log(newnumbers);
console.log(newnumbers2);
// output : 2
// first parameters being is the index to be included but the second parameter is the 
// index before which the extraction should stop

// Splice() - homework 

// Functions in Java Script 
