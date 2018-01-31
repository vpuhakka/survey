import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div class="container-fluid" >
  <h1>Bootstrap Affix Example</h1>
  <h3>Fixed (sticky) navbar on scroll</h3>
  <p>Scroll this page to see how the navbar behaves with data-spy="affix".</p>
  <p>The navbar is attached to the top of the page after you have scrolled a specified amount of pixels.</p>
</div>

<nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
  <ul class="nav navbar-nav">
    <li class="active"><a href="#">Basic Topnav</a></li>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3</a></li>
  </ul>
</nav>
      <div class="container-fluid">
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
      <h1>Some text to enable scrolling</h1>
    </div>
      </div>



    );
  }
}

export default App;
