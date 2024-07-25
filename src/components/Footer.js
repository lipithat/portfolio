// Footer.js
import './Footer.css'
import { Link } from 'react-router-dom';
import { RiGithubLine } from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
	return (
		<section className="footer-section">
			<div className="footer">
				<p className="footer-text">
					© {new Date().getFullYear()} Lipitha Tummala.
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
				</p>
			</div>
		</section>
	);
}
