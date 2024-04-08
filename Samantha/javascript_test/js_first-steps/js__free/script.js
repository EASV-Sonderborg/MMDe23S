function checkAge() {
    let age = document.getElementById("myAge").value;//getElementbzId er gammel ikke bruge mere!!!
    let allowedMovies = document.getElementById("allowedMovies");

    allowedMovies.innerHTML = "";//innerHTML bliver ikke brugt --- istedet bruge textContent

    if (age >= 18) {
        allowedMovies.innerHTML = "<h3>Here are some movies:</h3><ul><li>Movie 1</li><li>Movie 2</li></ul>";
    } else if ( age >= 16) {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 18 years:</h3><ul><li>movie 1</li><li>movie 2</li></ul>";
    } else if (age >= 12) {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 16 years:</h3><ul><li>We Have a Ghost <br/> (2023)</li><li>Ghostbusters <br/> (1988)</li></ul>";
    } else if ( age >= 6) {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 12 years:</h3><ul><li>The Nightmare Before Christmas <br/> (1993)</li><li>Muppets Haunted Mansion <br/> (2021)</li></ul>";
    } else {
        allowedMovies.innerHTML = "<h3>Here are some movies for members <br/> under 6 years:</h3><ul><li>It's the Great Pumpkin, Charlie Brown <br/> (1966)</li><li>Super Monsters Save Halloween  <br/>(2018)</li></ul>";
    }
};


const movies = {
    categoryA : ['Movie 1', 'Movie 2'],
    categoryB : ['Movie 3', 'Movie 4'],
    categoryC : ['We Have a Ghost', 'Ghostbusters'],
    categoryD : ['The Nightmare Before Christmas', 'Muppets Haunted Mansion'],
    categoryE : ['Its the Great Pumpkin, Charlie Brown', 'Super Monsters Save Halloween']
};
console.log(movies);

function checkAge() {
let age = document.querySelector('.age').value;
let age__allowed = document.querySelector('.age__allowed');

if (age >= 18) {
    age__allowed.textContent = movies;
} else if (age >= 16) {
    age__allowed.textContent = categoryB + categoryC + categoryD + categoryE;
} else if (age >= 12) {
    age__allowed.textContent = categoryC + categoryD + categoryE;
} else if (age >= 6) {
    age__allowed.textContent = categoryD + categoryE;
} else {
    age__allowed.textContent = categoryE;
}
};

console.log(checkAge.textContent)


//createElement
//textContent
//(hvor).appendChild('hvad')