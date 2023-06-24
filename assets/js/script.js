document.getElementById("button-one").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Form submitted!";
});