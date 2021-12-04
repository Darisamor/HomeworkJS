alert("Please use console!")

function find(arr, value) {
    var bool = true;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == value){
            console.log(i)
            bool = false
        }
    }    
    if(bool){
        console.log(-1)
    }
}

var product = ["Apple", "Carrote", "Pineapple", "Banana"];

find(product, "Banana")
find(product, "Watermellon")