// Create 100 eggs:

const width = window.innerWidth;
const height = window.innerHeight;
const section = document.querySelector('.eggs');

const colors = ['#f9ceee', '#e0cdff', '#c1f0fb', '#dcf9a8', '#ffebaf'];

for(let i = 0; i <= 5; i++) {
    const newEgg = document.createElement('div');
    // creating the look of the egg
    newEgg.classList.add('egg');
    const left = Math.random() * width;
    const top = Math.random() * height;
    //*console.log(left);
    newEgg.style.left = `${left}px`;
    newEgg.style.top = `${top}px`;

    const randomIndex = parseInt(colors.length * Math.random());
    console.log(randomIndex);
    const color = colors[randomIndex];

    newEgg.style.background = color;

    // random size: 1.40625
    const eggWidth = (Math.random() * 40) + 25;
    console.log(eggWidth);
    const eggHeight = eggWidth * 1.40625;

    newEgg.style.width = `${eggWidth}px`;
    newEgg.style.height = `${eggHeight}px`;


    // tilføj til section:
    section.appendChild(newEgg);

    /*
    newEgg.addEventListener('click', (event) => {
        event.target.remove();
    })*/
    //newEgg.addEventListener('click', eggClicked);
}

const allEggs = document.querySelectorAll('.egg');
// a random egg has surprise class:
const randomEggIndex = parseInt(allEggs.length * Math.random());
console.log(randomEggIndex);
console.log(allEggs[randomEggIndex]);
const randomEgg = allEggs[randomEggIndex];
randomEgg.classList.add('surprise');


// query all eggs and add eventlistener:

for(let egg of allEggs) {
    egg.addEventListener('click', (event) => {
        //console.log(event.target.classList.value);
            if(event.target.classList.value === 'egg surprise') {
                alert('TILLYKKE');
            }
            else {
                console.log('nitte');
                event.target.remove();
            }
    })
}

