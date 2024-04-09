document.addEventListener("DOMContentLoaded", function() {
    const loggedInUserData = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUserData) {
        const userName = loggedInUserData.userName;
        let balance = loggedInUserData.balance;

        const userElement = document.getElementById("user");
        const balanceElement = document.getElementById("userBalance");

        userElement.textContent = `Hola, ${userName}`;
        balanceElement.textContent = `Tu saldo es de $${balance}`;

        const depositButton = document.getElementById("suma");
        const withdrawButton = document.getElementById("resta");

        depositButton.addEventListener("click", function() {
            const amount = parseFloat(prompt("Ingrese el monto a depositar:"));
            if (!isNaN(amount) && amount > 0) {
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
            window.location.href = "index.html";
        });

    } else {
        window.location.href = "login.html";
    }
});
