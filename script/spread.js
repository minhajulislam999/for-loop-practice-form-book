/* 
* spread oparator mane holo array er sob element alada kore bebohar kora.



*/

const numbers = [87,118,5,91];
console.log(...numbers); // 87 118 5 91


// array max

// Math.max(...array) diye array er sorboccho man pawya jay


const max = Math.max(...numbers);
console.log(max); // 118

// array copy

// sorasori = dile reference copy hoy, mul array poribortito thake

const first = [1,2,3,4, 5];

const second = first; // reference copy

second.push(6);

console.log(first); // [1, 2, 3, 4, 5, 6]

// spread operator diye copy korle original array poribortito hoy na

 const third = [...first];

 third.push(7);

 console.log(first); // [1, 2, 3, 4, 5, 6] mul array poribortito hoy na
 console.log(third); // [1, 2, 3, 4, 5, 6, 7] 


 // Add elements while copying an array

 const fourth = [0, ...first, 8, 9];

 console.log(fourth); // [0,1,2,3,4,5,6,8,9]  first array er element gula copy hoye geche, tar sathe 0, 8, 9 add hoye geche

 