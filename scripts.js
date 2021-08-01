
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
    theLibrary.push(this); // adds book to array

}

// Displays the library on cards
function displayLib() {
            theLibrary.forEach(function(theLibrary) { // for each 
            
            console.table(theLibrary)
            item = document.createElement('div'); // create book item
            bookTitle = document.createElement('h4'); // create heading for title
            bookAuthor = document.createElement('h4'); // create heading for author
            bookPages = document.createElement('h4'); // create heading for pages
            bookRead = document.createElement('h4'); // create heading for read
            
            item.classList.add('item'); // add the item class to book item
            bookTitle.textContent = `'${theLibrary.title}'` // adds titles to title heading
            bookAuthor.textContent = theLibrary.author // adds author to author heading
            bookPages.textContent = `${theLibrary.pages} pages` // adds pages to page heading
    
                if (theLibrary.read === true) {
                    bookRead.textContent = 'Has been read';
                }
                else {
                    bookRead.textContent = 'Has not been read';
                }
            
                item.appendChild(bookTitle); // appends book title to book object
                item.appendChild(bookAuthor); // appends author to book object
                item.appendChild(bookPages); // appends pages to book object
                item.appendChild(bookRead); // appends read to book object
            
                libContainer.append(item); // appends book object to library container
    });
};

// Updates library with new book

    
    


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



const createBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);
    
}

const addBook = (e) => {
    e.preventDefault();
    const newBook = createBook();
    newBook.addToLib();
    updateLibrary(newBook);


    console.log(newBook)
    newBookForm.style.display = 'none';
    
    
}

function updateLibrary(newBook) {
            item = document.createElement('div');
            bookTitle = document.createElement('h4');
            bookAuthor = document.createElement('h4');
            bookPages = document.createElement('h4');
            bookRead = document.createElement('h4');
            
            item.classList.add('item');
            bookTitle.textContent = `'${newBook.title}'`
            bookAuthor.textContent = newBook.author
            bookPages.textContent = `${newBook.pages} pages`
    
                if (theLibrary.read === true) {
                    bookRead.textContent = 'Has been read';
                }
                else {
                    bookRead.textContent = 'Has not been read';
                }
            
                item.appendChild(bookTitle);
                item.appendChild(bookAuthor);
                item.appendChild(bookPages);
                item.appendChild(bookRead);
            
                libContainer.append(item);

                console.log(theLibrary);
}

createBookButton.addEventListener('click', addBook);



// displayLib();
cruggus.addToLib();
ether.addToLib();
cooking.addToLib();
displayLib();
console.log(theLibrary);