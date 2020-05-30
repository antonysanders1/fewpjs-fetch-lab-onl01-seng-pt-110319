function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
        .then(resp => resp.json())
        .then(json => renderBooks(json));
}

function renderBooks(books) {
    const main = document.querySelector('main')
    books.forEach(book => {
        const h2 = document.createElement('h2')
        h2.innerHTML = book.name + " was wriiten by " + book.authors + " and has " + book.numberOfPages + " pages!"
        main.appendChild(h2)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
})
