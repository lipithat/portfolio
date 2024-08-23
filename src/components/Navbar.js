import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const currPath = useLocation().pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let gitBranch;
  switch (currPath) {
    case '/projects':
      gitBranch = 'projects';
      break;
    case '/contact':
      gitBranch = 'contact';
      break;
    case '/blog':
      gitBranch = 'blog';
      break;
	case '/blog/nihilism':
		gitBranch = 'blog';
		break;
    default:
      gitBranch = 'main';
      break;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-heading">
          <Link to="/" onClick={() => setIsDropdownOpen(false)}>
            <span className="heading-part1">lipitha-tummala</span>{' '}
            <span className="heading-part2">git:(
              <span className="heading-part3">{gitBranch}</span>
            )</span>
            <span className="heading-part4">✗</span>{' '}
            <span className="cursor">_</span>
          </Link>
        </h2>
        {/* Dropdown Toggle Button */}
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="white"
          >
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
        <ul className={`navbar-links ${isDropdownOpen ? 'open' : ''}`}>
          <li>
            <Link className="navbar-link" to="/projects" onClick={() => setIsDropdownOpen(false)}>
              <span className="heading-part3">projects</span>
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/contact" onClick={() => setIsDropdownOpen(false)}>
              <span className="heading-part3">contact</span>
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/blog" onClick={() => setIsDropdownOpen(false)}>
              <span className="heading-part3">blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
