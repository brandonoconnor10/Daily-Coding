// Step 1: Create the books array
const books = [
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 }
];

// Step 2: Create the sortByYear callback function
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// Step 3: Filter out books written after a certain year (e.g., 1950)
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// Step 4: Sort the filteredBooks array using sortByYear
filteredBooks.sort(sortByYear);

