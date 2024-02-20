/* 
    This is Roman Numeral Translator! 

    Answers to questions you may have:

    1) No, it doesn't work above 3,999.

    That's it.  


    Presently this simple translator abides classical rules,
    meaning numbers 1-3999 and no negative numbers. "Modern" numeral 
    notation uses overlines indicating a multiplication by 1000. 
    This expands the number range from 1 to 3,999,999.
*/

function convertToRoman(num) {

    if(num > 3999) { return "Limit reached."; }
    if(num < 0) { return "Negative values are invalid."; }

    //Create a table defining the numeral values.
    const Roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    const result = [];
    
    //Start by going through the lookup table.
    for(const numeral in Roman) {
        
        //This multiplier indicates the amount of each numeral to push to the result.
        //If the multiplier is at least one, it properly represents part of the number.
        const multiplier = Math.floor(num / Roman[numeral]);
        if(multiplier > 0) {
          for(let i = 0; i < multiplier; i++) {
            result.push(numeral);
          }
          num %= Roman[numeral];
        }
    }
  
    return result.join('');
}

console.log(convertToRoman(7));
console.log(convertToRoman(426));
console.log(convertToRoman(3999));
console.log(convertToRoman(-72));
console.log(convertToRoman(4000));