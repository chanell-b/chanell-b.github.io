//declaring a variable Greeting
const greeting = document.getElementById("greeting")

//places the box in the center
greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"

//Shows the question to the user and the default value 
const username = window.prompt("What's your name?", "Name goes here...")

//Message back to the user that greets them
greeting.innerHTML = "Welcome to my website, " + username + "!"