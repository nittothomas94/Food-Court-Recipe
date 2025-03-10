import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="chefLogo" src="/chef-logo.avif" alt="Chef Logo" />
        <h2 className="food-court">Food Court</h2>
      </div>
      <div className="nav-menu">
        <Link className="nav-link" to={'/'}>
          All Catagory
        </Link>
        <p className="nav-link nav-link2">About</p>
        <p className="nav-link nav-link2">Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
