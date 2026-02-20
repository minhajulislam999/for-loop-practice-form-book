// {}

/**
 * var 
 * 
 * 1  function scope
 * 2 value poriborton kora jay
 * 3 redeclare kora jay
 * hoisting hoy
 * 
 */


// function scope

function add(){
    var a = 19;

    // etake ei function er vitor theke access kora jabe
    console.log(a);
}

// but ekhan theke access kora jabe na 

// console.log(a);



add();


// redeclare kora jay

var name = 'minhajul';

var name = 'minhajul islam';

console.log(name);


// value poriborton kora jay

var name = 'minhajul';
name = 'minhajul islam';

console.log(name);

// hoisting hoy

console.log(x); // undefined
var x = 5;


// --------------------------

/** * let

1 block scope
2 value poriborton kora jay
3 redeclare kora jay na
4 hoisting hoy na
*/

// block scope

function add1(){
    let a = 19;
    console.log(a);
}
add1();
// console.log(a); // error


// value poriborton kora jay

let name1 = 'abdul malek';
name1 = 'abdul malek hafijji';

console.log(name1);

// redeclare kora jay na

let name2 = 'abdul malek';
// let name2 = 'abdul malek hafijji'; // error



// hoisting hoy na

// console.log(y); error

let y = 60;


// --------------------------

/** * const

1 block scope
2 value poriborton kora jay na
3 redeclare kora jay na
4 hoisting hoy na
*/

// block scope

{
    const a = 19;
    console.log(a);

}

// console.log(a); // error


// value poriborton kora jay na

const name3 = 'abdul malek';
// name3 = 'abdul malek hafijji'; // error

// redeclare kora jay na

const name4 = 'abdul malek';
// const name4 = 'abdul malek hafijji'; // error



// hoisting hoy na

// console.log(z); error
const z = 60;

