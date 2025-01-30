

# Strings

In JavaScript, strings are immutable, which means the best you can do is to create a new string with the changed content and assign the variable to point to it. This is true despite the fact you can get value at the index of the string `s[0]`

# Functions

A javascript function begins with `function name(){}`


# Slice

slice(0,i+1) - grab a slice of the array or string from 0 to ith index

# Built in sort() function

By default, the sort method sorts elements alphabetically. To sort numerically just add a new method which handles numeric sorts (sortNumber, shown below) `sortedCandies.sort(function(a,b) {return a - b});`

This function uses some variation of quicksort.

# Function Prototype

In JavaScript, functions don't have explicit prototypes like in some other languages (e.g., C++). However, you can think of the function definition itself as a kind of prototype.

``` javascript
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    
};
```

Function as Constructor:

When a function is used with the new keyword, it acts as a constructor, creating a new object. The prototype of the newly created object is set to the prototype property of the constructor function.

You wouldn't typically use a function as a constructor instead of creating a class in modern JavaScript.  Classes (introduced in ES6) provide a cleaner and more structured way to define objects with methods and properties.  Function constructors were the primary way to achieve similar results before ES6 classes.  While they still work, classes are generally preferred for readability and maintainability.

You can't directly extend a class "on the fly" in the exact same way you could with prototypes before ES6 classes.  Prototype modification allowed you to add methods to existing objects or even to the prototypes of built-in objects after they were created.  ES6 classes are more structured and don't allow this kind of dynamic modification after the class definition.

Mixins are a unique way to extend a class. We are also able to use a similar methdology with Python.

``` javascript
const MyMixin = (superclass) => class extends superclass {
  mixinMethod() {
    console.log("Method from MyMixin");
  }
};

class MyBaseClass {
  baseMethod() {
    console.log("Method from MyBaseClass");
  }
}

const MyExtendedClass = MyMixin(MyBaseClass); // Mixin applied at class definition
```