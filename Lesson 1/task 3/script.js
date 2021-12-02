var tr = true;

while (tr) {
    var res = prompt("5 * 5 = ")
    if (Number(res) != 25) {
        alert("You doing something wrong try again!")
    }
    else {
        alert("Good job!")
        tr = false
    }
}