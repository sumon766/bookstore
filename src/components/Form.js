const Form = () => (
  <div className="add-book">
    <form className="form">
      <input type="text" name="book-name" id="book-name" placeholder="Book Name" required />
      <input type="text" name="author-name" id="author-name" placeholder="Author Name" required />
      <button type="submit" id="submit">Add Book</button>
    </form>
  </div>
);

export default Form;
