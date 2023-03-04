// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
var obj = {
    x: 5,
    y: 20,
    z: 3
}


console.log(mult(obj));



/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/


var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantitiy: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
}

const person = obj => {
    let {name:n, info:{country:c, age:a}, postsQuantitiy:p=0} = obj

    console.log(n, c, a, p);
}

person(person1)


/**
 * This function uses destructuring for argument parsing. But it has a problem: it crashes when the caller passes an option object without an enable property. Since all options have defaults, we'd like to not crash in this case. Can you think of a clean way to fix this problem?
 */

 function go(options) {
    let {speed = 4,
         enable: {hyperdrive = false,
                  frobnifier = true}} = options


                  
    console.log("speed=", speed,
                "hyperdrive:", hyperdrive,
                "frobnifier:", frobnifier)
  }
  
  go({speed: 5})

