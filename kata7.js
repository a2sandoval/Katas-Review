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
var capitals = function (word) {
  var caps = [];
  // lets set caps to an empty array so we can add in the index of the elements that match being uppercased
  for(var i = 0; i < word.length; i++) {
    //don't forget the var part of the for loop otherwise you're not going to iterate at all
    if(word[i].toUpperCase() == word[i]) 
    caps.push(i);
    //you don't need the brackets over the i when using a method
  }
  return caps;
};