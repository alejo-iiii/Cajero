document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the logged-in user's data from local storage
    const loggedInUserData = JSON.parse(localStorage.getItem("loggedInUser"));

    // Check if the user is logged in
    if (loggedInUserData) {
        // Extract user information
        const userName = loggedInUserData.userName;
        let balance = loggedInUserData.balance;

        // Display user information on the page
        const userElement = document.getElementById("user");
        const balanceElement = document.getElementById("userBalance");

        userElement.textContent = `Hola, ${userName}`;
        balanceElement.textContent = `Tu saldo es de $${balance}`;

        // Add event listeners to the deposit and withdraw buttons
        const depositButton = document.getElementById("suma");
        const withdrawButton = document.getElementById("resta");

        depositButton.addEventListener("click", function() {
            const amount = parseFloat(prompt("Ingrese el monto a depositar:"));
            if (!isNaN(amount) && amount > 0) {
                // Check if the deposit amount does not exceed the maximum balance limit
                if (balance + amount > 990) {
                    alert("No puede depositar más de $990.");
                } else {
                    balance += amount;
                    loggedInUserData.balance = balance;
                    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserData));
                    balanceElement.textContent = `Tu saldo es de $${balance}`;
                }
            } else {
                alert("Ingrese un monto válido.");
            }
        });

        withdrawButton.addEventListener("click", function() {
            const amount = parseFloat(prompt("Ingrese el monto a retirar:"));
            if (!isNaN(amount) && amount > 0 && amount <= balance) {
                // Check if the withdrawal amount does not exceed the minimum balance limit
                if (balance - amount < 10) {
                    alert("No puede retirar más fondos, su saldo no puede ser inferior a $10.");
                } else {
                    balance -= amount;
                    loggedInUserData.balance = balance;
                    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserData));
                    balanceElement.textContent = `Tu saldo es de $${balance}`;
                }
            } else {
                alert("Ingrese un monto válido o un monto menor o igual a su saldo actual.");
            }
        });

        const inicioButton = document.getElementById("Inicio");
        inicioButton.addEventListener("click", function() {
            window.location.href = "index.html"; // Change "login.html" to the actual login page URL
        });

    } else {
        // Redirect to the login page if the user is not logged in
        window.location.href = "login.html";
    }
});


//igresar monto
//intrfaz para ingrsar
//obtener valor del input
//obtener el saldo actual
//operación y condiciones
//guardar saldo nuevo
//mostrar saldo nuevo


//retirar monto