//determine whether a phrase is a permuation of a palindrome with bitwise operations
/*  
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.  The palindrome does not need to be limited to just dictionary words.  
EXAMPLE 
Input: Tact Coa
Output: True  */

var isPermutationOfPalindrome = function(phrase) {
  //store even/odd character counts as 0 or 1s in bitvector
  var bitVector = createBitVector(phrase);
  //the phrase is a palindrome if at most only one character appears an odd number of times
  return bitVector === 0 || checkExactlyOneBitSet(bitVector);
}

var createBitVector = function(phrase) {
  var bitVector = 0;
  for (var characterIndex = 0; characterIndex < phrase.length; characterIndex++) {
    var charIndex = getCharNumber(phrase.charAt(characterIndex));
    bitVector = toggleBit(bitVector, charIndex);
  }
  return bitVector;
}

var toggleBit = function(bitVector, index) {
  if (index < 0) {
    return bitVector;
  }
  var mask = 1 << index;
  if((bitVector&mask)==0)
  {
  bitVector|=mask;
  }
  else
  {
  bitVector&=~mask;
  }
  return bitVector;
  
  
};

var getCharNumber = function(character) {
  var aCode = 'a'.charCodeAt();
  var zCode = 'z'.charCodeAt();
  var charCode = character.toLowerCase().charCodeAt();
  
  if (charCode >= aCode && charCode <= zCode) {
    return charCode - aCode;
  } else {
    return -1;
  }
}

var checkExactlyOneBitSet = function(bitVector) {
  return ((bitVector - 1) & bitVector) === 0;
}
console.log(isPermutationOfPalindrome("dad  "));
