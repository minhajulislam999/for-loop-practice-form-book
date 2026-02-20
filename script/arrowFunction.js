/**
 * 
 */

// Normal function declaration

function add(num1, num2){
    let a = num1 + num2;
    return a;
    
}

console.log(add(5, 10));


// 2 function expression

const addition = function(num1, num2){
    return num1 + num2;
}

console.log(addition(3, 8));


// 3 Arrow function =>

    const add2 = (num1, num2) => num1 + num2;

    console.log(add2(4,6));

    //single parameter without parenthesis

    const getSquare = x => x * x;

    console.log(getSquare(50));


//no parameter 
    const logic = () => console.log(89);
    logic();

    // multi line arrow function 


    const doMath = (x, y) =>{
        const doubleX = x * 2;
        const doubleY = y * 2;
        return doubleX + doubleY;

    }
    console.log(doMath(58, 10));

    // anonymous function

    document.getElementById('demo').addEventListener('click', event =>{
        console.log('clicked');
    })


