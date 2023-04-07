import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="site-title">
      <h1>
        Bookstore CMS
      </h1>
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <div className="user-panel">
      <a href="https://legacy.reactjs.org/">
        <i className="fa fa-user-circle-o" />
      </a>
    </div>
  </div>
);

export default Header;
