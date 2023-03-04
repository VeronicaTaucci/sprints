// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

function isNumber(a) {
    if (typeof a === "number") {
        return "that's a number";
    }
    else {
        return "That's not a number";

    }
}




console.log(isNumber(10));
console.log(isNumber('hey there'));
console.log(isNumber(true));


// The following function checks if a number is positive, negative or zero. 
// rewrite the function to use a ternary statement  

const posOrNeg = (num) => {
    let result = ""
    if(num > 0){
        result = "postive";
    }
    else if (num < 0){
        result = "negative";
    }
    else {
        resul = "zero";
    }

    return `The number is ${result}.`
}



console.log(posOrNeg(-8)); 





