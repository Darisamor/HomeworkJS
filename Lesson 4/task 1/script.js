alert("Please use console!")

var numbers = [1, -3, 5, 38, -25, 45, -8, 3, 0, -9, 31, -27, 18, -31, -2, 4, 9, 8, 74, -237]
console.log(numbers);

function compare(a, b) {
    return a - b;
}

function reverseCompare(a, b) {
    return b - a;
}

console.log(numbers.sort(compare))
console.log(numbers.sort(reverseCompare))
// console.log(numbers.sort(compare).reverse())