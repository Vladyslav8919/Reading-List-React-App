import { useContext } from "react";
import BookContext from "../context";

const BookShow = ({ book }) => {
  const { editedBook, deleteBookHandler, editBookHandler } =
    useContext(BookContext);

  const handleDelete = (e) => {
    deleteBookHandler(e.target.closest(".card").id);
  };
  const handleEdit = (e) => {
    editBookHandler(e.target.closest(".card").id);
  };

  return (
    <div className="card" id={book.id}>
      {book.cover && (
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={book.cover} alt="Placeholder image" />
          </figure>
        </div>
      )}
      <div className="card-content">
        <div className="media">
          {book.photo && (
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={book.photo} alt="Placeholder image" />
              </figure>
            </div>
          )}
          <div className="media-content">
            <p className="title is-4">{book.title}</p>
            <p className="subtitle is-6">{book.author}</p>
          </div>
        </div>

        {book.description && <div className="content">{book.description}</div>}
        <div className="buttons is-centered ">
          <button
            onClick={handleDelete}
            className="button is-danger is-outlined is-small is-rounded"
          >
            <span>Del</span>
          </button>
          <button
            onClick={handleEdit}
            className="button is-link is-outlined is-small is-rounded"
          >
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShow;
