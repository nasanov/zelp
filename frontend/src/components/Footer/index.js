import './Footer.css';
import footerLogo from './footer_cityscape_colored.png';
export default function Footer() {
	return (
		<footer class="main-footer">
			<section class="footer-wrapper">
				<div class="about">
					<span class="footer-heading">About</span>
					<ul class="footer-list">
						<li class="footer-li">
							<a href="https://github.com/nasanov">GitHub</a>
						</li>
						<li class="footer-li">
							<a href="https://github.com/nasanov/zelp">Zelp project repo</a>
						</li>
						<li class="footer-li">
							<a href="https://www.linkedin.com/in/nursultan-asanov/">LinkedIn</a>
						</li>
					</ul>
				</div>
			</section>
			<small class="footer_img">
				<div class="footer-img-block">
					<img src={footerLogo} alt="footer img" />
				</div>
			</small>
		</footer>
	);
}
