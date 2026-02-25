function jaf(mobile){

    console.log(mobile);

}

function rat(jaf){
    const mobile = "js mobile" ;
    jaf(mobile);

}

rat(jaf)

function callback(sum){
    console.log(sum);

}


function calculate(num1, num2, callback){
    const sum = num1 * num2;

    callback(sum);
}

calculate(2, 4 ,callback)

// -----


function addCallback(addNum){

    console.log(addNum);

}

function addCalculate(num1, num2, addCallback){

    const addNum = num1 + num2;

    addCallback(addNum);

}

addCalculate(4,5, addCallback)


//-----

function calculate1(num1, num2, callback){

    callback(num1, num2)



}

function add(a, b){
    console.log(a + b);

}

function multiply(a, b){
    console.log(a * b);

}

calculate1(3,5, add);

calculate1(3,5, multiply);