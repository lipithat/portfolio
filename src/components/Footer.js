// Footer.js
import './Footer.css'
export default function Footer() {
	return (
		<section className="footer-section">
			<div className="footer">
				<p className="footer-text">
					© {new Date().getFullYear()} Lipitha Tummala.
				</p>
			</div>
		</section>
	);
}
