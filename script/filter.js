const numbers = [2,20,25,27,29,40];

const graterThan25 =numbers.filter(grathe=> grathe >20);

// console.log(graterThan25);


const users = [
    {name: "Minhaj", active: false},
    {name: "Ratin", active: true},
    {name: "Rafit", active: true},
    {name: "sayed", active: false}
]

const actives = users.filter(use=> use.active === true);

console.log(actives);