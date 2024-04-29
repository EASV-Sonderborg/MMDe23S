/**
 * types of nodes in the DOM:
 * - the document node (only one)
 * - element nodes
 * - attribute nodes
 * - text nodes
 * 
 * Property: nodeType:
 * Ref: https://developer.mozilla.org/en-US/docs/Wen/ATP/NodeType
*/ 

const title = document.querySelector('.header__title');
console.log(title.nodeType);
console.log(document.nodeType);
console.log(title.textContent);
console.log(title.innerHTML);

// nodevalue - property:

console.log(title.firstChild.nodeValue);


// Loop trough a nodeList, returned by querySelectorAll:

// 1: DOM query on the list items:

const propertiesItem = document.querySelectorAll(".properties__item"); 
console.log(propertiesItem);

// Loop trough the nodeList:
// Option A: for...of loop
for(const element of propertiesItem){
    console.log(element);
}

// Option B: forEach()
propertiesItem.forEach((element) => {
    console.log(element);
})

/**
 * DOM manipulation:
 * 1: Create an HTML element
 * 2: Add text to the element
 * 3: Append the element to the DOM
 */

// 1: create element():
const newListItem = document.createElement('li');
console.log(newListItem);

// 2: textContent:
newListItem.textContent = 'length';
console.log(newListItem);

// 3: appendChild:
const properties = document.querySelector('.properties'); //the <ul>

properties.appendChild(newListItem);
console.log(newListItem);
