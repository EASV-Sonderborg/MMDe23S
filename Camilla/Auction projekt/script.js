const URL = 

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