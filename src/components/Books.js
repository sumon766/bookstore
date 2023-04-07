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

    <div className="add-book">
      <form className="form">
        <input type="text" name="book-name" id="book-name" placeholder="Book Name" required />
        <input type="text" name="author-name" id="author-name" placeholder="Author Name" required />
        <button type="submit" id="submit">Add Book</button>
      </form>
    </div>
  </div>
);

export default Books;
