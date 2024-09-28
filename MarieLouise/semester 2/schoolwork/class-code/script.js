console.log(localStorage);

const siteName = "EASV";
const siteDescribtion = "Educations that build skills";
// JS object
const siteData = {
    siteName: siteName,
    siteDescribtion: siteDescribtion
};

localStorage.setItem("siteName", siteName);
localStorage.setItem("siteDescribtion", siteDescribtion);

// stringify object:
localStorage.setItem("siteData", JSON.stringify (siteData));

//get data:
const data = JSON.parse(localStorage.getItem("siteData"));
console.log(data);

//add siteName to h1:
const heading = document.querySelector(".intro__heading");
heading.textContent = localStorage.getItem("siteName");


const button = document.querySelector(".username__button");

button.addEventListener("click",()=>{
const input = document.querySelector(".username__input");
const userName = input.value;

console.log(localStorage);
if(input.value===""){
    alert("du har ikke skrevet noget");
    event.preventDefault();
}
else{
    localStorage.setItem("userName", userName);   
}
});

