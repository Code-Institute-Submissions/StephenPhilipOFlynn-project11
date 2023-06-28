document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Email submitted! Please refresh this page if you wish to resubmit a different email.";
});