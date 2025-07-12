import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>💕 Wedding</h2>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('hero')}>Trang chủ</button></li>
            <li><button onClick={() => scrollToSection('couple')}>Cặp đôi</button></li>
            <li><button onClick={() => scrollToSection('event')}>Sự kiện</button></li>
            <li><button onClick={() => scrollToSection('rsvp')}>RSVP</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Ảnh cưới</button></li>
          </ul>
        </nav>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 