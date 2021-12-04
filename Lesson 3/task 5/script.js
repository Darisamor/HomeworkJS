alert("Please use console!")

function camelize(str){
    var strArr = str.split("-")
    var text = strArr[0]
    for (var i = 1; i < strArr.length; i++){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
        text = text + " " + strArr[i]
    }
    return text
}

var string = "I-love-rock-n-roll!"
console.log(string)
console.log(camelize(string))