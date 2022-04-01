// Old way
function reverseString(str){
    const backwards = [];
    totalItems = str.length -1;

    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }

    return backwards.join('');
}

console.log(reverseString("hello my name is Felicia"));


var reverseStringg = function(s) {
    var backwards = [];
    var stringLength = s.length - 1;
    
    for (let i = stringLength; i >= 0; i--){
        backwards.push(s[i]);
    }
    
    return backwards;
};
console.log(reverseStringg(["h","e","l","l","o"]));


var reverseStringgg = function(s) {
    return s.reverse();
}
    
console.log(reverseStringgg(["h","e","l","l","o"]));



 
// Modern way
function reverseString2(str){
    return str.split('').reverse().join('');
}
console.log(reverseString2("hello my name is Felicia"));



// More modern 
const reverseString3 = (str) => str.split('').reverse().join('');
console.log(reverseString3("hello my name is Felicia"));



// Most modern
const reverseString4 = (str) => [...str].reverse().join('');
console.log(reverseString4("hello my name is Felicia"));
