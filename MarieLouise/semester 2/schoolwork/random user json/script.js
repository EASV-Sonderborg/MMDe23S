const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const url = "https://randomuser.me/api/";


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

function addData(data) {
    const user = document.createElement("section")
    container.appendChild(user);

    const profileImg = document.createElement('img');
   profileImg.src = `${data.results[0].picture.large}`;
   user.appendChild(profileImg);

   const newH2 = document.createElement('h2');
   newH2.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} ${data.results[0].dob.age} years old`;
   user.appendChild(newH2);

   const newH3 = document.createElement('h3');
   newH3.textContent = `${data.results[0].location.country}`;
   user.appendChild(newH3);

   if(data.results[0].gender =="female"){
    user.classList.toggle("female")
   }
   else{
    user.classList.toggle("male")
   }
}




//console.log(
    //data.results[0].name.title, 
    //data.results[0].name.first, 
    //data.results[0].name.last, 
    //data.results[0].dob.age);