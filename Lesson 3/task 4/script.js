alert("Please use console!")

function filterRange(array, a, b) {
    var start = 0;
    var finish = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == a) {
            start = i
        }
        if (array[i] == b) {
            finish = i
        }
    }
    if (start < finish) {
        // array.splice(0, start)
        // array.length = finish - (start - 1)
        // return array
        return array.splice(start, (finish - 1))
    }
    else { throw Error("Something goes wrong!") }
}

var arr1 = [2, 5, 9, 1, 4, 3, 5, 8, 5];

console.log(arr1)
console.log(filterRange(arr1, 9, 8))