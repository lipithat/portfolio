// Hero.js
import React from 'react';
import { Link } from 'react-router-dom'
import './Hero.css';

export default function Hero() {
	return (
		<section id="hero" className="hero-section">
			<div className="hero-text-container">
				<div>
					<h2 className="hero-heading-primary">
						Hi, I'm Lipi!
					</h2>
				</div>
				<p className="hero-description">
					I'm a software engineer at <Link to="https://www.fluviq.com/" className="underline-link">FLUVIQ</Link>
				    .<br /><br />
					Check out my resume!
				</p>
			</div>
		</section>
	);
}