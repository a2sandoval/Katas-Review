// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//No brainer solution 
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }

  //Little more complex solution
  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//   Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
var capitals = function (word) 
  var caps = []
  // lets set caps to an empty array so we can add in the index of the elements that match being uppercased
  for(var i = 0; i < word.length; i++) {
    //don't forget the var part of the for loop otherwise you're not going to iterate at all
    if(word[i].toUpperCase() == word[i])
    caps.push(i);
    //you don't need the brackets over the i when using a method
  
  return caps;
};

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  //needed to create an array, but because it has negative numbers, i need to split the string where there are spaces
  let numArray = Array.from(numbers.split(' '),Number);
  //the sort method sorts alphabetically, to sort it from least to greatest, you need to find the difference using this function 
    numArray.sort((a,b) => a-b)
    //just checking that console.log of numArray is giving me the sorted array from least to greatest
    console.log(numArray)
    //I kept getting undefined, so i assigned the index of the first element to the lowNum variable
    let lowNum = numArray[0];
    //for some reason using slice, length-1, kept giving me undefined. Only pop would give  me the last number in the array
    let highNum = numArray.pop();
  //Checking to see if variables are the corrct numbers
    console.log(lowNum)
    console.log(highNum)
    //I initially just concatenated the string using the plus sign, and a space, but i wanted to get used to using template literals. For some reason, the template literal 
    //wasn't working, it turns out i was using single quotes instead of back ticks 
    return `${highNum} ${lowNum}`
  //SUCCESS! 
  
  }