
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
    console.log(theLibrary.indexOf(this));
}

// Removes book from library
Book.prototype.removeSelf = function() {
    const newLibrary = theLibrary.filter(book => book.title !== this.title);
    theLibrary = newLibrary;
    console.log(theLibrary);
    
}

// Displays the library on cards
function displayLib() {
            theLibrary.forEach(function(theLibrary) { 
            
            console.table(theLibrary)
            item = document.createElement('div'); 
            bookTitle = document.createElement('h4'); 
            bookAuthor = document.createElement('h4'); 
            bookPages = document.createElement('h4'); 
            bookRead = document.createElement('h4'); 
            toggleRemove = document.createElement('button');

            toggleRemove.classList.add('remove-book');
            item.classList.add('item'); 

            bookTitle.textContent = `'${theLibrary.title}'` 
            bookAuthor.textContent = `by ${theLibrary.author}`
            bookPages.textContent = `${theLibrary.pages} pages` 
    
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
    });
};


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
    const newBook = createBook();
    newBook.addToLib();
    updateLibrary(newBook);


    console.log(newBook)
    newBookForm.style.display = 'none';
    
    
}

// updates library display with new book
function updateLibrary(newBook) {
            item = document.createElement('div');
            bookTitle = document.createElement('h4');
            bookAuthor = document.createElement('h4');
            bookPages = document.createElement('h4');
            bookRead = document.createElement('h4');
            toggleRemove = document.createElement('button');

            toggleRemove.classList.add('remove-book');
            item.classList.add('item');

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
cooking.removeSelf();
displayLib();
console.log(theLibrary);


const deleteBook = document.querySelector('.remove-book');
deleteBook.onclick = function() {
    this.removeSelf();
}
