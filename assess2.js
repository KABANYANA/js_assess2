const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", publicationYear: 1951,
    isAvailable: true },
    { title: "Great Expectations", author: "Charles Dickens", publicationYear: 1861,
    isAvailable: false },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", publicationYear:
    1866, isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925,
    isAvailable: false },
    { title: "The Odyssey", author: "Homer", publicationYear: -800, isAvailable: true },
    ];


//     1. Create a function called getAvailableBooks 
// that returns an array of all available books.


function getAvailableBooks(){
    var available=[]
   
    for(let i=0;i<books.length;i++){
        if(books[i].isAvailable==true){
            available.push(books[i])
        }
    }
    return available
}

console.log(getAvailableBooks())


// 2. Create a function getBooksByAuthor that 
// // takes an author's name as an argument and and 
// returns an array of all books by that author.

function getBooksByAuthor(name){
    bByAuthor=[]
   for(let i=0;i<books.length;i++){
       if(books[i].author==name){
           bByAuthor.push(books[i])

       }
   }
   return bByAuthor

}

console.log(getBooksByAuthor("Homer"))


// // 3. Create a function addNewBook that takes a book object 
// as an argument and adds it
// // to the library, ensuring that the new book has all 
// required properties (title, author,
// // publicationYear, and isAvailable).

// function addNewBook(){
//     {title,author,publicationYear,isAvailable}
//    books.push({})
// }
// console.log(addNewBook())

// 4. Create a function checkoutBook that takes a 
// book title as an argument and changes
// the book's isAvailable property to false. If the book 
// is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(bTitle){
    for(let i=0;i<books.length;i++){
        if(books[i].title==bTitle){
            if (books[i].isAvailable==true){
                books[i].isAvailable=false
            }
            else{
                console.log("the book is not available")
            }
          
 
        }
    }
    // return books
}
checkoutBook("The Great Gatsby")

// 5. Create a function returnBook that takes a book title 
// as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library,
//  the function
// should return a message indicating that the book does not belong to the library.