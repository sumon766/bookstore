import Form from './Form';

const Books = () => (
  <div className="books">
    <div className="book">
      <div className="book-details">
        <h2>Book Name</h2>
        <p>Author Name</p>
        <div className="actions">
          <button type="button">Comment</button>
          <button type="button">Edit</button>
          <button type="button">Remove</button>
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

    <div className="book">
      <div className="book-details">
        <h2>Book Name</h2>
        <p>Author Name</p>
        <div className="actions">
          <button type="button">Comment</button>
          <button type="button">Edit</button>
          <button type="button">Remove</button>
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

    <div className="book">
      <div className="book-details">
        <h2>Book Name</h2>
        <p>Author Name</p>
        <div className="actions">
          <button type="button">Comment</button>
          <button type="button">Edit</button>
          <button type="button">Remove</button>
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

    <Form />
  </div>
);

export default Books;
