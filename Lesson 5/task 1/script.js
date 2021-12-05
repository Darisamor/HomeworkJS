alert("Please use console!")

function makeBuffer() {
    let cache = [];

    this.add = (value) => cache.push(String(value));
    // this.add = function(value) {
    //     cache.push(value.toString());
    // }

    this.print = () => cache.join(" ");

    this.clear = () => cache = [];
    // this.clear = () => cache.length = 0;

    return this;
}

var buffer = makeBuffer();
buffer.add("I");
buffer.add("h8");  // :)
buffer.add("JavaScript");
console.log(buffer.print());
buffer.clear();
console.log(buffer.print());