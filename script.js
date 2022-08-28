// -----MODAL FORM-----

const openFormBtn = document.querySelector('.addNewBook');
const closeFormBtn = document.querySelector('.closeModal');

openFormBtn.addEventListener('click', ()=>{
    const form = document.querySelector('.modal');
    openForm(form);
})

closeFormBtn.addEventListener('click', ()=>{
    const form = document.querySelector('.modal');
    form.querySelector('.addBook').reset();
    closeForm(form);
})

function openForm(form) {
    form.classList.add('active');
    overlay.classList.add('active');
}
function closeForm(form)
{
    form.classList.remove('active');
    overlay.classList.remove('active');
}

//---ADD---adds data from form to object of book

const addBook = document.querySelector('.add');

function Book(title, author, pageCount, pubDate, read){
    this.title = title,
    this.author = author,
    this.pageCount = pageCount,
    this.pubDate = pubDate,
    this.read = read
}// new object constructor for book

let library = new Array;

function addBookToLibrary(newBook){
    library.push(newBook);
}//pushes new book into an array of Library

addBook.addEventListener('click',() =>{
    const title = document.querySelector('#formTitle').value;
    const author = document.querySelector('#formAuthor').value;
    const pageCount = document.querySelector('#formPageCount').value;
    const publication = document.querySelector('#formPublish').value;
    const read = document.querySelector('#read').value;

    let newBook = new Book(title, author, pageCount, publication, read);
    addBookToLibrary(newBook);
    createBookCard(newBook);
    const form = document.querySelector('.modal');
    form.querySelector('.addBook').reset();
    closeForm(form);
})//creates a new book and calls addBookToLibrary function then calls createBookCard to display the book on doc

function createBookCard(book){
    const bookshelf = document.querySelector('.shelf');
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    bookContainer.setAttribute('id', library.length-1);
    const displayTitle = document.createElement('p');
    displayTitle.textContent = 'Title: ' + book.title;
    const displayAuthor = document.createElement('p');
    displayAuthor.textContent = 'Author: ' + book.Author;
    const displayPageCount = document.createElement('p');
    displayPageCount.textContent = 'Page Count: ' + book.pageCount;
    const displayPublication = document.createElement('p');
    displayPublication.textContent = 'Publication: ' + book.pubDate;
    const readButton = document.createElement('button');
    readButton.textContent = 'Read';
    readButton.classList.add('read')
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove')

    removeBtn.setAttribute('id', library.length-1)
   
    bookContainer.appendChild(displayTitle)
    bookContainer.appendChild(displayAuthor)
    bookContainer.appendChild(displayPageCount)
    bookContainer.appendChild(displayPublication)
    bookContainer.appendChild(readButton)
    bookContainer.appendChild(removeBtn)
    bookshelf.appendChild(bookContainer)   
    removeBtn.addEventListener('click', () => {
        bookshelf.removeChild(bookContainer);
        let index = library.indexOf(book);
        library.splice(index,1);
        
    });
    readButton.addEventListener('click', () => {
        if(readButton.textContent === 'Read')
        {
            readButton.textContent = 'Unread';
            readButton.classList.remove('read');
            readButton.classList.add = 'unread';
        }
        else{
            readButton.textContent = 'Read';
            readButton.classList.remove('unread');
            readButton.classList.add = 'read';
        }
    })

}// creates a container displays the contents of object book


