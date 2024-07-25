// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	const currPath = useLocation().pathname;

	let gitBranch;
	switch (currPath) {
		case '/projects':
			gitBranch = 'projects';
			break;
		case '/contact':
			gitBranch = 'contact';
			break;
		default:
			gitBranch = 'main';
			break;
	}

	return (
	  <nav className="navbar">
		<div className="navbar-container">
		  <h2 className="navbar-heading">
			<Link to="/">
			  <span className="heading-part1">lipitha-tummala</span>{' '}
			  <span className="heading-part2">git:(
				<span className="heading-part3">{gitBranch}</span>
			  )</span>
			  <span className='heading-part4'>✗</span>{' '}
			  <span class="cursor">_</span>
			</Link>
		  </h2>
		  <ul className="navbar-links">
			<li>
			  <Link className="navbar-link" to="/projects">
					<span className="heading-part3">projects</span>
			  </Link>
			</li>
			<li>
			  <Link className="navbar-link" to="/contact">
					<span className="heading-part3">contact</span>
			  </Link>
			</li>
		  </ul>
		</div>
	  </nav>
	);
  }
  