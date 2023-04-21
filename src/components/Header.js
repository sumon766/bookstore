import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="site-title">
      <h1>
        <NavLink to="/">Bookstore CMS</NavLink>
      </h1>
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="is-active" to="/">Books</NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to="/categories">Categories</NavLink>
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
