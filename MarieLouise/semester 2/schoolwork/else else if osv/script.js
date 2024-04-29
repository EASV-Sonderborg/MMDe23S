const searchButton = document.querySelector('.assignmentOne__button');
searchButton.addEventListener('click',search);
function search(){
    const inputField = document.querySelector('.assignmentOne__input').value;
    const dogSection = document.querySelector('.assignmentOne__dogImages');
    const catSection = document.querySelector('.assignmentOne__catImages');
    const birdSection = document.querySelector('.assignmentOne__birdImages');
    if(inputField === 'dog'||inputField ==='Dog'||inputField ==='DOG'){
        dogSection.classList.remove('--hidden');
        catSection.classList.add('--hidden');
        birdSection.classList.add('--hidden');
    }

    else if(inputField ==='cat'||inputField ==='Cat'||inputField ==='CAT'){
        catSection.classList.remove('--hidden');
        dogSection.classList.add('--hidden');
        birdSection.classList.add('--hidden');
    }

    else if(inputField ==='bird'||inputField ==='Bird'||inputField ==='BIRD'){
        birdSection.classList.remove('--hidden');
        dogSection.classList.add('--hidden');
        catSection.classList.add('--hidden');
    }

    else if(inputField !==''){
        alert(`${inputField} er ikke et kældedyr!?`); //hedder template litterals
    }

    else{
        alert('Search for an animal')
    }
}




//assignment 2: counter 

let counterDisplay = document.querySelector('.counter__display');
const counterMinus = document.querySelector('.counter__minus');
const counterPlus = document.querySelector('.counter__plus');
const counterReset = document.querySelector('.counter__reset')
let count = 0;

counterMinus.addEventListener('click',()=>{
    count--;
    updateDisplay(count);
});

counterPlus.addEventListener('click',()=>{
    count++;
    updateDisplay(count);
});

counterReset.addEventListener('click',()=>{
    count = 0;
    counterDisplay.textContent = count;
})


function updateDisplay(count) {
    counterDisplay.textContent = count;
}