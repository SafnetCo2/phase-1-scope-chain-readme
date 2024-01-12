const globalVar = 1;
function globalPlusLocal() {
    let localVar = 2;
    return localVar + globalVar
}
//call globalPlusLocal
globalPlusLocal();

//1 When globalPlusLocal is invokede
//2.let localVar runs first creating a new local variable
//when js engine reaches the function return file sees local var and find local and then the global var which is not even local then hence due to scope chain it runs too the global variable
//All variables and functions declared in outer scopes are available in inner scopes via the scope chain.

const globalVariable2 = 3;
function mainFun() {
    let localVarible1 = 4;
    function underMainFun() {
        let undermainVariable = 8;
        return undermainVariable + localVarible1 + globalVariable2;

    }
    const result = underMainFun();
    return result;
}
mainFun()



//scope chain
const fruit = "Apples"//global scope

function vegies() {
    let vegetable = "sukuma"
    console.log("fruit", fruit);
    console.log("vegetable", vegetable);
    console.log("vegetable2", vegetable2);
}

function Wikies() {
    let vegetable2 = "wikie"
    console.log("fruit", fruit);
    console.log("vegetable2", vegetable2);
    console.log("vegetable", vegetable);
}
vegies()
Wikies()