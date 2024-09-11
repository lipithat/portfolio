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
				<div className="footer-text">© {new Date().getFullYear()} Lipitha Tummala.</div>
				<Link to="https://github.com/lipithat" className="footer-logo">
					<RiGithubLine className="github-icon" size={25} />
				</Link>
				<Link to="https://www.linkedin.com/in/lipitha-tummala/" className="footer-logo">
					<PiLinkedinLogoBold className="linkedin-icon" size={25} />
				</Link>
				<Link to="mailto:lipithatummala@gmail.com" className="footer-logo">
					<MdOutlineEmail className="mail-icon" size={28} />
				</Link>
			</div>
		</section>
	);
}
