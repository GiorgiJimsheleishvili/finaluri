function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function togglePassword() {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    
    if (!name || !email) {
        alert("All fields must be filled!");
        event.preventDefault();
    }
});
