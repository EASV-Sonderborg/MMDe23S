function checkAge() {
    let age = document.getElementById("myAge").value;
    let allowedMovies = document.getElementById("allowedMovies");

    allowedMovies.innerHTML = "";

    if (age >= 18) {
        allowedMovies.innerHTML = "<h3>Here are some movies:</h3><ul><li>Movie 1</li><li>Movie 2</li></ul>";
    } if ( age >= 16) {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 18 years:</h3><ul><li>movie 1</li><li>movie 2</li></ul>";
    } if (age >= 12) {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 16 years:</h3><ul><li>We Have a Ghost <br/> (2023)</li><li>Ghostbusters <br/> (1988)</li></ul>";
    } if ( age >= 6) {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 12 years:</h3><ul><li>The Nightmare Before Christmas <br/> (1993)</li><li>Muppets Haunted Mansion <br/> (2021)</li></ul>";
    } else {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 6 years:</h3><ul><li>It's the Great Pumpkin, Charlie Brown <br/> (1966)</li><li>Super Monsters Save Halloween  <br/>(2018)</li></ul>";
    }
};
