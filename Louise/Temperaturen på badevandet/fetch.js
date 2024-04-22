// –––––––––––––––––––––––––––––––––––––––––––––––––––
// PART 1 – GET THE JSON FILES THROUGH A HTTP URL
// –––––––––––––––––––––––––––––––––––––––––––––––––––

//  This function is used for loading a JSON file from an URL
function getJSON(URL) {
  // Make a GET request using the Fetch API
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        // If the request does not return 300 OK
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Pass the received data on to the function that formats it
      console.log("Data received:", data);
      formatData(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
    });
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––
// PART 2 – FORMAT THE DATA AS YOU WANT IT TO BE
// –––––––––––––––––––––––––––––––––––––––––––––––––––

// This handles the received data and formats into an item object
function formatData(data) {
  // Since the received data is an object with just one child,
  // transfer that child to the variable
  data = data[0];

  // Build data object
  let item = {};

  // Add the name of the lake
  //    Problem:
  //    In one instance, the data.Location is NOT the name of the lake

  if (data.Location === "De Små Fisk") {
    // This is the problematic one
    item.name = "Brassø";
  } else {
    // For all others, just do this
    item.name = data.Location;
  }

  // Add temperature, but convert from string to FLOAT
  item.temperature = parseFloat(data.Temperature);

  // Add the timestamp for when the data was last updated
  item.lastUpdatedTimestamp = data.TimeStampLocal;

  // Calculate how long since last updated, both hours and minutes
  item.lastUpdatedInHoursAgo = parseInt(
    new Date(Date.now() - Date.parse(data.TimeStampLocal)).getHours()
  );
  item.lastUpdatedInMinutesAgo = parseInt(
    new Date(Date.now() - Date.parse(data.TimeStampLocal)).getMinutes()
  );

  // Output the item in console for debugging
  console.log(item);

  // Send object to function that populates the DOM
  populateDOM(item);
}

// –––––––––––––––––––––––––––––––––––––––––––––––––––
// PART 3 – INSERT DATA IN THE DOM
// –––––––––––––––––––––––––––––––––––––––––––––––––––
//  Receives the formatted data as item object
//  and inserts it into the DOM

function populateDOM(item) {
  // Create elements for the lake
  const lakeArticle = document.createElement('article'); // Create the <article> element for lake
  lakeArticle.classList.add('lake'); // Add the 'lake' class to <article>

  const lakeName = document.createElement('h2'); // Create <h2> element for lake name
  lakeName.classList.add('lake__name'); // Add 'lake__name' class to <h2>
  lakeName.textContent = item.name; // Set lake name text

  const lakeTemperature = document.createElement('h3'); // Create <h3> element for temperature
  lakeTemperature.classList.add('lake__temperature'); // Add 'lake__temperature' class to <h3>
  // Format temperature and append "°C"
  lakeTemperature.textContent = item.temperature.toFixed(1).replace('.', ',') + "°C";

  const lastUpdated = document.createElement('p'); // Create <p> element for last updated
  lastUpdated.classList.add('lake__updated'); // Add 'lake__updated' class to <p>

  // Check if the hours part of last updated time is 0
  if (item.lastUpdatedInHoursAgo === 0) {
    // Display only minutes if hours part is 0
    lastUpdated.textContent = `Sidst opdateret ${item.lastUpdatedInMinutesAgo} minutter siden`;
  } else {
    // Display both hours and minutes
    lastUpdated.textContent = `Sidst opdateret ${item.lastUpdatedInHoursAgo} timer og ${item.lastUpdatedInMinutesAgo} minutter siden`;
  }

  // Add modifier class based on temperature range (optimer måske)
  if (item.temperature < 4) {
    lakeArticle.classList.add('--frozen'); // Add '--frozen' class for temperatures below 4°C
  } else if (item.temperature >= 4 && item.temperature < 12) {
    lakeArticle.classList.add('--cold'); // Add '--cold' class for temperatures between 4°C and 12°C
  } else if (item.temperature >= 12 && item.temperature < 16) {
    lakeArticle.classList.add('--medium'); // Add '--medium' class for temperatures between 12°C and 16°C
  } else {
    lakeArticle.classList.add('--warm'); // Add '--warm' class for temperatures above 16°C
  }

  // Append elements to .lakes
  lakeArticle.appendChild(lakeName); // Append lake name to lake article
  lakeArticle.appendChild(lakeTemperature); // Append temperature to lake article
  lakeArticle.appendChild(lastUpdated); // Append last updated time to lake article

  document.querySelector('.lakes').appendChild(lakeArticle); // Append lake article to .lakes element
}