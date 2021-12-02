var value = prompt("Please enter the number: ");
var num = Number(value);

for (var i = 0; i < value; i++) {
    num = num + i;
}
alert("Result = " + num)


// or (якось сам здогадався про такий лайфхак))
// value = (Number(value) + 1) * Number(value) / 2
// alert ("Result = " + value)