import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import auth from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'} className="header__clearlink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
 

      </div>
           {/* Bottom nav  */}
      <div className='allMenu'>
        <a className='pLink' href=""><MenuIcon className='menu' />
          All</a>
        <a className='pLink' href="">Prime Video</a>
        <a className='pLink' href="">Amazon Business</a>
        <a className='pLink' href="">Today's Deals</a>
        <a className='pLink' href="">Beast Sellers</a>
        <a className='pLink' href="">Kindle</a>
        <a className='pLink' href="">Customer Service</a>
        <a className='pLink' href="">Books</a>
         <a className='pLink' href="">Music</a>
      
      </div>
    </>
  );
}

export default Header;
