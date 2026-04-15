// Check Login
if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
}

// Show User Info
const user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {
    document.getElementById("userInfo").textContent =
        "Hello, " + user.name + " (" + user.email + ")";
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "home.html";
}