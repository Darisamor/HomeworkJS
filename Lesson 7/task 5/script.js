function start(){
    let sites = document.querySelectorAll('a');
    for (let i = 0; i < sites.length; i++){
        if(sites[i].getAttribute('href') == `/http://internal.com./`) break
        if(sites[i].getAttribute('href') == `/http://*/` || sites[i].getAttribute('href') == `/ftp://*/`){
            sites[i].setAttribute('class', "external-red");
        }
    }

    let red = document.getElementsByClassName("external-red")
    for (let i = 0; i < red.length; i++){
        red[i].style.backgroundColor = "red"
    }
}