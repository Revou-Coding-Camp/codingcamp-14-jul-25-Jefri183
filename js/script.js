showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("user-name").innerText = userName;
    }
}

function sendMessage() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        alert("Names must contain only letters and spaces (no numbers).");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (firstName && lastName && email && message) {
        const responseDiv = document.getElementById("form-response");
        responseDiv.innerHTML = `<p>Thank you, ${firstName} ${lastName}!</p>
                                 <p>Your message has been sent successfully.</p>
                                 <p>Email: ${email}</p>
                                 <p>Message: ${message}</p>`;
    } else {
        alert("Please fill in all fields.");
    }
}
