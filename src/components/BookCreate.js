import { useRef } from "react";

const BookCreate = ({ onAddBook, editedBook, isEditing, onUpdate }) => {
  const sectionRef = useRef();
  const titleInputRef = useRef("");
  const authorInputRef = useRef("");
  const descInputRef = useRef("");
  const coverInputRef = useRef("");
  const photoInputRef = useRef("");
  const formRef = useRef();

  const setInputFields = (f, id) => {
    f({
      id: id,
      title: titleInputRef.current.value,
      author: authorInputRef.current.value,
      description: descInputRef.current.value,
      cover: coverInputRef.current.value,
      photo: photoInputRef.current.value,
    });
  };

  const fillEditingFields = () => {
    titleInputRef.current.value = editedBook.title;
    authorInputRef.current.value = editedBook.author;
    descInputRef.current.value = editedBook.description;
    coverInputRef.current.value = editedBook.cover;
    photoInputRef.current.value = editedBook.photo;
  };

  const executeScroll = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (isEditing) {
    fillEditingFields();
    executeScroll();
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (isEditing) {
      setInputFields(onUpdate, editedBook.id);
    } else {
      setInputFields(onAddBook, "b" + Math.floor(Math.random() * 9999));
    }

    // if (isEditing) {
    //   onUpdate({
    //     id: editedBook.id,
    //     title: titleInputRef.current.value,
    //     author: authorInputRef.current.value,
    //     description: descInputRef.current.value,
    //     cover: coverInputRef.current.value,
    //     photo: photoInputRef.current.value,
    //   });
    //   formRef.current.reset();
    // } else {
    //   onAddBook({
    //     id: "b" + Math.floor(Math.random() * 1000),
    //     title: titleInputRef.current.value,
    //     author: authorInputRef.current.value,
    //     description: descInputRef.current.value,
    //     cover: coverInputRef.current.value,
    //     photo: photoInputRef.current.value,
    //   });
    // }

    formRef.current.reset();
  };

  return (
    <section ref={sectionRef} className="section is-medium">
      <h1 className="title">Create Book</h1>
      <h2 className="subtitle">
        Just fill in the form, adding a book is as simple as that. Feel free to
        miss some of the optionall fields.
      </h2>
      <form ref={formRef} onSubmit={submitFormHandler}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              ref={titleInputRef}
              className="input is-rounded"
              type="text"
              placeholder="Enter the title"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              ref={authorInputRef}
              className="input is-rounded"
              type="text"
              placeholder="Enter the author"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              ref={descInputRef}
              className="input is-rounded"
              type="text"
              placeholder="Enter the description"
            />
          </div>
          <p className="help has-text-grey-light ml-2">(optionally)</p>
        </div>
        <div className="field">
          <label className="label">Link to the book's cover</label>
          <div className="control">
            <input
              ref={coverInputRef}
              className="input is-rounded"
              type="text"
              placeholder="Link to a cover"
            />
          </div>
          <p className="help has-text-grey-light ml-2">(optionally)</p>
        </div>
        <div className="field">
          <label className="label">Link to the author's photo</label>
          <div className="control">
            <input
              ref={photoInputRef}
              className="input is-rounded"
              type="text"
              placeholder="Link to a photo"
            />
          </div>
          <p className="help has-text-grey-light ml-2">(optionally)</p>
        </div>
        <div className="has-text-centered">
          <input
            className="button is-rounded"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </section>
  );
};

export default BookCreate;
