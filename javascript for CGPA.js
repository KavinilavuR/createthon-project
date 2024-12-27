function validateLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Add your logic to validate login credentials
    alert("Login successful!");
    showDashboard();
    return false; // Prevent form submission
}

function validateRegistration() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Add your logic to save registration details
    alert("Registration successful!");
    showDashboard();
    return false; // Prevent form submission
}

function showDashboard() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Welcome to the Dashboard</h1>
        <p>You have successfully logged in or registered.</p>
        <a href="file:///C:/Users/kavin/Downloads/HTML/sample%20cgpa%20calculator.html" style="padding: 10px 20px; font-size: 16px; background-color: #0056b3; color: white; text-decoration: none; border-radius: 5px;">Go to CGPA Calculator</a>
    `;
}