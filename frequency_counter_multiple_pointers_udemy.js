/*
JavaScript Algorithms and Data Structures Masterclass

Frequency Counter/Multiple Pointers

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether
there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern
OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)
*/

const areThereDuplicates = function() {
  const theArgs = {};
  for(let i = 0; i < arguments.length; i++) {
    if(theArgs[arguments[i]] !== undefined) {
      return true;
    } else {
      theArgs[arguments[i]] = 1;
    }
  }

  return false;
}