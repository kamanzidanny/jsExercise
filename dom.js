// examine THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[9]);

// document.all[9].textContent = "Hello";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// DOM SELECTORS
// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello!</h3>'

//* styling *//

// header.style.border = 'solid 3px #000';
//loop through elements
// var list = document.getElementsByClassName('list-group-item');
// for (var i = 0; i < list.length; i++){
//     list[i].style.backgroundColor = 'yellow';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// // var input = document.querySelector('input');
// // input.value = 'Hello world'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send'
// // this will change first list item to red
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'
// // this will change last list item to blue
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'
// // this will change last list item to green
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green'

// QUERYSELCTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// children (children is  better than childNodes)
// console.log(itemList.children);
// console.log(itemList.children[0]);
// itemList.children[0].style.backgroundColor = 'yellow';

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);

// createElement
// create a div
// var newDiv = document.createElement('div');
// add class
// newDiv.className = 'helloClass';
// add id
// newDiv.id = 'helloId';
// add attribute
// newDiv.setAttribute('title', 'hello attribute');

//create text node
// var newDivText = document.createTextNode('Hello World');
// add a text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '40px';
// console.log(newDiv);

// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
    // console.log('button Clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '</h3>';

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);
    
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }

var button = document.getElementById('button');
// click event
// button.addEventListener('click', runEvent);
// double click event
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

function runEvent(e) {
    console.log('Event Type: ' + e.type);
}