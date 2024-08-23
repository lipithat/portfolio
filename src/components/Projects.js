// Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file
import project1Image from '../images/project1.png';

export default function Projects() {
	return (
		<section id="projects" className="projects-section">
			<h2 className="projects-title">My Projects</h2>
			<div className="project-card">
				<div className="project-image-container">
					<a href="https://github.com/lipithat/portfolio">
						<img
							src={project1Image}
							alt="Project 1"
							className="project-image"
						/>
					</a>
				</div>
				<div className="project-content">
					<h2 className="project-title">
						Portfolio
					</h2>
					<p className="project-description">
						You're looking at it right now!
						<br></br>
						<a
							className="project-link"
							href="https://github.com/lipithat/portfolio"
						>
							GitHub
						</a>
					</p>
				</div>
			</div>
			<div className="project-card project-card-reverse">
				<div className="project-image-container">
					<a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
						<img
							src={project1Image}
							alt="Project 1"
							className="project-image"
						/>
					</a>
				</div>
				<div className="project-content">
					<h2 className="project-title">
						<a
							className="project-link"
							href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
						>
							15 Puzzle Game
						</a>
					</h2>
					<p className="project-description">
						qhh
					</p>
				</div>
			</div>
		</section>
	);
}
