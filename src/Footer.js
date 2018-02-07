import React, { Component } from 'react';
import './App.css';

class Footer extends Component {

	render() {
		return (
	<footer className="page-footer blue center-on-small-only" >
		<div className="navbar navbar-static-bottom" id="footer">
			<div className="container">
				<div id="desktopFooter">
					<div className="row">
						<div className="col-md-6" id="contactdiv">
							<h2 className="title">Ota yhteyttä</h2>
							<p>lorem ipsum....</p>
						</div>
						<div className="col-md-6" id="linkdiv">
							<ul className="list-inline">
								<h3 className="title">Linkit</h3>

								<li className="list-inline-item">
									<a href="https://www.facebook.com/HaagaHeliaAMK/?userLang=en" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-facebook" /></a>
								</li>

								<li className="list-inline-item">
									<a href="https://www.youtube.com/user/HAAGAHELIAviestinta?userLang=en" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-youtube" /></a>
								</li>

								<li className="list-inline-item">
									<a href="https://twitter.com/haagaheliaamk?userLang=en" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-twitter" /></a>
								</li>

								<li className="list-inline-item">
									<a href="https://www.linkedin.com/school/haaga-helia-university-of-applied-sciences/" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-linkedin" /></a>
								</li>

								<li className="list-inline-item">
									<a href="https://www.instagram.com/haagahelia/?userLang=en" target="_blank" rel="noopener noreferrer">
									<i className="fa fa-instagram" /></a>
								</li>
						
							</ul>
						</div>
					</div>
				</div>
				
				<div id="mobileFooter">
								
					<div className="container" id="linkdiv">
						<ul className="list-inline">

							<li className="list-inline-item">
								<a href="https://www.facebook.com/HaagaHeliaAMK/?userLang=en" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-facebook" /></a>
							</li>

							<li className="list-inline-item">
								<a href="https://www.youtube.com/user/HAAGAHELIAviestinta?userLang=en" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-youtube" /></a>
							</li>

							<li className="list-inline-item">
								<a href="https://twitter.com/haagaheliaamk?userLang=en" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-twitter" /></a>
							</li>

							<li className="list-inline-item">
								<a href="https://www.linkedin.com/school/haaga-helia-university-of-applied-sciences/" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-linkedin" /></a>
							</li>

							<li className="list-inline-item">
								<a href="https://www.instagram.com/haagahelia/?userLang=en" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-instagram" /></a>
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