// # Katas-Review
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

// Remove every other element in an array 

function removeEveryOther(arr){
  //your code here
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even"
  }
  else {
    return "Odd"
  }
}


//Now you have to write a function that takes an argument and returns the square of it.

function square (a) {
  return a * a;
}