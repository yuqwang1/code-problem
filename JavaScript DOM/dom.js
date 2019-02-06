// Examine the document object

// console.dir(document);
//
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
//
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// Get Elemnt by ID //
console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent = 'Hello';
//inner Text did not show the style;
// headerTitle.innerText = 'Goodbye';

headerTitle.innerHTML = '<h3>Hello</h3>';

// QUERYSELECTOR only grab the first one
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector("input[type='submit']");
submit.value = 'SEND';

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

//QUERYSELECTORALL select all elements under the name;
