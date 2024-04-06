let users = [];

function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email already registered. Please use a different email.');
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

    document.getElementById('registrationForm').reset();

    alert('Registration successful!');

    console.log('Registered User:', newUser);
}
function openWelcomeTab(userName) {
    const welcomeMessage = `Welcome, ${userName}!`;

    // Open a new tab
    const newTab = window.open('', '_blank');

    // Write welcome message to the new tab
    newTab.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                h1 {
                    font-size: 36px;
                    color: #333;
                    text-align: center;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <h1>${welcomeMessage}</h1>
        </body>
        </html>
    `);
}


function signInUser() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Sign in successful!');
        openWelcomeTab(user.name); // Call the function to open a new tab with welcome message
    } else {
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('Incorrect password. Please try again.');
        } else {
            alert('Please register first.');
        }
    }
}