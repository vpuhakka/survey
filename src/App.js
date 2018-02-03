import React, { Component } from 'react';

import './App.css';

import Survey from './Survey.js';
import Results from './Results.js';
import FrontPage from './FrontPage.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
  <div id="body">
    <Navbar />

    <div class="container" id="content">
		<FrontPage />
		<Survey />
		<Results />
	</div>
		<Footer />
</div>
    );
  }
}

export default App;
