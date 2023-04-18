import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = () => {
  const books = useSelector((store) => store.book.books);
  const dispatch = useDispatch();
  return (
    <div>
      {books.map((book) => {
        const { id, title, author } = book;
        return (
          <div className="book" key={id}>
            <div className="book-details">
              <h2>{title}</h2>
              <p>{author}</p>
              <div className="actions">
                <button type="button">Comment</button>
                <button type="button">Edit</button>
                <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
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
        );
      })}
    </div>
  );
};

export default Book;
