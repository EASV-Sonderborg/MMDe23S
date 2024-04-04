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
  // Update the DOM with the received data
  // Add your own code here
  const lakes = document.querySelector(".lakes");
  // Update the DOM with the received data
  // Add your own code here
  const lakeArticle = document.createElement("article");
  lakeArticle.classList.add("lake");
  lakes.appendChild(lakeArticle);

  const lakeName = document.createElement("h2");
  lakeName.classList.add("lakename");
  lakeName.textContent = `${item.name};`;
  lakeArticle.appendChild(lakeName);

  const lakeTemp = document.createElement("h3");
  lakeTemp.classList.add("laketempature");
  lakeTemp.textContent = `${item.temperature.toFixed(1).replace(".", ",")}°C`;
  lakeArticle.appendChild(lakeTemp);

  const lakeUpdate = document.createElement("p");
  lakeUpdate.classList.add("lake__updated");
  lakeUpdate.textContent = `Sidst opdateret for ${item.lastUpdatedInHoursAgo} timer og ${item.lastUpdatedInMinutesAgo} minutter siden`;
  lakeArticle.appendChild(lakeUpdate);

  if (item.temperature <= 4) {
    lakeArticle.classList.add("--freezing");
  } else if (item.temperature <= 12) {
    lakeArticle.classList.add("--cold");
  } else if (item.temperature <= 16) {
    lakeArticle.classList.add("--medium");
  } else {
    lakeArticle.classList.add("--warm");
  }

  if (item.lastUpdatedInHoursAgo <= 0) {
    lakeUpdate.textContent = `Sidst opdateret ${item.lastUpdatedInMinutesAgo} minutter siden`;
  }
}
