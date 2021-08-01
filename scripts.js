
// HTML selectors
const bookItem = document.querySelector('.book-item');
const newBookButton = document.querySelector('.new-book');
const libContainer = document.querySelector('.library-container');

const newBookForm = document.querySelector('.form-container');
const span = document.getElementsByClassName('close')[0];




// The library itself
let theLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Adds book to library
Book.prototype.addToLib = function() {
    theLibrary.push(this)
}

// Displays the library on cards
function displayLib() {
    theLibrary.forEach(function(theLibrary) {
        console.table(theLibrary)
        item = document.createElement('div');
        item.classList.add('.item');
        
        item.innerHTML = [theLibrary.title, theLibrary.author, theLibrary.pages, theLibrary.read];
        bookItem.append(item);
    });
}

// Example books
const cruggus = new Book(
    'Cruggus',
    'The Crug',
    '987',
    'have read',
)
const ether = new Book(
    'The Ether',
    'Kromgar',
    '1152',
    'have not read',
)
const cooking = new Book(
    'Cookbook for Orcs',
    'Ogmar',
    '55',
    'have read',
)



// testing 
console.log(cruggus);
cruggus.addToLib();
ether.addToLib();
cooking.addToLib();
console.table(theLibrary);

displayLib();

function popBookForm() {
 
}

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
