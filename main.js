const form = document.querySelector("#loginForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // obtener valores input
    const userInput = form.querySelector("[name='userInput']").value;
    const passInput = form.querySelector("[name='passInput']").value;

    // validar credenciales
    const user = accounts.find(account => account.userMail === userInput && account.userPass.toString() === passInput);

    if (user) {
        // guardar en local storage lod datos del usuario
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // redireccionar
        window.location.href = "home.html"; // Change "home.html" to the URL of your home page
    } else {
        alert("Invalid username or password");
    }
});
