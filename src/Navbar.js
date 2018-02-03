import React, { Component } from 'react';
import logo from './img/hh_logo.png'

class Navbar extends Component {

	render() {
		return (
		  <nav class="navbar navbar-default navbar-static-top">
     <div class="container">
	 <img src={logo} alt={logo} id="logo" />
         <div class="navbar-header">
             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#top-navbar">
                 <i class="fa fa-bars" aria-hidden="true"></i>
             </button>
         </div>

         <div class="collapse navbar-collapse" id="top-navbar">
             
					<ul class="nav navbar-nav navbar-right" id="navbar-buttons">
					   <li><a href="#frontPage">Etusivu</a></li>
					   <li><a href="#survey">Kysely</a></li>
					   <li><a href="#results">Tulokset</a></li>
					   <li><a href="#footer">Ota yhteyttä</a></li>
					 </ul>
         </div>
     </div>
 </nav>
		
		)
	}
}

export default Navbar;