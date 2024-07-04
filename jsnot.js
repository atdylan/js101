/*Changing HTML content method : getElementById()
document.getElementById("demo").innerHTML = "Hello JavaScript";

#Changing HTML image
<button onclick="document.getElementById('imageid').src='newimagefilename'">button name</button>

#Changing HTML Style : document.getElementById("demo").style.color = "green";

#Hiding HTML element : document.getElementById("demo").style.display = "none";

#Showing hidden HTMl elements : document.getElementById("demo").style.display = "block"; *Html hiding method : style="display:none"

#Javascript code inserted between script tag
<script>
document.getElementById("demo").innerHTML = "My first Javascript";
</script>

#Java script code in an external file

External file(myScript.js) :
function myFunction() {
 document.getElementById .innerHTML = "Paragraph changed.";
}

HTML :
<script src="myScript.js"></script>

Advantages :
-It seperates HTML and code
-Makes HTML and JavaScript easier to read and maintain
-Cached JavaScript files can speed up page loads

!Search about purposes of document.write method!

#For a alert notification on a website you can use window.alert(window object is a global scope object) :
<script>
window.alert(2+3);
</script>

#Console.log() used for debugging

#JavaScript does not have any print object or methods except you can print(actual printing) the site with window.print() method:
<button onclick="window.print()">
Print
</button>

#JavaScript statements
<script>
let x, y, z; // Statement 1
x = 4; // Statement 2
y = 3; // Statement 3
z = x + y // Statement 4

document.getElementedById("demo").innerHTML = "The value of z is " + z +".";
</script>
#Hpyhens(-) are not allowed in JavaScript. They are reserved for subtractions

!look for unicode reference!

#Declare variables before use

#The var keyword should only be used in code written for older browsers

#You cannot redeclare a variable that declared with let or const

#Variables declared with let must be declared before use

#For let and const you can use blocks{} and variables declared in block scope can not be used in outside of block scope. You can redeclare a variable in another block scope :
let x=4;
{
let x;
x=6;
}

#You can redeclare variables with var keyword but this usage can impose problems

#Variables declared with const should be assigned when declared :
const x; x = 4; *incorrect
const x = 4; *correct

#Use const when declare a new : 
-Array
-Object
-Function
-RegExp

#Keyword const defines a constant reference to a value. Because of that you can't :
-Reassign a constant value
-Reassign a constant array
-Reassign a constant object
 But you can change elements of a constant array and change properties of a constant object.
 
!Look for Javascript Hoisting!

#Comparison operator === means equal value and equal type.

#!== : not equal value and not equal type

#Strings are compared alphabetically

#Operator instanceof Returns true if an object is an instance of an object type

!Search for usage of bitwise!

#Extra large or extra small numbers can be written with scientific notation : 
let y = 123e5; // 12300000
let z = 123e-5; // 0.00123

#JavaScript BigInt is a new data type that can be used to store integer values that are big to be represented by a normal JavaScript number :
let x = BigInt("264764025239852085847985734534573");

#In JavaScript, a variable without a value has the value undefined. The type is also undefined

#JavaScript Object : 
const hero = {name:"Vyro", HP=2591, Mana = 470, AP = "135", AD = "0"}

#JavaScript object methods are functions definitions stored as property values : 
const person = {
 firstName: "John",
 lastName : "Doe",
 id       : 5566,
 fullName : function() {
  return this.firstName + " " + this.lastName;
 }
};

#Object properties defined/accessed as object.propertyname/object["propertyname"],Object methods defined/accessed as object.methodname()

#All JavaScript Values except primitive values are object
Primitive Values=
-string
-number
-boolean
-null
-undefined
-symbol
-bigint

#JavaScript Objects are Mutable so that means they are adressed by a reference not value :
const x = person;

Object x and object person is not copy of each other.

Object x and person share the same memory address so that means any changes to x will also change the person object.

#An Object is an Unordered Collection of Properties.

#The delete keyword deletes a property from an object : 
comst person = {
 firstName: "John",
 lastName: "Doe",
 age: 50,
 eyeColor: "blue"
};

delete person.age;

#Property values in an object can be other objects that is called "Nested Objects" :
myObj = {
 name: "John",
 age: 30,
 myCars: {
  car1: "Ford",
  car2: "BMW",
  car3: "Fiat"
 }
};

#You can access the nested objects using dot notation or bracket notation :
myObj.myCars.car2;

myObj.myCars["car2"];

myObj["myCars"]["car2"];

let p1 = "myCars", p2 = "car2";
myObj[p1][p2];

#Object.values creates an array from the property values
const myArray = Object.values(person);

#Object.entries() makes it simple to use objects in loops
let text = "";
for(let [property, value] of Object.entries(person)) {
 text += property + ":" + value + "<br>";
}

#JSON.stringify can convert objects to a string. It will be written in JSON Notation :
let a=JSON.stringify(person);

document.getElementById("demo").innerHTML = a;

#Object constructor function example :
function Hero(name, mana, hp, damage) { 
  this.heroName = name;
  this.manaAmount = mana;
  this.hpAmount = hp;
  this.damageType = damage
}
const Vyro = new Hero("Vyro", 470, 2591, "AP")

#A value given to a property will be a default value for all objects created by the constructor

#In the next example, the code changes the content of its own element (using this.innerHTML)
 <button onclick="this.innerHTML = Date()">The time is?</button>

#Common HTML events:
-onchange 	An HTML element has been changed
-onclick 	The user clicks an HTML element
-onmouseover 	The user moves the mouse over an HTML element
-onmouseout 	The user moves the mouse away from an HTML element
-onkeydown 	The user pushes a keyboard key
-onload 	The browser has finished loading the page

#The new keyword complicates the code and slows down execution speed.

#Comparing JS Objects always returns false.

#String letter extracting methods :
-at(position)
-charAt(position) *Does not count negative indexes.
-charCodeAt(position)

#String parts extracting methods : 
-slice(start, end)
-substring(start, end) *Computes negative indexes as 0 index.
-substr(start, length) *length parameter is the length of the extracted part.

#Converting upper and lowwr case :
-toUpperCase() 
-toLowercase()

let text1 = "Hello World!";
let text2 = text.toUpperCase();

#trim() method removes white space from both sides of a string :
text1.trim();

#padStart() and padEnd() pads a string :
let padded = text1.padStart(20, "H");
padded is equal to HHHHHHHHHello World!

#repeat() method creates copy of a string :
let result = text1.repeat(3);
result is 3 multiples of text1

#split() method allows convert a string to an array : 
let text1.split("");

#indexOf() method gives the first occurance index of the written inside the paranthesis :
let index = text.indexOf("World");
index is equal to 6
You can add second parameter for index of search to start.
like text.indexOf("Hello", 22)

#The match() method returns an array containing the results of matching a string against a string (or a regular expression).

#Type of the BigInt is BigInt. 

#Arithmetic between BigInt and Number is not allowed. BigInt can not have decimals.

#Arrayname.forEach used for substracting array elements.

#Adding array elements : Arrayname.push(element)

#For arrays join() behaves like toString() but also seperator can be specified by join().

#pop() method returns the value that was popped out.

#pop() removes last, shift() removes first element.

#splice() method add new items to an array. toSpliced() is almost same with splice() but creates a new array.

#sort() method sorts an array alphabetically. toSorted() method creates a new array as alphabetically sorted.

#reverse() method sorts an array reversed. toReversed() method creates a new array reversed.

!!Study fisher yates method!!

#The map() method creates a new array by performing a function on each array element.

#The filter() method creates a new array with array elements that pass a test.

#The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

#The Array.from() method returns an Array object from any object with a length property or any iterable object.

#The Array.keys() method returns an Array Iterator object with the keys of an array.

#The entries() method returns an Array Iterator object with key/value pairs.

#ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

#The ... operator expands an iterable (like an array) into more elements: 

#Date Set Method 	Description
getFullYear() 	Get year as a four digit number (yyyy)
getMonth() 	Get month as a number (0-11)
getDate() 	Get day as a number (1-31)
getDay() 	Get weekday as a number (0-6)
getHours() 	Get hour (0-23)
getMinutes() 	Get minute (0-59)
getSeconds() 	Get second (0-59)
getMilliseconds() 	Get millisecond (0-999)
getTime() 	Get time (milliseconds since January 1, 1970)

#Date.now() returns the number of milliseconds since January 1, 1970.
Date.now() is a static method of the Date object.

You cannot use it on a date object like myDate.now().

The syntax is always Date.now()

#The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

#Date Set Method 	Description
setDate() 	Set the day as a number (1-31)
setFullYear() 	Set the year (optionally month and day)
setHours() 	Set the hour (0-23)
setMilliseconds() 	Set the milliseconds (0-999)
setMinutes() 	Set the minutes (0-59)
setMonth() 	Set the month (0-11)
setSeconds() 	Set the seconds (0-59)
setTime() 	Set the time (milliseconds since January 1, 1970

#The ?? operator returns the first argument if it is not nullish (null or undefined).

#The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

#Conditional statements should be lowercase.

#if usage :
if (condition) {
//Block of codes will execute in case that condition is true 
}

#else statement will be in another block scope :
if (condition) {
//Block of codes will execute in case that condition is true 
} else {
//Block of codes will execute in case that all other conditions are false
}

else if :
if (condition) {
//Block of codes will execute in case that condition is true 
} 
else if (condition2) {
//Block of codes will execute if the conditions before
} else {
//Block of codes will execute in case that all other conditions are false
} */

//For switch statements if break statements are omitted the next case will execute

//For common code blocks(different cases will use the same code) in switch statements :
/*
switch (expression) {
  case 0:
  case 1:
    example: "code"  
    break:
}
*/

//Switch cases use strict(===) comparison so the expression and case must be same type for match

//for loop usage :
/*
let text = "";
for (let i=1, i<8, i++) {
  switch (i) {
    case 1:
      text+="Monday is the first day of the week" + "<br>";
      break;
    case 2:
      text+="tuesday is the second day of the week" + "<br>";
      break;
    case 3:
      (...)
  }
}
*/

//Do not use for in for an array if the order is important.

//Using for of for general iterable objects is recommended

//for in loops through the properties. Useful for objects.

//for of loops through the values. Useful for arrays, sets, strings, maps.

//for in and for of usage :
/*
let text = ""
let object = {a:1, b:2, c:3}
for (x in object) {
  text += object[x];
}
*/
/*
let text = ""
let array = ['a1', 'b1', 'c1' ]
for (x of array) {
  text += array[x];   
}
*/

//In JS an object becomes an iterator when it implements next function :

//Iterable is an object that has a Symbol.iterator.
/*
const num = {};
num[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n+=2;
      if (n%97 == 0) {done = true}
      return {value:n, done:done}; 
    }
  };
}

let iterator = myNumbers[Symbol.iterator]();
for (const x in num) {
  var result = iterator.next();
  if (result.done) break;
}
*/

//Sets and maps only can be created with new keyword.

//A JavaScript set is a collection of unique values so a value can occur only once in a set.

//If you try to add equal elements with add() method only the first one will be added.

//You can check if a set includes a value with has(value);

//Sets does not have key if you use keys() method values() will be returned.

//A Map remembers the original insertion order of the keys.

//You can add key-value pairs with .set method to a map and set() method can also be used for changing existing key-value pairs in a map

//get() method used for getting a value of a key in a map.

/*  Properties of Maps  */
/* -Directly Iterable
   -Have size property
   -Keys can be any datatype
   -Do not have default keys
*/

//Example of a map and usage of map methods
/*
const a1 = new Map([['a', 1],['b', 2], ['c', 3]]
)
a1.set('d', 4) *Will add or change elements
a1.size *Will return number of elements 
a1.delete("a1") *Will delete an element
a1.clear() *Will clear all elements
a1.has('d') *Will check if a element has included
*/


