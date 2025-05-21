function getJSON() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      addData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getJSON()

const productSlider = document.querySelector(".productSlider");

function addData(data){
    console.log(data);
    cardsCount = data.length;
    data.forEach((item) => {
        const productCard = document.createElement("section");
        productCard.classList.add("productSlider__card");
        productSlider.appendChild(productCard);

        const productImg = document.createElement("img");
        productImg.src = item.image;
        productImg.classList.add("productSlider__cardImage");
        productCard.appendChild(productImg);

        const productTitle = document.createElement("h3");
        productTitle.classList.add("productSlider__cardTitle");
        productTitle.textContent = item.title;
        productCard.appendChild(productTitle);

        const productDescription = document.createElement("p");
        productDescription.classList.add("productSlider__cardDescription");
        productDescription.textContent = item.description;
        productCard.appendChild(productDescription);

        const productInfo = document.createElement("section");
        productInfo.classList.add("productSlider__cardFooter");
        productCard.appendChild(productInfo);

        const productPDF = document.createElement("p");
        productPDF.classList.add("productSlider__cardDetail");
        productPDF.textContent = `${item.pdfs}+PDFs`;
        productInfo.appendChild(productPDF);

        const productButtonIcon = document.createElement("img");
        productButtonIcon.src = item.icon;

        const productButton = document.createElement("a");
        productButton.classList.add("productSlider__cardButton");
        productButton.href = "componentProductPage.html";

        productButton.appendChild(productButtonIcon);
        productButton.appendChild(document.createTextNode(" More info "));

        productInfo.appendChild(productButton);
    });
}