// Footer.js
import './Footer.css'
export default function Footer() {
	return (
		<section className="footer-section">
			<p className="footer-text">
				©Copyright {new Date().getFullYear()} | All rights reserved
			</p>
		</section>
	);
}
