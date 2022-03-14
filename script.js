let nums = [];
let operation = [];
const numBtn = document.querySelectorAll('.numBtn');
numBtn.forEach((button) => {
    button.addEventListener('click', function(e) {
        //makes button put the character in the display
        const displayChar = document.querySelector('.displayChar')
        const char = button.innerHTML;
        if (displayChar.textContent == nums[0] || displayChar.textContent == operation[0] || displayChar.textContent === 'Undefined') {
            displayChar.textContent = '';
        }
        displayChar.textContent += char;
    })
})
const opBtns = document.querySelectorAll('.opBtn');
opBtns.forEach((button) => {
    button.addEventListener('click', function(e) {
        const displayChar = document.querySelector('.displayChar');
        if (nums.length === 1 && operation.length === 0) {
            operation.push(button.innerHTML);
            displayChar.textContent = button.innerHTML;
            return
        } else {
            nums.unshift(displayChar.textContent);
        }
        displayChar.textContent = button.innerHTML;
        if (nums.length === 2) {
            const answer = operate(nums[0], operation[0], nums[1]);
            displayChar.textContent = answer;
            if (answer === 'Undefined') {
                nums.splice(0);
                operation.splice(0);
            } else {
                nums.unshift(answer);
                nums.splice(1);
                operation.unshift(button.innerHTML)
                operation.splice(1);
            }
        } else {
        operation.push(button.innerHTML);
        }
    })
})
const eqBtn = document.querySelector('.eqBtn');
eqBtn.addEventListener('click', function(e) {
    const displayChar = document.querySelector('.displayChar');
    nums.push(displayChar.textContent);
    const answer = operate(nums[0], operation[0], nums[1]);
    displayChar.textContent = answer;
    if (answer === 'Undefined') {
        nums.splice(0);
        operation.splice(0);
        displayChar.textContent = 'Undefined';
    } else {
        nums.unshift(answer);
        nums.splice(1);
        operation.splice(0);
    }
})


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
     const quotient = numOne / numTwo;
     if (numTwo == 0) {
         return 'Undefined';
     } else {
        return quotient;
     }
}
//operating function
const operate = (firstNum, operator, secondNum) => {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    if (operator === '+') {
       return add(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === 'x') {
        return multiply(firstNum, secondNum);
    } else if (operator === '÷') {
        return divide(firstNum, secondNum);
    }
}
// clear button to make it clear the div for right now
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(e) {
    nums.splice(0);
    operation.splice(0);
    const displayChar = document.querySelector('.displayChar');
    displayChar.textContent = '';
})