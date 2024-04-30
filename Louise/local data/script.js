const siteName = "EASV";
const siteDescription = "Educations that build skills";

// 
const siteData = {
    siteName: siteName,
    siteDescription: siteDescription
};

localStorage.setItem("siteName", siteName);

localStorage.setItem("sitDescription", siteDescription);

//stringify object

localStorage.setItem("siteData", JSON.stringify(siteData));

//get data:
const data = JSON.parse(localStorage.getItem("siteData"));
console.log(data)

// add siteName to h1
const heading = document.querySelector(".intro__heading");

heading.textContent = localStorage.getItem("siteName");
