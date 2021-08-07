
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
    this.addToLib();
    
}

// Adds book to library
Book.prototype.addToLib = function() {
    theLibrary.push(this);
   
}

// Adds book to local storage


// Removes book from library
function removeBook(goneBook) {
    const newLib = theLibrary.filter(book => book.title !== goneBook.id);
    theLibrary = newLib;
    console.table(theLibrary);

}




// Displays the library on cards
function showLib() {
    for (let i = 0; i < theLibrary.length; i++) {

            
            
            let library = JSON.parse(localStorage.getItem('library'));

            theLibrary = library;
            
            if (theLibrary.length < 1) {
                alert('Please add a new book!')
            }

            item = document.createElement('div'); 
            bookTitle = document.createElement('h4'); 
            bookAuthor = document.createElement('h4'); 
            bookPages = document.createElement('h4'); 
            bookRead = document.createElement('h4'); 
            toggleRemove = document.createElement('button');
            
            item.classList.add('item');
            
            // add id's to items and buttons to associate with DOM
            toggleRemove.setAttribute('id', `${theLibrary[i].title}`);
            toggleRemove.classList.add('removeBtn');
            item.setAttribute('id', `${theLibrary[i].title}`);
            removeName = document.querySelector(`#${theLibrary[i].title}`);

            
            bookTitle.textContent =  `${theLibrary[i].title}`
            bookAuthor.textContent = `by ${theLibrary[i].author}`
            bookPages.textContent = `${theLibrary[i].pages} pages` 
    
                if (theLibrary[i].read === true) {
                    bookRead.textContent = 'Has been read';
                }
                else {
                    bookRead.textContent = 'Has not been read';
                }

            toggleRemove.textContent = 'Remove Book';
            
                item.appendChild(bookTitle); 
                item.appendChild(bookAuthor); 
                item.appendChild(bookPages);
                item.appendChild(bookRead); 
                item.appendChild(toggleRemove);

                libContainer.append(item); 

                
                toggleRemove.onclick = function(e) {
                console.log(e.target.parentNode);
                deleteThis = e.target.parentNode;

                library = theLibrary.filter(book => book.title !== library[i].title);

                localStorage.setItem('library', JSON.stringify(library));

                console.log(localStorage)


                
                deleteThis.remove();
                removeBook(deleteThis);
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



// creates a new book object
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
    updateLibrary(newBook);

    newBook = `${newBook.title}`;
    console.log(newBook);

   
    
    newBookForm.style.display = 'none';

    
}

// updates library display with new book
function updateLibrary(newBook) {

        localStorage.setItem('library', JSON.stringify(theLibrary));
        


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
        

            if (newBook.read === true) {
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

            console.table(theLibrary);



        toggleRemove.onclick = function(e) {

            let library = JSON.parse(localStorage.getItem('library'));
            library = library.splice(i, 1);
            localStorage.setItem('library', JSON.stringify(library));

            console.log(e.target);
            deleteThis = e.target.parentNode;
            deleteThis.remove();
            removeBook(deleteThis);

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

window.localStorage;
showLib();
console.table(theLibrary);











