import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/signup" className="header__btn--register">Register</Link>
      <Link to="/login" className="header__btn--login">Login</Link>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="header__right-container">
      <div className="header__right-container--username">
        Hi, {currentUser.username}
      </div>
      <button className="header__right-container--logout-btn" onClick={logout}>
        Log Out
      </button>
    </nav>
  );

  return (
    <header>
      <Link to="/" className="logo"> OSUSCN </Link>
      { currentUser ? personalGreeting() : sessionLinks() }
    </header>
  )
};

export default Header