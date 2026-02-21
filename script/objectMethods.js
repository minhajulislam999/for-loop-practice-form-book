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