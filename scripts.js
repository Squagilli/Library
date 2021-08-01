let theLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.addToLib = function() {
    theLibrary.push(this)
}
Book.prototype.showLib = function() {
    for (let property in this) {
        console.log(`${property}: ${this[property]}`);
    }
}

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




console.log(cruggus);
cruggus.addToLib();
ether.addToLib();
cooking.addToLib();
console.table(theLibrary);

ether.showLib();