// Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { RiGithubLine } from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

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
				<div className="hero-description">
					I'm a student at UC Santa Cruz and a software engineer at <Link to="https://www.fluviq.com/" className="link">FLUVIQ</Link>
				    .<br /><br />
					Please contact me for opportunities or my resume.<br /><br />
					<div className="logo">
						<Link to="https://github.com/lipithat">
							<RiGithubLine className="github-icon" size={25} />
						</Link>
						<Link to="https://www.linkedin.com/in/lipitha-tummala/">
							<PiLinkedinLogoBold className="linkedin-icon" size={25} />
						</Link>
						<Link to="mailto:lipithatummala@gmail.com">
							<MdOutlineEmail className="mail-icon" size={28} />
						</Link>
					</div>
				</div>
			</div>
			<div className="linebreak"></div>
		</section>
	);
}
