//-------------- Selecting books Elements  -----------------

const bookList = document.querySelector('#book-list');

//-------------- Converting a NodeList to an array that contains all book names -----------------

const booksList = Array.from(document.querySelectorAll('#book-list li .name'));

//-------------- Adding the amount of copies every book sold on amazon (random number) -----------------

booksList.forEach((book, i) => {
  book.textContent = `${book.textContent} (Sold ${Math.ceil(
    Math.random() * 1000
  )} copies on Amazon)`;
});

//-------------- injecting an important tip  -----------------

bookList.innerHTML +=
  '<h2 id="small-title">Don\'t buy books about front end developing, you have enough information on the internet.</h2>';

//-------------- injecting a catch phrase to the title using DOM traversing  -----------------

bookList.previousElementSibling.querySelector('p').innerHTML +=
  '<br /> Too cool for everyone else!';

//-------------- Click on any delete button will delete the list item  -----------------

const ul = document.querySelector('#book-list ul');

const deleteBtn = ul.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
  }
});

//-------------- Adds a link that shows a message after clicking it  -----------------

const amazonLink = document.getElementById('amazon-link');
amazonLink.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.textContent = `Fuck the system you're not leaving me...`;
});

//-------------- Adds a book list after submitting a form  -----------------

// Grabbing the form's input value
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);

  //Creating a new li element
  const li = document.createElement('li');
  li.innerHTML += `<span class="name">${value}</span>
  <span class="delete">delete</span>`;

  //Appending it to the book list
  ul.appendChild(li);
});

//-------------- Hide books -----------------

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
  if (hideBox.checked) {
    ul.style.display = 'none';
  } else {
    ul.style.display = 'block';
  }
});

//-------------- Filter books (Search a book) -----------------

//Adding an event listener
const searchBar = document.querySelector('#search-books input');

searchBar.addEventListener('keyup', (e) => {
  //quering the searched term & book list item
  const searchedTerm = searchBar.value.toLowerCase();
  const booksName = ul.getElementsByTagName('li');

  //Creating an array of li's (books) + iterating through every book's name
  Array.from(booksName).forEach((book) => {
    const title = book.firstElementChild.textContent.toLowerCase();

    //Comparing the book names to the search term, if false - > hiding the falsee list item
    if (title.indexOf(searchedTerm) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

//-------------- Tabbed content - show or hide tabs content onClick -----------------

//Querying the tabs & panels
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
//Attaching a click event reference to the tabs -> if its an li then deploy a function
tabs.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    // If the panel is clicked, it gets an 'active' class which displays the content (display: block)
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

//-------------- this section is just me, practicing javascript DOM manipulation -----------------

//-------------- :nth-child -----------------

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');

//-------------- getElementsByClassName -----------------

// const titles = document.getElementsByClassName('title');
// Array.from(titles).forEach(title => console.log(title));

//-------------- querySelectorAll -----------------

// const wrapper = document.querySelectorAll('#wrapper');
// console.log(wrapper);

//-------------- isArray -----------------

// console.log(booksList);
// console.log(Array.isArray(booksList));

//-------------- cloneNode -----------------

// const banner = document.querySelector('#page-banner');
// const cloneBanner = banner.cloneNode(true);
// console.log(cloneBanner);

//-------------- nodeType // hasChildNodes() // firstChild // lastChild -----------------

// console.log(banner.nodeType);
// console.log(banner.hasChildNodes());
// console.log(banner.firstChild);
// console.log(banner.lastChild);

//-------------- parentNode // parentElement // childNodes // isArray(childNodes // isArray(Array.from(childNodes) -----------------

// console.log(`the parent node is:`, bookList.parentNode);
// console.log(`the parent element is:`, bookList.parentElement.parentElement);
// console.log(`the child Node is:`, bookList.childNodes);
// console.log(Array.isArray(bookList.childNodes));
// console.log(Array.isArray(Array.from(bookList.childNodes)));

//-------------- document.links -----------------

// console.log(document.links);

//-------------- child.nodeType -----------------

// const bookListChildsArray = Array.from(bookList.childNodes);

// bookListChildsArray.forEach((child) =>
//   console.log('the childs node type is', child.nodeType)
// );

//-------------- nodeValue -----------------

// bookListChildsArray.forEach((child,i) =>
//   child.nodeType === 3
//     ? (child.nodeValue = `This is a text Node number ${i+1}`)
//     : (child.innerHTML = `This is an Element Node type number ${i+1}`)
// );

//-------------- children -----------------

// console.log(bookList.children)
// bookListChildsArray.forEach((child,i) =>
//   child.innerHTML = `this is Element number ${i}`
// );
//-------------- node.nextSibling // nextElementSibling // node.previousSibling // element.previousElementSibling-----------------

// console.log('book-list next node sibiling is:', bookList.nextSibling);
// console.log('book-list next element sibiling is:', bookList.nextElementSibling);

// console.log('book-list previous node sibiling is:', bookList.previousSibling);
// console.log('book-list previous element sibiling is:', bookList.previousElementSibling);

//-------------- addEventListener() -----------------

// const h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', e => console.log(e));
// h2.addEventListener('click', e => console.log(e.target));

// const btns = Array.from(
//   document.getElementsByClassName('delete')
// ).forEach((btn) =>
//   btn.addEventListener('click', (e) => console.log(e.target.parentElement))
// );

// const btns_ReFactored = document
//   .querySelectorAll('#book-list .delete')
//   .forEach((btn) =>
//     btn.addEventListener('click', (e) => console.log(e.target.parentElement))
//   );

//-------------- element.style -----------------

// ul.style.color = 'red';
// console.log(document.querySelectorAll('#book-list'))

// const bookListElements = document.querySelectorAll('#book-list li');
// bookListElements.forEach( (element) =>  element.style.color = 'green')

//-------------- Adding a class -----------------

// document.getElementsByClassName('name')[0].classList.add('new-class');
// Array.from(document.getElementsByClassName('name')).forEach( e => e.classList.add('new-class'));

//-------------- Adding attributes -----------------

// const book = document.querySelector('li:first-child .name');
// // // console.log(book.getAttribute('class'));
// book.setAttribute('class', 'new-name');
// // console.log(book.getAttribute('class'));
// console.log(book.hasAttribute('href'));
// book.removeAttribute('class');
