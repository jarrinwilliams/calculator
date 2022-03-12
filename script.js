
const numOpBtn = document.querySelectorAll('.numBtn, .opBtn, .decBtn');
numOpBtn.forEach((button) => {
    button.addEventListener('click', function(e) {
        //makes button put the character in the display
        const display = document.querySelector('.calcDisplay');
        const char = button.innerHTML;
        const chars = display.childNodes;
        if (button.classList.contains('opBtn')) {
            for (let i = chars.length - 1; i >= 0; i--) {
                display.removeChild(chars[i]);
            }
        } else if (button.classList.contains('numBtn') && display.chi)
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('displayChar');
        display.appendChild(span);
    })
})
const nums = [];
const char = document.querySelector('.displayChar');


// function for adding
const add = (numOne, numTwo) => {
    const sum = numOne +numTwo;
    return sum;
}
//function for subtraction 
const subtract = (numOne, numTwo) => {
    const difference = numOne - numTwo;
    return difference;
}
// function for multiplication 
const multiply = (numOne, numTwo) => {
    const product = numOne * numTwo;
    return product;
}
// function for division
const divide = (numOne, numTwo) => {
    if (numOne === 0) {
        const quotient = numOne / numTwo;
        return quotient;
    }
}
// clear button to make it clear the div for right now
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(e) {
    const display = document.querySelector('.calcDisplay');
    const chars = display.childNodes;
    for (let i = chars.length - 1; i >= 0; i--) {
        display.removeChild(chars[i]);
    }
})