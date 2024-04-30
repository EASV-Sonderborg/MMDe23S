document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        window.location.href = 'welcome.html';
    } else {
        alert('Please enter your fucking username.');
    }
});