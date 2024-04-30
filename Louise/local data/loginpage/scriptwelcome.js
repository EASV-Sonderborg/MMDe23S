function displayWelcomeMessage() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeMessage').textContent = "Welcome " + username;
    } else {
        window.location.href = 'login.html';
    }
}       