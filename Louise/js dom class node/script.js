//types of nodes in the DOM//
//the docuent node (only one)
//element nodes
//attribute nodes
//text nodes

//ref: https://developer.mozilla.org/en-US/docs/Wen/ATP/NodeType

const title = document.querySelector(".header__title");
console.log(title.nodeType);
console.log(title.textContent);
console.log(title.innerHTML);

//nodevalue

console.log(title.firstChild.nodeValue);


//loop through a nodelist, returned by queryselectorALL

const propertiesItem = document.querySelectorAll("properties__items");
console.log(propertiesItem)

//2: loop thru the nodelist:
//option A: for..of loop
for(const element of propertiesItem){
    console.log(element);
}
//option B: ForEach()
propertiesItem.forEach((element) => {
    console.log(element);
})

//dom manipulation:
//1: create an HTML element
//2: add text the the element
//3:append the element to the DOM

//1: create element():

const NewListItem = document.createElement("li");

//2. textcontent
NewListItem.textContent = "length"

//3. appendChild():

const properties = document.querySelector(".properties") //the ul

properties.appendChild(NewListItem);