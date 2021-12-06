alert("Please use console!")

var numbers = [1, -3, 5, 38, -25, 45, -8, 3, 0, -9, 31, -27, 18, -31, -2, 4, 9, 8, 74, -237]
console.log(numbers);

var positiveArr = numbers.filter(function(el) {
    return el >= 0;    
})
console.log(positiveArr)

var negativeArr = numbers.filter(function(el) {
    return el <= 0;    
})
console.log(negativeArr)