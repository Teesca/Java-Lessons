// var x = 52;
// var y = '50';
// var z = x + y * 2;

// console.log('The final result is' + z);

// let names = "McCool";
// names = "Hashproof";

// console.log("The name of the hacker is "+names)

let globalVar = "Global variables";

function fun(){
    let localVar = "Local variables";

    console.log(localVar);
}
console.log(localVar + "is not" + globalVar)