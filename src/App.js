import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
  <body>
   <div class="container-fluid">
    <div class="container-fluid">
      <nav class="navbar navbar-inverse navbar-fixed-top">
         <ul class="nav navbar-nav navbar-right" id="navbar-napit">
           <li><a href="#etusivu">Etusivu</a></li>
           <li><a href="#kysely">Kysely</a></li>
           <li><a href="#tulokset">Tulokset</a></li>
           <li><a href="#footer">Ota yhteyttä</a></li>
         </ul>
      </nav>
    </div>
    
    <div id="etusivu">
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
    <div id="kysely">
      <h1>Testiä</h1>
    </div>
    <div id="tulokset">
      <h1>Testiiii</h1>
    </div>


<footer class="page-footer blue center-on-small-only" style={{backgroundColor:"#cdcdcd"}} id="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h2 class="title">Ota yhteyttä</h2>
                <p>lorem ipsum....</p>
            </div>
            <div class="col-md-6">
                <ul class="footer-linkit">
                    <h3 class="title">Linkit</h3>
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</div>
</body>
    );
  }
}

export default App;
