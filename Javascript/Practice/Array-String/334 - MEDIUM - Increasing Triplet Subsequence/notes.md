

I could just iterate through and check if the next number is bigger than one of the previous numbers. If it happens twice, there is a triplet.

I need to handle the condition of if the increment drops back down before incrementing like a triplet.


[20,100,10,12,5,13]

O(n^2) solution
- for each number, loop through until you see two numbers that are greater than itself, and stop. Once you find such a thing, return true, else continue and return false. 