var first = 1;
var second = 1;
var fibb;

alert("Please use console!")

console.log(first)
console.log(second)

for (var i = 0; i < 8; i++){
    fibb = first + second;
    first = second;
    second = fibb;
    console.log(fibb)
}