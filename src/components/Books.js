import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <div className="books">
      <Book />
      <Form />
    </div>
  );
};
export default Books;
