import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/bookSlice';

const Book = () => {
  const dispatch = useDispatch();
  const {
    books, isLoading, error,
  } = useSelector(
    (state) => state.book,
  );
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
    const newBooks = books.filter((book) => book.item_id !== id);
    dispatch({ type: 'books/setBooks', payload: newBooks });
  };

  if (isLoading) {
    return <h3>Data is loading...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {books.map((book) => (

        <div className="book" key={book.item_id}>
          <div className="book-details">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <div className="actions">
              <button type="button">Comment</button>
              <button type="button">Edit</button>
              <button
                type="button"
                onClick={() => handleRemoveBook(book.item_id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="progress">
            <h1>
              64%
              <span>Completed</span>
            </h1>
          </div>
          <div className="update-progress">
            <h4>Current chapter</h4>
            <h3>Chapter 15</h3>
            <button type="button">Update Progress</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
