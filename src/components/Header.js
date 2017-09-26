import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//
class Header extends Component {
  renderContent() {
        return [
          <li key="1"> <a href="/api/logout">Logout</a></li>,
          <li key="2"> <a href="/api/logout">Logout</a></li>
        ];
    }
  
  render() {
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="left brand-logo">
              Logo
            </Link>
            <Link to="/dashboard"> dashboard </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;