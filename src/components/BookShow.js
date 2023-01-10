const BookShow = ({ book, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(e.target.closest(".card").id);
  };

  return (
    <div className="card" id={book.id}>
      <div className="card-image">
        <figure className="image is-4by5">
          <img src={book.cover} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={book.photo} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{book.title}</p>
            <p className="subtitle is-6">{book.author}</p>
          </div>
        </div>

        <div className="content">{book.description}</div>
        <div className="buttons is-centered ">
          <button
            onClick={handleDelete}
            className="button is-danger is-outlined is-small is-rounded"
          >
            <span>Del</span>
          </button>
          <button className="button is-link is-outlined is-small is-rounded">
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShow;