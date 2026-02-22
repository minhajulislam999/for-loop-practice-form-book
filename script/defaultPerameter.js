 
 function myFunction(a, b = 10) {
   let result = a + b;
   console.log(result);
 }

 console.log(false == "0"); // true because "0" is converted to 0, and false is also converted to 0 in non-strict comparison

 console.log(false === "0"); // false karon  ekhane type check o kora hoy, false is a boolean and "0" is a string, so they are not strictly equal

 myFunction(5);


     //function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

{
    function min (nums){return Math.min(nums)}
    

console.log(min([1,3, 2]));

const cube=x=> x*x*x; 
console.log(cube(2))


const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);




}

{
  const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);
}
