// Return all the lowercase letters in a given string.

// Here is the complete specification for allLowerCaseLetters

// allLowerCaseLetters(str)
// Parameters:
// str: String - The string to get all the lowercase letters from.


function allLowerCaseLetters(str) {
    var lowerCaseLetters = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            lowerCaseLetters.push(str[i]);
            
            console.log(lowerCaseLetters);
            lower = lowerCaseLetters.join('');
            
        }

    }
    return lower;
  }

console.log(allLowerCaseLetters("DISeyi"));




