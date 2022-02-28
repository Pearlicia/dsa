// Your task is to write vanilla JS code that will display the current
//  value of an integer number counter.

// The counter should start at 0.
// There should be a button to add 5 to the counter's value.
// There should be a button to subtract 1 from the counter's value if the current 
// counter value is an odd number
// The counter value display should be rendered when the value changes.

function counter() {
    let counter = 0;
    let counterDisplay = document.getElementById('increment');
    let oddNumber = document.getElementById('decrement');
    let addFive = document.getElementById('increment');
    let subtractOne = document.getElementById('subtractOne');
    let reset = document.getElementById('reset');

    addFive.addEventListener('click', function () {
        counter += 5;
        counterDisplay.innerHTML = counter;
        console.log(counter);

        return counter;

    });

    subtractOne.addEventListener('click', function () {
        if (counter % 2 !== 0) {
            counter -= 1;
            counterDisplay.innerHTML = counter;
        }
        console.log(counter);
        return counter;
    });

}

counter(4);