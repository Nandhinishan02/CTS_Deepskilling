function BookDetails(props) {
  const books = props.books;

  if (books.length === 0) {
    return (
      <div className="book">
        <h2>Book Details</h2>
        <p>No books available.</p>
      </div>
    );
  }

  return (
    <div className="book">
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h4>{book.bname}</h4>
          <h5>{book.price}</h5>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;