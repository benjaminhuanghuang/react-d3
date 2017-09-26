import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
//
class Header extends Component {
  renderContent() {
    return [
      <li key="1">
        {" "}
        <a href="/api/logout">Logout</a>
      </li>,
      <li key="2">
        {" "}
        <a href="/api/logout">Logout</a>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/"> React+D3</NavLink>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a  href="#">Action</a></li>
              <li><NavLink activeClassName="active" to="/"> Home</NavLink></li>
              <li><NavLink activeClassName="active" to="/dashboard"> Dashboard</NavLink></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                  Options <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Dropdown <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div> {/*container-fluid*/}
      </nav>
    );
  }
}

export default Header;
