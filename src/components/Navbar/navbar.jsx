import { Link } from 'react-router-dom';
import AllCatagory from '../../pages/AllCatagory/allcatagory';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="chefLogo" src="chef-logo.avif" alt="Chef Logo" />
        <h2 className="food-court">Food Court</h2>
      </div>
      <div className="nav-menu">
        <Link className="nav-link" to={'/'}>
          All Catagory
        </Link>
        <Link className="nav-link" to={'/About'}>
          About
        </Link>
        <Link className="nav-link" to={'/About'}>
          Contact
        </Link>
      </div>
      <div className="mobile">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
