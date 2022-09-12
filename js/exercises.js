(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
 function  max( a, b) {
  if(a > b){

    return a;
  }else {
    return b;
  }
 }

  // ---------------------



  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function  maxOfThree( a, b, c) {
  if( (a > b)&&(a>c) ){
    return a;
  }else if(b > c) {
    return b;
  }else {
    return c;
  }
 }


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(str){
  
  if(str==='a'|| str==='e'|| str==='i' || str==='o'|| str==='u'){
    return true;
  }else {
    return false;
  }
}


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
function rovarspraket(str){
  let Con = '';// define the variable
  let count = str.length; //get the word 
  for(let i=0; i < count; i++){ // go through the letters of the word
    // if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'|| str[i]==='u'|| str[i]===' '){
    //   Con = Con.concat(str[i]);
    // }else {
    //   Con = Con.concat(str[i],"o",str[i]);
        if('bcdfghjklmnpqrstvwxy'.includes(str[i])) { // chec for the pressence of consonant
          Con += str[i] + 'o' + str[i];

        } else {
          Con += str[i];
        }


    }
     return Con;

  }



  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
function sum(arr){
  let num=0;
  for (let i = 0; i<arr.length; i++){
    num += arr[i];

  }
  return num;
}

function multiply(arr){
  let multy=1;
  for (let i=0; i<arr.length; i++){
    multy *= arr[i];

  }
  return multy;
}


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
function reverse(str){
  let rev = [];
  let m= str.length;
  for(let i = m-1; i = 0; i--){
    rev.push(str[i]);
  }
  return rev;
}


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
function findLongestWord(arr){
  let word ='';
  for (let i=0 ; i< arr.length; i++){
    if(word.length< arr[i].length){
      word = arr[i];
    }
    else {
      word = word;
    }
    
  }
  return word.length;
}


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
function filterLongWords(arr,i){
      const words=[];
  for(let j=1; j < arr.length; j++){

    if( arr[j].length > i){

       words.push(arr[j]);
    }
    
  }
  return words;
}



  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
function charFreq(str){
  let checker = 'abcdefghijklmnopqrstuvwxyz';
  let lower= toLowerCase;
  
}

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
