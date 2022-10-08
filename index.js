// DOM MANIPULATION

// 1. GetElementById()
// 2. getElementsByClassName()





// const title = document.getElementById('main-heading')
// console.log(title)

// document.getElementById('main-heading').innerHTML = "Favourite show";


// 2. getElementsByClassName

// const ListItem = document.getElementsByClassName('list-items');
// console.log(ListItem);


// 3. getElementByTagName

// const tagname = document.getElementsByTagName('li');
// console.log(tagname);


// 4.querySelector

// const container = document.querySelector('div')
// console.log(container)


// 5. querySelectorAll

// const container2 = document.querySelectorAll('div')
// console.log(container2)


// DOM MANIPULATION


// STYLING ELEMENT

// const title = document.querySelector('#main-heading');
// title.style.color = 'red'
// console.log(title)

// const title = document.querySelector('#main-heading');
// title.style.color = 'blue'


// const listItems = document.querySelectorAll('.list-items');


// for (i = 0; i < listItems.length; i++){
//   listItems[i].style.fontSize = '8rem'
// }

// console.log(listItems)



// CREATING ELEMENT

// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// adding Element
// ul.append(li)
// li.innerText = 'X-Men';

// Modifying Text

// const firsListItem = document.querySelector('.list-items');
// console.log(firsListItem.innerText)
// console.log(firsListItem.textContent)
// console.log(firsListItem.innerHTML)


// MODIFYING ATTRIBUTES & CLASSES

// const ul = document.querySelector('ul')
// const li = document.createElement('li')
// ul.append(li)
// li.innerText = 'T-Men';
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'))

// MODIFYING CLASSES

// li.classList.add('.list-items')
// li.classList.remove('.list-items')

// console.log(li.classList.contains('list-items'))


// Traverse the DOM


// Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode)


// CHILD NODE

// let ul = document.querySelector('ul')
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.childNodes[1].style.backgroundColor = 'red'


// SIBLING NODE TREVERSAL

// const ul = document.querySelector('ul')
// const div = document.querySelector('div')

// console.log(div.childNodes)

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)




// B EVENTLISTNERS
// i. Add directly to the button in html.
// ii. add eventlistern in JavaScript
// Direct application of listenner





