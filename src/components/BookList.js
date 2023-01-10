import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onClear }) => {
  return (
    <section className="section is-medium">
      <h1 className="title">Book List</h1>
      <h2 className="subtitle">
        Books added by you will be stored right here. Feel free to
        <button
          onClick={onClear}
          className="button is-small is-danger is-light is-rounded mx-1"
        >
          clear
        </button>
        placeholders and add a couple of your own books.
      </h2>
      <div className="columns is-multiline">
        {books.map((book) => (
          <div key={book.id} className="column is-one-third">
            <BookShow book={book} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
