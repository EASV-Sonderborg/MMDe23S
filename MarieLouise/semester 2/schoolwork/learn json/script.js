// DOM queries:
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

const url ='data.json';

//when we click button we get the data
btn.addEventListener('click',() =>{
    fetch(url)
    .then((response) => {
        //if response is not ok
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Data received:', data);
        addData(data); //call function and add data as a parameter
    })
    .catch((error) => {
        console.log('Error', error);
    });
});
//getting data from json file
function addData(data) {
for(const person of data) {
    console.log(person.firstName, person.lastName, person.age);
    //create p element
    const newP = document.createElement('p');
    //add text content to p
    newP.textContent = `${person.firstName} ${person.lastName} er ${person.age} år gammel`;
    //appendChild
    container.appendChild(newP);

    const newListItem = document.createElement('ul');

    for(const hobbies of person.hobbies){
    console.log(hobbies);
    
    const newListItem = document.createElement('li');
    newListItem.textContent = hobbies;
    container.appendChild(newListItem);
    }  
}
}
