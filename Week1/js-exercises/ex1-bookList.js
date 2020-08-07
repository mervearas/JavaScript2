/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  const ul = document.createElement('ul');
  
  for(let i = 0; i < books.length; i++) {

    const p = document.createElement('p');
    p.innerText = books[i].title + '-' + books[i].author;

    const img = document.createElement('img');

    if( books[i].title === 'The Design of Everyday Things') {
      img.setAttribute('src','https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg');
    } else if(books[i].title === 'The Most Human Human'){ 
      img.setAttribute('src', 'https://media.s-bol.com/J6DlYZk60lZJ/550x811.jpg')
    } else if(books[i].title === 'The Pragmatic Programmer'){
      img.setAttribute('src', 'https://www.studystore.nl/images/9780135957059/3/1')
    };

    const li = document.createElement('li');
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);

    ul.style.cssText = "display:flex; flex-direction:row; width: 100%; padding: 2%; box-sizing: border-box; "
    li.style.cssText = "list-style-type: none; width: 100%; text-align: center; margin: 2%; padding: 3%;"
    img.style.cssText = "width: auto; height: 350px"

    if(books[i].alreadyRead === true){
      li.style.backgroundColor = 'green'
    }else {
      li.style.backgroundColor = 'red'
    }
  }
  
  return ul;
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);