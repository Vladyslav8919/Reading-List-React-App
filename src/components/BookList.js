import { useContext } from "react";
import BookContext from "../context";
import BookShow from "./BookShow";

const BookList = () => {
  const { booksList, clearBooksListHandler } = useContext(BookContext);

  return (
    <section className="section is-medium">
      <h1 className="title">Book List</h1>
      <h2 className="subtitle">
        Books added by you will be stored right here. Feel free to
        <button
          onClick={clearBooksListHandler}
          className="button is-small is-danger is-light is-rounded mx-1"
        >
          clear
        </button>
        placeholders and add a couple of your own books.
      </h2>
      <div className="columns is-multiline">
        {booksList.map((book) => (
          <div key={book.id} className="column is-one-third">
            <BookShow book={book} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
