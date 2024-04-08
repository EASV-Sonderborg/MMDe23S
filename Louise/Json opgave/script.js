//Spørg Michaela om bog + hund xdd + forskel
// DOM queries:
const button = document.querySelector(".button");
const container = document.querySelector(".container");

const url = "data.json";

// When button is clicked the data is fetched
button.addEventListener("click", () => {
    fetch(url)
    .then((response) => {
        // If response is not ok: 
        if (!response.ok)
            throw new Error(`HTTP ERROR! status ${response.status}`);

        return response.json();
    })
    .then((data) => {
        console.log("data received:", data);
        addData(data); //call the function, and add the data as a parameter
    })
    .catch((error) => {
        console.error("error", error);
    });
}); 

//getting the data fro the JSON file:
function addData(data) {
    for (const person of data) {
        console.log(person.firstName, person.age);

        // Create p element:
        const paragraph = document.createElement('p');

        // Add textContent to p:
        paragraph.textContent = `${person.firstName} is Age: ${person.age}`;

        // Create ul element:
        const hobbyList = document.createElement('ul');

        // Loop through hobbies and create li elements:
        for (const hobby of person.hobby) {
            const listItem = document.createElement('li');
            listItem.textContent = hobby;
            hobbyList.appendChild(listItem);
        }

        // Append hobbyList to paragraph:
        paragraph.appendChild(hobbyList);

        // AppendChild:
        container.appendChild(paragraph);
    }
}