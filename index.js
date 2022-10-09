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




// const revealbutton = document.querySelector('.revealbtn');
// const hiddenContent = document.querySelector('.hiddencontent');

// function contentShow (){

//       if (hiddenContent.classList.contains('revealbtn')){
//             hiddenContent.classList.remove('revealbtn')
//       }else{
//             hiddenContent.classList.add('revealbtn')
//       }
// }

// revealbutton.addEventListener("click", contentShow);



// QUOTE PROJECT


let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = 
[
      
            {
                  quote: `"The best way to find yourself is to lose yourself in the service of others. "`,
                  person: `Mahatma Gandhi`
            },

            {
                  quote: `"If you want to live a happy life, tie it to a goal, not to people or things. "`,
                  person: `Albert Einstein`
            },


            {
                  quote: `"At his best, man is the nooblest of all animals; separated from law and justice he is the worst. "`,
                  person: `Aristotle`
            },


            {
                  quote: `"Your time is limited, so dont waste it living someone elses life."`,
                  person: `Steve Jobs`
            },

            {
                  quote: `"Tell me and i forget. Teach me and I remember. Involve me and i learn."`,
                  person: `Benjamin Franklin`
            },

            {
                  quote: `"It does not matter how slowly you go as long as you do not stop"`,
                  person: `Confucius`
            },


];



btn.addEventListener('click', function(){

      let random = Math.floor(Math.random() * quotes.length);
      quote.innerText = quotes[random].quote;
      person.innerText = quotes[random].person;
})

