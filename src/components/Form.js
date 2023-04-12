import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  return (
    <div className="add-book">
      <form className="form">
        <input type="text" name="book-name" id="book-name" placeholder="Book Name" required />
        <input type="text" name="author-name" id="author-name" placeholder="Author Name" required />
        <button type="submit" id="submit" onClick={() => dispatch(addBook({ title: 'Sherlock Holmes', author: 'Sir Arthur Conan Doyle' }))}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
