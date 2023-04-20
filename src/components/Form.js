import { useState } from 'react';
import store from '../redux/store';
import { postBook } from '../redux/books/bookSlice';
import { nanoid } from 'nanoid';

const Form = () => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleAddBook = async (event) => {
    event.preventDefault();
    const { books } = store.getState().book;
    const id = nanoid();
    const title = document.getElementById('book-name').value;
    const author = document.getElementById('author-name').value;
    const category = 'Drama';
    const book = {
      item_id: id,
      title,
      author,
      category,
    };
    try {
      await store.dispatch(postBook(book));
      setNewBook({ title: '', author: '', category: '' });
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="add-book">
      <form onSubmit={handleAddBook} className="form">
        <input
          type="text"
          name="book-name"
          id="book-name"
          placeholder="Book Name"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <input
          type="text"
          name="author-name"
          id="author-name"
          placeholder="Author Name"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <button type="submit" id="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
