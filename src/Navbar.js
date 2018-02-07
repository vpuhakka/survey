import React, { Component } from 'react';
import logo from './img/hh_logo.png'

class Navbar extends Component {

	render() {
		return (
			<div>
				<img src={logo} alt={logo} id="logo" />
		  <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
     <div className="container">
	 
         <div className="navbar-header">
             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#top-navbar">
                 <i className="fa fa-bars" aria-hidden="true"></i>
             </button>
         </div>

         <div className="collapse navbar-collapse" id="top-navbar">
             
					<ul className="nav navbar-nav navbar-right" id="navbar-buttons">
					   <li><a href="#frontPage">Etusivu</a></li>
					   <li><a href="#survey">Kysely</a></li>
					   <li><a href="#results">Tulokset</a></li>
					   <li><a href="#footer">Ota yhteyttä</a></li>
					 </ul>
         </div>
     </div>
 </nav>
 </div>
		
		)
	}
}

export default Navbar;