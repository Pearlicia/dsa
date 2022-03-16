// merge sorted arrays
// Copilot solution
function sortedArrays (array1, array2) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
        result.push(array1[i]);
        i++;
        } else {
        result.push(array2[j]);
        j++;
        }
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}

console.log(sortedArrays([0, 3, 4, 31, 40], [4, 6, 30, 32]));


// Z to Mastery solution
function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;


    // Check input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
