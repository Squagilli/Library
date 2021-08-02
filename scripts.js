
// HTML selectors
const bookItem = document.querySelector('.book-item');
const newBookButton = document.querySelector('.new-book');
const libContainer = document.querySelector('.library-container');
const newBookForm = document.querySelector('.form-container');
const span = document.getElementsByClassName('close')[0];
const createBookButton = document.querySelector('.create-book');

// Initiates library as an empty array
let theLibrary = [];

// Book Constructor creates the prototype for book objects
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Adds book to library
Book.prototype.addToLib = function() {
    theLibrary.push(this); 
    this.numnum = theLibrary.indexOf(this);
    console.log(this.numnum);
}

// Removes book from library
Book.prototype.removeSelf = function() {
    const newLibrary = theLibrary.filter(book => book.title !== this.title);
    theLibrary = newLibrary;
    console.log(removeName);
    console.log(toggleRemove);
    
    
}

// Adds an element associated with this object
Book.prototype.addRemoveButton = function() {
    toggleRemove = document.createElement('button');
}

// Displays the library on cards
function showLib() {
    for (let i = 0; i < theLibrary.length; i++) {

            item = document.createElement('div'); 
            bookTitle = document.createElement('h4'); 
            bookAuthor = document.createElement('h4'); 
            bookPages = document.createElement('h4'); 
            bookRead = document.createElement('h4'); 
            toggleRemove = document.createElement('button');
            
            item.classList.add('item');
            
            toggleRemove.setAttribute('id', `${theLibrary[i].title}`);
            item.setAttribute('id', `${theLibrary[i].title}`);
            removeName = document.querySelector(`#${theLibrary[i].title}`);

            
            bookTitle.textContent = `'${theLibrary[i].title}'` 
            bookAuthor.textContent = `by ${theLibrary[i].author}`
            bookPages.textContent = `${theLibrary[i].pages} pages` 
    
                if (theLibrary[i].read === true) {
                    bookRead.textContent = 'Has been read';
                }
                else {
                    bookRead.textContent = 'Has not been read';
                }
            toggleRemove.textContent = 'Remove Book'
            
                item.appendChild(bookTitle); 
                item.appendChild(bookAuthor); 
                item.appendChild(bookPages);
                item.appendChild(bookRead); 
                item.appendChild(toggleRemove);

            
                libContainer.append(item); 

                toggleRemove.onclick = function() {
                    removedBook = document.getElementById(`${theLibrary[i].title}`);
                    console.log(removedBook);
                    removedBook.remove();
                }
    
                
    }
}


// Example books
const cruggus = new Book(
    'Cruggus',
    'The Crug',
    '987',
    true,
)
const ether = new Book(
    'The Ether',
    'Kromgar',
    '1152',
    true,
)
const cooking = new Book(
    'Cookbook for Orcs',
    'Ogmar',
    '55',
    false,
)


// creates a new book 
const createBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);
    
}

// adds new book to library
const addBook = (e) => {
    e.preventDefault();
    let newBook = createBook();
    newBook.addToLib();
    updateLibrary(newBook);

    newBook = `${newBook.title}`;
    console.log(newBook);
    
    newBookForm.style.display = 'none';
    
    
}

// updates library display with new book
function updateLibrary(newBook) {
        if (newBook.title !== this.title) {
        item = document.createElement('div');
        bookTitle = document.createElement('h4');
        bookAuthor = document.createElement('h4');
        bookPages = document.createElement('h4');
        bookRead = document.createElement('h4');
        toggleRemove = document.createElement('button');

        toggleRemove.setAttribute('id', `${newBook.title}`);
        item.classList.add('item');

        item.setAttribute('id', `${newBook.title}`);

        bookTitle.textContent = `'${newBook.title}'`
        bookAuthor.textContent = `by ${newBook.author}`
        bookPages.textContent = `${newBook.pages} pages`

            if (theLibrary.read === true) {
                bookRead.textContent = 'Has been read';
            }
            else {
                bookRead.textContent = 'Has not been read';
            }
        toggleRemove.textContent = 'Remove Book'
        
            item.appendChild(bookTitle);
            item.appendChild(bookAuthor);
            item.appendChild(bookPages);
            item.appendChild(bookRead);
            item.appendChild(toggleRemove);
        
            libContainer.append(item);

            console.log(theLibrary);


        toggleRemove.onclick = function() {
            removedBook = document.getElementById(`${newBook.title}`);
            console.log(removedBook);
            removedBook.remove();
        }

        }
        else return;
        
}
         





// Event listeners 
newBookButton.onclick = function() {
    newBookForm.style.display = 'block';
}
span.onclick = function() {
    newBookForm.style.display = 'none';
}
window.onclick = function(e) {
    if (e.target == newBookForm) {
        newBookForm.style.display = 'none';
    }
}



createBookButton.addEventListener('click', addBook);



// displayLib();
cruggus.addToLib();
ether.addToLib();
cooking.addToLib();
cruggus.addRemoveButton();
showLib();
console.log(theLibrary);

console.log(cooking.numnum);




