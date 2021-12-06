let hidden = document.getElementsByClassName("hidden")

function start(){
    for (var i = 0; i < hidden.length; i++){
    if(hidden[i].style.visibility == "hidden"){
        hidden[i].style.visibility = "visible"
    }
    else  hidden[i].style.visibility = "hidden"
    }    
}