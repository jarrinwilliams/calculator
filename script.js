let nums = [];
let operation = [];
//function for number buttons
const numBtn = document.querySelectorAll('.numBtn');
numBtn.forEach((button) => {
    button.addEventListener('click', function(e) {
        //makes button put the character in the display
        const displayChar = document.querySelector('.displayChar');
        const miniDisplay = document.querySelector('.miniDisplay');
        const char = button.innerHTML;
        if (displayChar.textContent == nums[0] || displayChar.textContent == operation[0] || displayChar.textContent === 'Undefined') {
            displayChar.textContent = '';
            miniDisplay.textContent = '';
            nums.splice(0);
        }
        displayChar.textContent += char;
    })
})
// button for operation buttons
const opBtns = document.querySelectorAll('.opBtn');
opBtns.forEach((button) => {
    button.addEventListener('click', function(e) {
        const displayChar = document.querySelector('.displayChar');
        const miniDisplay = document.querySelector('.miniDisplay')
        if (nums.length === 1 && operation.length === 0) {
            operation.push(button.innerHTML);
            displayChar.textContent = '';
            miniDisplay.textContent = `${nums[0]} ${operation[0]}`;
            return
        } else {
            nums.unshift(displayChar.textContent);
        }
        if (nums.length === 2) {
            const answer = operate(nums[0], operation[0], nums[1]);
            miniDisplay.textContent = `${answer} ${button.innerHTML}`
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
        miniDisplay.textContent = `${nums[0]} ${operation[0]}`;
        }
        displayChar.textContent = '';
    })
})
//function for equals button
const eqBtn = document.querySelector('.eqBtn');
eqBtn.addEventListener('click', function(e) {
    const displayChar = document.querySelector('.displayChar');
    const miniDisplay = document.querySelector('.miniDisplay');
    nums.push(displayChar.textContent);
    miniDisplay.textContent = `${nums[0]} ${operation[0]} ${nums[1]}`;
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
// clear button to make it clear the div for right now
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(e) {
    nums.splice(0);
    operation.splice(0);
    const displayChar = document.querySelector('.displayChar');
    const miniDisplay = document.querySelector('.miniDisplay');
    displayChar.textContent = '';
    miniDisplay.textContent = '';
})
// makes it optimized for keyboard use
document.addEventListener('keypress', function(e) {
    // number keys
    if (!isNaN(e.key) || e.key === '.') {
        const displayChar = document.querySelector('.displayChar');
        const miniDisplay = document.querySelector('.miniDisplay');
        const char = e.key;
        if (displayChar.textContent == nums[0] || displayChar.textContent == operation[0] || displayChar.textContent === 'Undefined') {
            displayChar.textContent = '';
            miniDisplay.textContent = '';
            nums.splice(0);
        }
        displayChar.textContent += char;
        // equals key being linked to enter key
    } else if (e.key === 'Enter') {
        const displayChar = document.querySelector('.displayChar');
        const miniDisplay = document.querySelector('.miniDisplay');
        nums.push(displayChar.textContent);
        miniDisplay.textContent = `${nums[0]} ${operation[0]} ${nums[1]}`;
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
    // operation keys
    } else if (e.key === '+' || e.key === '/' || e.key === '*' || e.key === '-') {
        const displayChar = document.querySelector('.displayChar');
        const miniDisplay = document.querySelector('.miniDisplay')
        if (nums.length === 1 && operation.length === 0) {
            operation.push(e.key);
            displayChar.textContent = '';
            miniDisplay.textContent = `${nums[0]} ${operation[0]}`;
            return
        } else {
            nums.unshift(displayChar.textContent);
        }
        if (nums.length === 2) {
            const answer = operate(nums[0], operation[0], nums[1]);
            miniDisplay.textContent = `${answer} ${e.key}`
            if (answer === 'Undefined') {
                nums.splice(0);
                operation.splice(0);
            } else {
                nums.unshift(answer);
                nums.splice(1);
                operation.unshift(e.key);
                operation.splice(1);
            }
        } else {
            operation.push(e.key);
            miniDisplay.textContent = `${nums[0]} ${operation[0]}`;
        }
        displayChar.textContent = '';
    } else {
        nums.splice(0);
        operation.splice(0);
        const displayChar = document.querySelector('.displayChar');
        const miniDisplay = document.querySelector('.miniDisplay');
        displayChar.textContent = '';
        miniDisplay.textContent = '';
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
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    }
}
