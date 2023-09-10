document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const userNameElement = document.getElementById("userName");
    const messageElement = document.getElementById("message");

    userNameElement.textContent = name;
    messageElement.style.display = "block";

    document.getElementById("name").value = ""; 
    document.getElementById("email").value = "";
});
