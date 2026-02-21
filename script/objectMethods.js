//keys

//object.keys() object er sob property name (key) array akare dey

const employee = {
    name: 'Raja Rani',
    designation: 'Qa',
    salary: 50000,
    experience: 1

}

console.log(Object.keys(employee));
 // ['name', 'designation', 'salary', 'experience']


 //Object.values() object er sob value array akare dey

 const values = Object.values(employee);

 console.log(values);
    // ['Raja Rani', 'Qa', 50000, 1]


    //object.entries() object er sob property name (key) and value array akare dey array of array akare dey

    const entries = Object.entries(employee);

    console.log(entries);
    // [['name', 'Raja Rani'], ['designation', 'Qa'], ['salary', 50000], ['experience', 1]]


    // delete operator diye object er property delete kora jay

    delete employee.experience;
    console.log(employee);
    // {name: 'Raja Rani', designation: 'Qa', salary: 50000} experience property delete hoye geche

    //freez() method diye object ke freeze kora jay, freeze kora object er property change kora jay na 


    Object.freeze(employee);

    employee.salary = 60000;
     // freeze kora object er property change kora jay na, tai salary change hoy nai

    console.log(employee);
    // {name: 'Raja Rani', designation: 'Qa', salary: 50000} salary change hoy nai



    //seal() method diye object ke seal kora jay,seal kora property delete and add kora jay na, but property change kora jay 

    const person = {
        name: 'John',
        age: 30,
    }

    Object.seal(person);

    person.name = 'Jane'; // property change kora jay
    person.gender = 'Male'; // property add kora jay na
    delete person.age; // property delete kora jay na

    console.log(person);
    // {name: 'Jane', age: 30} name property change hoye geche, but gender property add hoy nai, age property delete hoy nai
    

