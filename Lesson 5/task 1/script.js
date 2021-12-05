// alert("Please use console!")

function makeBuffer() {
    var buff = new Set();
    return buff;
    let print = function() {
        let string;
        for(var el in buff){
            string += el;
        }
        return string;
    }
}

var buffer = makeBuffer();
buffer.add("I");
buffer.add("h8");  // :)
buffer.add("JavaScript");
console.log(buffer.print());