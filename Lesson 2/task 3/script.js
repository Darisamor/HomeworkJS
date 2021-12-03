var first = prompt("Enter first value.")
var second = prompt("Enter second value.")
var operation = prompt("Enter operation ('plus', 'minus', 'multi' or 'divide').")

function mathOperaion(a, b, c) {
    if (!(isNaN(a)) && !(isNaN(b))) {
        if (c == "plus") {
            alert(a + " + " + b + " = " + (a + b));
        }
        else if (c == "minus") {
            alert(a + " - " + b + " = " + (a - b));
        }
        else if (c == "multi") {
            alert(a + " * " + b + " = " + (a * b));
        }
        else if (c == "divide") {
            alert(a + " / " + b + " = " + (a / b));
        }
        else { throw SyntaxError("Something goes wrong!") }
    }
    else { throw SyntaxError("Something goes wrong!") }
}

try {
    mathOperaion(Number(first), Number(second), operation)
} catch (error) {
    alert("Error! We have SyntaxError!")    
}