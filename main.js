const form = document.querySelector("#loginForm");

// Event listener for the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Get the values entered by the user
    const userInput = form.querySelector("[name='userInput']").value;
    const passInput = form.querySelector("[name='passInput']").value;

    // Check if the user exists in the accounts array
    const user = accounts.find(account => account.userMail === userInput && account.userPass.toString() === passInput);

    if (user) {
        // Save the logged-in user's data to local storage
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Redirect to the home page
        window.location.href = "home.html"; // Change "home.html" to the URL of your home page
    } else {
        // Display an error message if authentication fails
        alert("Invalid username or password");
    }
});