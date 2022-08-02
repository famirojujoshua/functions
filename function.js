let raiseToPower = Math.pow(2, 2)
console.log("2 raised to it's power is:" ,raiseToPower)

function square() {
    console.log(2 * 2)
}
for (let count = 1;count <= 10 ;count++){
    square()
}

function printName() {
    console.log("Joshua")
}

printName ()

function divide() {
    let number1 = 6
    let number2 = 3

    let product = "6 divided by 3 is " + number1 / number2

    console.log(product)
}

divide()

function minus() {
    let number1 = 6
    let number2 = 3
    let product =  number1 - number2
    let message = "6 minus 3 is " + product

    console.log(message)
}
minus()

function plus() {
    let number1 = 6
    let number2 = 3
    let product =  number1 + number2
    let message = "6 plus 3 is " + product

    console.log(message)
}
plus()

function multiply(a, b) {
    let product = a * b
    console.log(product)
    return product
}

multiply(2, 3)

function Addition() {
    let number1 = 7;
    let number2 = 8;
    let result = number1 + number2;
    let message = "7 plus 8 is " + result;
    console.log(message)
}

Addition()

function addition(a,b) {
    let result = a+b
    console.log(result)
}
addition(1,9)

function subtract(a,b){
    let subtract = a - b
    console.log(subtract)
}

subtract(5,2)


