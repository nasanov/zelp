import './Footer.css';
import footerLogo from './footer_cityscape_colored.png';
export default function Footer() {
	return (
		<footer className="main-footer">
			<section className="footer-wrapper">
				<div className="about">
					<span className="footer-heading">About</span>
					<ul className="footer-list">
						<li className="footer-li">
							<a href="https://github.com/nasanov">GitHub</a>
						</li>
						<li className="footer-li">
							<a href="https://github.com/nasanov/zelp">Zelp project repo</a>
						</li>
						<li className="footer-li">
							<a href="https://www.linkedin.com/in/nursultan-asanov/">Linkedin</a>
						</li>
					</ul>
				</div>
			</section>
			<small className="footer_img">
				<div className="footer-img-block">
					<img src={footerLogo} alt="footer img" />
				</div>
			</small>
		</footer>
	);
}
