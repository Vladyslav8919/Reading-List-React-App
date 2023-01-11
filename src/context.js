import { useState, createContext, useEffect } from "react";

const BookContext = createContext();

const Provider = ({ children }) => {
  const [booksList, setBooksList] = useState([
    {
      id: "b1",
      title: "Harry Potter",
      author: "J. K. Rowling",
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
      cover:
        "https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
      photo:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article16353089.ece/ALTERNATES/s615b/0_J-K-Rowling-Reads-From-New-Harry-Potter-Book.jpg",
    },
    {
      id: "b2",
      title: "Lord of the Rings",
      author: "J. R. R. Tolkien",
      description:
        "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
      cover:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
      photo: "https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg",
    },
    {
      id: "b3",
      title: "Hunger Games",
      author: "Suzanne Collins",
      description:
        "The Hunger Games is an annual event in which one boy and one girl aged 12-18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death. The book received critical acclaim from major reviewers and authors.",
      cover:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/livres/news/hunger-games-que-vaut-le-nouveau-livre-prequel-de-la-saga-3866400/93221069-1-fre-FR/Hunger-Games-que-vaut-le-nouveau-livre-prequel-de-la-saga.jpg",
      photo:
        "https://m.media-amazon.com/images/M/MV5BMTQyODc5Nzc2MF5BMl5BanBnXkFtZTcwNDAwODgxOA@@._V1_.jpg",
    },
  ]);
  const [editedBook, setEditedBook] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedBookIndex, setEditedBookIndex] = useState();

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("booksList"));
    let books = booksList;
    if (localStorageData) {
      books = localStorageData;
    }
    setBooksList(books);
  }, []);

  const valueToShare = {
    editedBook,
    isEditing,
    editedBookIndex,
    booksList,
    addBookHandler: (newBook) => {
      const updatedBooks = [...booksList, newBook];
      setBooksList(updatedBooks);
      localStorage.setItem("booksList", JSON.stringify(updatedBooks));
    },
    editBookHandler: (id) => {
      const editedBook = booksList.filter((book) => {
        return book.id === id;
      });
      const editedBookIndex = booksList.findIndex((book) => book.id === id);
      setEditedBook(...editedBook);
      setEditedBookIndex(editedBookIndex);
      setIsEditing(true);
    },
    updateBookHandler: (updatedBook) => {
      const updatedBooks = booksList.filter(
        (book) => book.id !== editedBook.id
      );
      const updatedBooksList = [
        ...updatedBooks.slice(0, editedBookIndex),
        updatedBook,
        ...updatedBooks.slice(editedBookIndex),
      ];
      setBooksList(updatedBooksList);
      setIsEditing(false);
      localStorage.setItem("booksList", JSON.stringify(updatedBooksList));
    },
    deleteBookHandler: (id) => {
      const updatedBooks = booksList.filter((book) => book.id !== id);
      setBooksList(updatedBooks);
      localStorage.setItem("booksList", JSON.stringify(updatedBooks));
    },
    clearBooksListHandler: () => {
      setBooksList([]);
      localStorage.setItem("booksList", JSON.stringify([]));
    },
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

export { Provider };
export default BookContext;
