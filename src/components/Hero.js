// Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { VscGithubAlt } from "react-icons/vsc";

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
					I'm a student at UC Santa Cruz and a software engineer at <Link to="https://www.fluviq.com/" className="link">FLUVIQ</Link>
				    .<br /><br />
					Take a look at my resume.<br /><br />
					<Link to="https://github.com/lipithat" className="logo">
						<VscGithubAlt size={32} />
					</Link>
				</p>
			</div>
		</section>
	);
}
