const user ={
    name: "minhaj",
    age: 23,
    address:{
        police:"phulpur",

    }
}

// console.log(user?.unexpected);


const products = [
  {name: "Phone", price: 10000},
  {name: "Laptop", price: 50000},
  {name: "Watch", price: 2000}
];

const price = products.filter((pro)=>pro.price > 5000)
console.log(price);
//output: [] decouse ekhane 5000 tk upore kono product nai

const names = products.map((name)=>{
    return name.name;
})

// console.log(names);
//[ 'Phone', 'Laptop', 'Watch' ] this is output 