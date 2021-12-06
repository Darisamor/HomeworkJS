function makeword() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var num = Math.floor(Math.random() * (8 - 3 + 1) + 3) // трошки покращив код з інтернету на рандомні слова, додав рандомну кількість букв.
  
    for (var i = 0; i < num; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));  
    return text;
}

function start(){
    let lists = document.querySelectorAll('li');
    let count = 0;

    for (let i = 0; i < lists.length; i++){
        lists[i].innerHTML = makeword();
    };

    for(let i = 0; i < lists.length; i++){
        count += lists[i].innerHTML.length;
    }
    
    document.getElementById("res").innerHTML = count;
}