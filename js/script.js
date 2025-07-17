showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("user-name").innerText = userName;
    }
}

function sendMessage() {
    let message = document.getElementById("user-message").value;
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("div");
    newMessage.classList.add("chat-message");
    newMessage.innerText = message;
    chatBox.appendChild(newMessage);
}