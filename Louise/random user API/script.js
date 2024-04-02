document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const userDataDiv = document.getElementById("userData");

    generateButton.addEventListener("click", function() {
        fetchUserData();
    });

    function fetchUserData() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                displayUserData(data);
            },
            error: function(xhr, status, error) {
                console.error("Error fetching user data:", error);
            }
        });
    }

    function displayUserData(data) {
        const user = data.results[0];
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const email = user.email;
        const username = user.login.username;

        const userDataHTML = `
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Username:</strong> ${username}</p>
        `;

        userDataDiv.innerHTML = userDataHTML;
    }
});