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

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  //there are only two possible ways this would work, if the pedal pair is true and false or false and true
 if (flower1 %2 == 0 & flower2 %2 !== 0) {
   // we identify the even number and odd number using the remainder operator if == 0 it's even else false
   return true;
 }
else if (flower1 %2 ==!0 & flower2 %2 == 0){
  //adding the other condition where it's just flipped, odd and even
  return true
}

//Since those are our only true statements, the return is false
   else {
     return false;
   }
}

//refactord using ternarary operator 

function lovefunc(flower1, flower2) {
  return flower1 %2 == 0 & flower2 %2 !==0 ? true
  : flower1 %2 ==!0 & flower2 %2 == 0 ? true
  : false;
}


// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  if (n >= 10 ) {
    return "Great, now move on to tricks"
  }
 else {
   return "Keep at it until you get it"
 }
}

function hoopCount (n) {
  return (n >= 10 ?"Great, now move on to tricks" : "Keep at it until you get it" ) 

//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'
function solution(str){
return str.split("").reverse().join("");
}

}
