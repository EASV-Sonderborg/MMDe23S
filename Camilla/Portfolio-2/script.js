const button = document.querySelector('.unfold__button');
const section = document.querySelector('.projectInfo__descriptions');

button.addEventListener('click', () => {
    section.classList.toggle('active');
    button.classList.toggle('active');
});