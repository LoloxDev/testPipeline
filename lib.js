export function add(n1, n2){
    return n1+n2;
}

function displayMessage(userInput) {
    var message = "Hello, " + userInput + "! Welcome to our website.";
    document.getElementById("welcome-message").innerHTML = message;
}
