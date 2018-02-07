import React, { Component } from 'react';
import './App.css';

class Footer extends Component {

	render() {
		return (
	<footer class="page-footer blue center-on-small-only" >
		<div class="navbar navbar-static-bottom" id="footer">
			<div class="container">
				<div id="desktopFooter">
					<div class="row">
						<div class="col-md-6" id="contactdiv">
							<h2 class="title">Ota yhteyttä</h2>
							<p>lorem ipsum....</p>
						</div>
						<div class="col-md-6" id="linkdiv">
							<ul class="list-inline">
								<h3 class="title">Linkit</h3>

								<li class="list-inline-item">
									<a href="https://www.facebook.com/HaagaHeliaAMK/?userLang=en" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-facebook" /></a>
								</li>

								<li class="list-inline-item">
									<a href="https://www.youtube.com/user/HAAGAHELIAviestinta?userLang=en" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-youtube" /></a>
								</li>

								<li class="list-inline-item">
									<a href="https://twitter.com/haagaheliaamk?userLang=en" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-twitter" /></a>
								</li>

								<li class="list-inline-item">
									<a href="https://www.linkedin.com/school/haaga-helia-university-of-applied-sciences/" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-linkedin" /></a>
								</li>

								<li class="list-inline-item">
									<a href="https://www.instagram.com/haagahelia/?userLang=en" target="_blank" rel="noopener noreferrer">
									<i class="fa fa-instagram" /></a>
								</li>
						
							</ul>
						</div>
					</div>
				</div>
				
				<div id="mobileFooter">
								
					<div class="container" id="linkdiv">
						<ul class="list-inline">

							<li class="list-inline-item">
								<a href="https://www.facebook.com/HaagaHeliaAMK/?userLang=en" target="_blank" rel="noopener noreferrer">
								<i class="fa fa-facebook" /></a>
							</li>

							<li class="list-inline-item">
								<a href="https://www.youtube.com/user/HAAGAHELIAviestinta?userLang=en" target="_blank" rel="noopener noreferrer">
								<i class="fa fa-youtube" /></a>
							</li>

							<li class="list-inline-item">
								<a href="https://twitter.com/haagaheliaamk?userLang=en" target="_blank" rel="noopener noreferrer">
								<i class="fa fa-twitter" /></a>
							</li>

							<li class="list-inline-item">
								<a href="https://www.linkedin.com/school/haaga-helia-university-of-applied-sciences/" target="_blank" rel="noopener noreferrer">
								<i class="fa fa-linkedin" /></a>
							</li>

							<li class="list-inline-item">
								<a href="https://www.instagram.com/haagahelia/?userLang=en" target="_blank" rel="noopener noreferrer">
								<i class="fa fa-instagram" /></a>
							</li>
						
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>

		)
	}
}

export default Footer;