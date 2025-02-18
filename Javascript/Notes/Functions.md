has
filter
foreach
find
findindex
includes
split
substr
sort
Array

---

filter

``` javascript
// Array Filter function 
let numbers = [15, 2, 50, 55, 90, 5, 4, 9, 10]; console.log(numbers.filter(number => number % 2 == 1)); 
// Filtering odd numbers => result is [15, 55, 5, 9]
```

for each

``` javascript
<p id="items"></p><script> let text = "";   
const fruits = ["Apple", "Orange", "Cherry", "Banana"];   
fruits.forEach(myFunction); document.getElementById("items").innerHTML = text; function myFunction(item, index) {  
 index =index + 1 text += index + ": " + item + "";   
} </script>
```

map
 
``` javascript
const users = [ {firstname : "Abhishek", lastname: "kumar"}, {firstname : "jay", lastname: "sharma"},  
{firstname : "rupal", lastname: "sharma"} ];  
  
users.map(getFullName);  
  
function getFullName(item) {  
return [item.firstname,item.lastname].join(", ");  
}  
// Output: Abhishek kumar, jay sharma, rupal sharma,
```

concat

``` javascript
const arr1 = ["Abhishek", "rupal"];  
const arr2 = ["divya", "rahul", "harsh"];  
const allUsers = arr1.concat(arr2);  
// Output: Abhishek, rupal, divya, rahul, harsh  
  
const arr1 = ["Abhishek", "rupal"];  
const arr2 = ["divya", "rahul", "harsh"];  
const arr3 = ["kamal", "rohit"];  
const allUsers = arr1.concat(arr2, arr3);  
// Output: Abhishek, rupal, divya, rahul, harsh, kamal, rohit
```

find

``` javascript
const marks = [30, 70, 98, 77];  
console.log(marks.find(checkMarks));  
function checkMarks(mark) {  
return mark > 90;  
}  
// 98
```

findindex

``` javascript
const marks = [30, 70, 98, 77]; console.log(marks.findIndex(checkMarks)); function checkMarks(mark) {  
 return mark > 90;   
}   
// 2
```

includes

``` javascript
const birds = ["Birds", "peacock", "Dove", "Sparrow"]; console.log(birds.includes("Dove"));  
// true
```

split

``` javascript
let text = "Hello this is akashminds"; console.log(text.split(" ")); // ["Hello", "this", "is", "akashminds"];let text = "Hello this is akashminds"; console.log(text.split(" ", 3)); // ["akashminds"];
```

substr

``` javascript
const test = "Hey!, this is Akashminds, have a nice day ahead."; console.log(test.substring(0, 30)); // Hey!, this is Akashminds, have
```

Array

``` javascript
has
filter
foreach
find
findindex
includes
split
substr
sort

---

filter

``` javascript
// Array Filter function 
let numbers = [15, 2, 50, 55, 90, 5, 4, 9, 10]; console.log(numbers.filter(number => number % 2 == 1)); 
// Filtering odd numbers => result is [15, 55, 5, 9]
```

for each

``` javascript
<p id="items"></p><script> let text = "";   
const fruits = ["Apple", "Orange", "Cherry", "Banana"];   
fruits.forEach(myFunction); document.getElementById("items").innerHTML = text; function myFunction(item, index) {  
 index =index + 1 text += index + ": " + item + "";   
} </script>
```

map
 
``` javascript
const users = [ {firstname : "Abhishek", lastname: "kumar"}, {firstname : "jay", lastname: "sharma"},  
{firstname : "rupal", lastname: "sharma"} ];  
  
users.map(getFullName);  
  
function getFullName(item) {  
return [item.firstname,item.lastname].join(", ");  
}  
// Output: Abhishek kumar, jay sharma, rupal sharma,
```

concat

``` javascript
const arr1 = ["Abhishek", "rupal"];  
const arr2 = ["divya", "rahul", "harsh"];  
const allUsers = arr1.concat(arr2);  
// Output: Abhishek, rupal, divya, rahul, harsh  
  
const arr1 = ["Abhishek", "rupal"];  
const arr2 = ["divya", "rahul", "harsh"];  
const arr3 = ["kamal", "rohit"];  
const allUsers = arr1.concat(arr2, arr3);  
// Output: Abhishek, rupal, divya, rahul, harsh, kamal, rohit
```

find

``` javascript
const marks = [30, 70, 98, 77];  
console.log(marks.find(checkMarks));  
function checkMarks(mark) {  
return mark > 90;  
}  
// 98
```

findindex

``` javascript
const marks = [30, 70, 98, 77]; console.log(marks.findIndex(checkMarks)); function checkMarks(mark) {  
 return mark > 90;   
}   
// 2
```

includes

``` javascript
const birds = ["Birds", "peacock", "Dove", "Sparrow"]; console.log(birds.includes("Dove"));  
// true
```

split

``` javascript
let text = "Hello this is akashminds"; console.log(text.split(" ")); // ["Hello", "this", "is", "akashminds"];let text = "Hello this is akashminds"; console.log(text.split(" ", 3)); // ["akashminds"];
```

substr

``` javascript
const fixedArray = new Array(5); // Creates an array of length 5
fixedArray[0] = 1;
fixedArray[1] = 2;
console.log(fixedArray); // [1, 2, <3 empty items>]
```