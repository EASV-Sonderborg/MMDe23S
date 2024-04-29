let quiz = document.querySelector("#quiz"); // Vælg quiz-elementet fra DOM
let question = quiz.querySelector(".question"); // Vælg spørgsmålsfeltet inde i quiz-elementet
let choices = quiz.querySelector(".choices"); // Vælg svarmulighedsfeltet inde i quiz-elementet

let scoreValue = quiz.querySelector(".scoreValue"); // Vælg scorefeltet inde i quiz-elementet

let score = 0; // Initialiser scoren til 0
let currentQuestionIndex = 0; // Initialiser indekset for det aktuelle spørgsmål til 0

//array med mine spørgsmål
const movieQuestions = [
    {
        question: "In which year was the first \"Star Wars\" film released?",
        choices: ["1977", "1983", "1990", "2001"],
        correctAnswer: "1977",
    },
    {
        question: "Who played the lead role in the film 'Forrest Gump'?",
        choices: ["Tom Cruise", "Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"],
        correctAnswer: "Tom Hanks",
    },
    {
        question: "Which film won the Oscar for Best Picture in 2020?",
        choices: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"],
        correctAnswer: "Parasite",
    },
    {
        question: "Which actor portrays the role of James Bond in 'Casino Royale'?",
        choices: ["Daniel Craig", "Pierce Brosnan", "Sean Connery", "Roger Moore"],
        correctAnswer: "Daniel Craig",
    },
    {
        question: "In which film does Johnny Depp portray the character Captain Jack Sparrow?",
        choices: ["Pirates of the Caribbean: The Curse of the Black Pearl", "The Lord of the Rings", "Pirates of the Caribbean: At World's End", "Avatar"],
        correctAnswer: "Pirates of the Caribbean: The Curse of the Black Pearl",
    },
    {
        question: "Which Quentin Tarantino film won the Oscar for Best Original Screenplay?",
        choices: ["Pulp Fiction", "Django Unchained", "The Hateful Eight", "Inglourious Basterds"],
        correctAnswer: "Pulp Fiction",
    },
    {
        question: "In which year was the first part of 'The Lord of the Rings' trilogy released?",
        choices: ["1999", "2001", "2003", "2005"],
        correctAnswer: "2001",
    },
    {
        question: "Who directed the film 'Inception'?",
        choices: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "James Cameron"],
        correctAnswer: "Christopher Nolan",
    },
    {
        question: "Who played the lead role in 'The Shawshank Redemption'?",
        choices: ["Morgan Freeman", "Tom Hanks", "Brad Pitt", "Tim Robbins"],
        correctAnswer: "Tim Robbins",
    },
    {
        question: "Which studio is known for producing the 'Marvel Cinematic Universe' films?",
        choices: ["Warner Bros.", "Universal Pictures", "Paramount Pictures", "Marvel Studios"],
        correctAnswer: "Marvel Studios",
    },
    {
        question: "Who portrays the role of Tony Stark / Iron Man in the Marvel films?",
        choices: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr.",
    },
    {
        question: "Which film won the Oscar for Best Picture in 2019?",
        choices: ["Green Book", "Bohemian Rhapsody", "The Shape of Water", "Moonlight"],
        correctAnswer: "Green Book",
    },
    {
        question: "Who directed the film 'Avatar'?",
        choices: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Peter Jackson"],
        correctAnswer: "James Cameron",
    },
    {
        question: "Which actress won the Academy Award for Best Actress in 2018?",
        choices: ["Meryl Streep", "Emma Stone", "Jennifer Lawrence", "Frances McDormand"],
        correctAnswer: "Frances McDormand",
    },
    {
        question: "Who played the character of Neo in 'The Matrix' trilogy?",
        choices: ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Leonardo DiCaprio"],
        correctAnswer: "Keanu Reeves",
    }
];
// Funktion til at vise et spørgsmål på skærmen
function displayQuestion() {
    if (currentQuestionIndex < movieQuestions.length) { // Hvis der er flere spørgsmål tilbage
        let currentQuestion = movieQuestions[currentQuestionIndex]; // Hent det aktuelle spørgsmål
        question.textContent = currentQuestion.question; // Vis spørgsmålet på skærmen
        choices.textContent = ""; // Ryd tidligere svarmuligheder

        // Opret knapper til svarmuligheder
        currentQuestion.choices.forEach(choice => {
            let button = document.createElement('button'); // Opret et knap-element
            button.textContent = choice; // Sæt teksten på knappen til svarmuligheden
            button.classList.add('choice'); // Tilføj CSS-klasse til knappen
            choices.appendChild(button); // Tilføj knappen til svarmulighedsfeltet

            // Tilføj en eventlytter til knappen for at håndtere klik
            button.addEventListener("click", () => {
                if (choice === currentQuestion.correctAnswer) { // Hvis svaret er korrekt
                    button.style.backgroundColor = 'green'; // Farv knappen grøn
                    button.style.color = 'white'; // Ændre teksten til hvid
                    score++; // Inkrementer scoren
                    scoreValue.textContent = score; // Opdater scoren på skærmen
                } else { // Hvis svaret er forkert
                    button.style.backgroundColor = 'red'; // Farv knappen rød
                    button.style.color = 'white'; // Ændre teksten til hvid
                    let correctIndex = currentQuestion.choices.indexOf(currentQuestion.correctAnswer); // Find indekset for det korrekte svar
                    choices.children[correctIndex].style.backgroundColor = 'green'; // Farv det korrekte svar grønt
                }
                button.disabled = true; // Deaktiver knappen for at forhindre flere klik
                setTimeout(() => {
                    currentQuestionIndex++; // Gå til næste spørgsmål
                    displayQuestion(); // Vis næste spørgsmål eller afslut quizzen
                }, 1000); // Vent 1 sekund, før næste spørgsmål vises
            })
        });
    } else {
        // Alle spørgsmål er blevet besvaret
        let totalScore = movieQuestions.length; // Samlet antal mulige point
        let message = `The quiz is over! You scored ${score} out of ${totalScore} points`; // Besked om afslutning af quizzen
        question.textContent = message; // Vis beskeden på skærmen
        choices.textContent = ""; // Ryd svarmulighederne
        // Fjern sektionen med scoren fra skærmen
        let scoreSection = document.querySelector('.score');
        scoreSection.style.display = 'none';
    }
}

// Funktion til at starte quizzen
function startQuiz() {
    score = 0; // Nulstil scoren
    scoreValue.textContent = score; // Opdater scoren på skærmen
    currentQuestionIndex = 0; // Nulstil indekset for det aktuelle spørgsmål
    displayQuestion(); // Start visningen af spørgsmål
}

// Start quizzen, når siden er indlæst
window.onload = startQuiz;