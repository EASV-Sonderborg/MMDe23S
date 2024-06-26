// Scroll Event Listener
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (header && window.scrollY > 50) {
        header.classList.add("header--scrolled");
        header.classList.remove("header--transparent");
    } else if (header) {
        header.classList.add("header--transparent");
        header.classList.remove("header--scrolled");
    }
});

window.addEventListener("scroll", function() {
    const header = document.querySelector(".quiz__process");
    if (header && window.scrollY > 80) {
        header.classList.add("quiz__process--scrolled");
        header.classList.remove("quiz__process--transparent");
    } else if (header) {
        header.classList.add("quiz__process--transparent");
        header.classList.remove("quiz__process--scrolled");
    }
});

// Menu Button Click Event Listener
const menuButton = document.querySelector(".menu-button");
if (menuButton) {
    menuButton.addEventListener("click", function() {
        const navMenu = document.querySelector(".nav-menu");
        if (navMenu) {
            navMenu.classList.add("nav-menu--open");
        }
    });
}

// Close Button Click Event Listener
const closeButton = document.querySelector(".close-button");
if (closeButton) {
    closeButton.addEventListener("click", function() {
        const navMenu = document.querySelector(".nav-menu");
        if (navMenu) {
            navMenu.classList.remove("nav-menu--open");
        }
    });
}

// Quiz 
document.addEventListener('DOMContentLoaded', function() {
    let answeredQuestions = 0;
    const totalQuestions = 5; // Set the total number of questions

    fetch('quizCastleSon.json')
        .then(response => response.json())
        .then(quizData => {
            updateProgress();

            const quizContainer = document.querySelector('#quiz');

            quizData.forEach((question, index) => {
                const questionElement = document.createElement('section');
                questionElement.classList.add('question');

                // Header Section for Question Number and Map Button
                const questionInfo = document.createElement('section');
                questionInfo.classList.add('question__info');

                const questionNumberElement = document.createElement('h2');
                questionNumberElement.textContent = question.questionNumber;
                questionNumberElement.classList.add('question__number');
                questionInfo.appendChild(questionNumberElement);

                const mapButton = document.createElement('button');
                mapButton.classList.add('map-button');
                mapButton.innerHTML = `<svg width="45px" height="45px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M83.117 0c-6.88 0-12.698 4.735-14.379 11.092l-1.851-.86a2.5 2.5 0 0 0-2.108 0L34.166 24.453L3.553 10.233A2.5 2.5 0 0 0 0 12.5v70.287a2.5 2.5 0 0 0 1.447 2.268l31.666 14.709a2.5 2.5 0 0 0 2.108 0l30.613-14.22l30.613 14.22c1.657.769 3.553-.44 3.553-2.266V27.211a2.5 2.5 0 0 0-1.447-2.268l-3.23-1.502l1.011-1.722c.23-.417.413-.861.57-1.315A14.645 14.645 0 0 0 98 14.842C98 6.685 91.298 0 83.117 0zm0 6.953c4.405 0 7.908 3.496 7.908 7.889c0 4.392-3.503 7.885-7.908 7.885s-7.908-3.493-7.908-7.885c0-4.393 3.503-7.889 7.908-7.889zm-16.166 8.822l1.377.641a14.726 14.726 0 0 0 2.625 6.938l10.348 17.89c1.45 1.894 2.414 1.534 3.619-.1l7.857-13.373L95 28.805V93.58L67.322 80.723l-.226-39.676c.408.088.815.173 1.224.27l.92-3.891a63.862 63.862 0 0 0-2.168-.473l-.12-21.178zm-2.998.354l.115 20.336a33.73 33.73 0 0 0-3.113-.281l-.148 3.996c1.088.04 2.185.158 3.285.318l.23 40.234l-28.676 13.323l-.369-64.604L63.953 16.13zM5 16.418l27.275 12.67l.371 64.947L5 81.191V16.418zm51.543 20.039c-1.377.247-2.786.688-4.098 1.451a9.932 9.932 0 0 0-3.732 3.82l3.502 1.932a6.003 6.003 0 0 1 2.226-2.289l.006-.004l.006-.004c.807-.47 1.768-.786 2.797-.97l-.707-3.936zm16.666 2.031l-1.133 3.834c2.503.74 4.982 1.59 7.447 2.51l1.399-3.748c-2.532-.944-5.1-1.824-7.713-2.596zm-26.002 7.596l-.03.158l-.003.014c-.499 2.831-.446 5.617-.334 8.265l3.996-.17c-.109-2.569-.132-5.055.277-7.388l.024-.125l-3.93-.754zm3.867 12.21l-3.99.27c.18 2.669.372 5.285.365 7.85l4 .01c.008-2.77-.195-5.478-.375-8.13zm-3.824 11.89c-.11.953-.274 1.88-.514 2.77l-.002.005l-.002.008c-.35 1.335-.939 2.571-1.761 3.539l3.047 2.59c1.288-1.515 2.105-3.298 2.58-5.102l.002-.006c.3-1.116.495-2.24.623-3.35l-3.973-.454zm-33.768 3.898l-1.796 3.574c2.48 1.247 5.045 2.278 7.628 3.17l1.305-3.781c-2.455-.847-4.852-1.815-7.137-2.963zm10.836 4.113l-1.064 3.856c2.646.731 5.366 1.312 8.146 1.625l.446-3.975c-2.521-.283-5.035-.817-7.528-1.506zm18.141.282c-1.992 1.02-4.397 1.397-6.87 1.427l.05 4c2.834-.034 5.864-.444 8.642-1.867l-1.822-3.56z" fill="#000000" fill-rule="evenodd"></path></svg>`;
                questionInfo.appendChild(mapButton);

                const mapImage = document.createElement('img');
                mapImage.src = question.mapUrl;
                mapImage.classList.add('map-image');
                questionElement.appendChild(mapImage);

                mapButton.addEventListener('click', () => {
                    mapImage.classList.toggle('active');
                });

                questionElement.appendChild(questionInfo);

                // Content Section for Question Image, Text and Subtitle
                const questionContentSection = document.createElement('section');
                questionContentSection.classList.add('question__content');

                const imgElement = document.createElement('img');
                imgElement.src = question.imageUrl;
                imgElement.classList.add('question__image');
                questionContentSection.appendChild(imgElement);

                const questionTextElement = document.createElement('h3');
                questionTextElement.textContent = question.questionText;
                questionTextElement.classList.add('question__text', 'section__headline');
                questionContentSection.appendChild(questionTextElement);

                const subtitleElement = document.createElement('h3');
                subtitleElement.textContent = question.questionSubtitle;
                subtitleElement.classList.add('question__subtitle', 'section__headline');
                questionContentSection.appendChild(subtitleElement);

                questionElement.appendChild(questionContentSection);

                // Options Section
                const optionsList = document.createElement('ul');
                optionsList.classList.add('options');

                question.options.forEach(option => {
                    const optionItem = document.createElement('li');
                    const optionButton = document.createElement('button');
                    optionButton.classList.add('option__button');
                    optionButton.textContent = `${option.optionLetter}. ${option.optionText}`;
                    optionItem.appendChild(optionButton);
                    optionsList.appendChild(optionItem);

                    optionButton.addEventListener('click', () => {
                        if (option.isCorrect) {
                            optionButton.classList.add('correct');
                        } else {
                            optionButton.classList.add('incorrect');
                        }
                        answeredQuestions++;
                        updateProgress();
                    });
                });

                questionElement.appendChild(optionsList);
                quizContainer.appendChild(questionElement);
            });
        });

    function updateProgress() {
        const progressElement = document.querySelector('.answers');
        if (progressElement) {
            progressElement.textContent = `${answeredQuestions}/${totalQuestions}`;
        }
    }
});