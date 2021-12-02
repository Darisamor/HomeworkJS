var res = prompt("Please enter password (it's definetly not a 'wasd1234'):")

if (res == "wasd1234"){
    alert("Welcome! You're autorised!")
}
else if(res == "admin"){
    alert("Welcome, my Lord!")
}
else{
    alert("Password is wrong. Have a nice day!")
}