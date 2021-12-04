alert("Please use console!");

var styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock'n'Roll");
console.log(styles);

styles[(styles.length - 2)] = "Classic"; // styles.length - 1 = last element, but we need pre-last element
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Raggie")
console.log(styles);