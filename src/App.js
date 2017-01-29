import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  constructor(){
    super();
    this.state = {date: new Date().getFullYear()};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fuid">
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/this-link-doesn't-exist">Inaccurate link</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          { this.props.children }
        </div>

        <footer className="footer">
          <div className="container-fuid">
            <p className="text-muted">Patrik Lamberger {this.state.date}</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
