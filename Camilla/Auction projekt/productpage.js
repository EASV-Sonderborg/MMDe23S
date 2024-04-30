// STEP 1 – Get the URL from the current page
const queryString = window.location.search;
console.log(queryString);

// STEP 2 – Break the string into an object
const urlParams = new URLSearchParams(queryString);

// STEP 3 – Find the "id" part
const id = urlParams.get('itemid')
console.log(id);