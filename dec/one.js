// Return the number of elements in an array arrOfNumbers, 
//that are within the range of a number lowerRange, and another number upperRange, inclusive.

// Here is the complete specification for withinRange

// withinRange(arrOfNumbers, lowerRange, upperRange)
// Parameters:
// arrOfNumbers: Array<Integer> - an array of integers.
// lowerRange: Integer - element should be greater than or equal.
// upperRange: Integer - element should be less than or equal.

function withinRange(arrOfNumbers, lowerRange, upperRange) {
    var count = 0;
    for (var i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] >= lowerRange && arrOfNumbers[i] <= upperRange) {
            count++;
        }
    }
    return count;

  }
  console.log(withinRange([2, 3, 0, 1, 7], 4, 8)); // 1
  //console.log(withinRange([3, 3, 3, 5, 18, 6, 20], 15, 30)); //2
  console.log(withinRange([4, 6, 2, 6, 7, 7], 2, 7)); 6