
// for(var i=0; i<=6; i=i+2){
//     console.log(i)
// }

// console.log(Math.sqrt(-20));

// var donuts = ["glazed", "chocolate frosted", "boston creme", "glazed cruller"];
// console.log(donuts.splice(1, 1, "chocolate cruller", "creme de leche"));

// console.log(!([6] === 6) && "RAce" === "RAce")

// var went = true;
// var going = went ? "yes" : "no";
// console.log(going);

// var x =0;
// var y ="";
// var z=4;
// if(x==y){
//     z++;
// }

// console.log(z);


// var x =1;
// function addTwo() {
//     x=x+2;
// }

// console.log(addTwo());
// x= x+1;
// console.log(x);

// var a=5;
// var b=6;

// function sum(a,b){
//     console.log(a+b)
// }

// console.log(a+b)


// function winner(result) {
//     let winnerOne = [];
//     let winnerTwo = [];
    
//     for (let i = 0; i < result; i++){
//         while (result[i] == 1){
//             winnerOne.push(result[i]);
//         }
//         while (result[i] == 2){
//             winnerTwo.push(result[i]);
//         }
//     }
//     console.log(winnerOne);
//     console.log(winnerTwo);


//     if (winnerOne.length > winnerTwo.length){
//         console.log("Player one is the winner");
//     } else {
//         console.log("Player two is the winner");
//     }
//     return winnerOne;
// }

//console.log(winner([2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1]))


var reverseStringg = function(s) {
    var backwards = [];
    var stringLength = s.length - 1;
    
    for (let i = stringLength; i >= 0; i--){
        backwards.push(s[i]);
    }
    
    return backwards;
};
console.log(reverseStringg(["h","e","l","l","o"]));


