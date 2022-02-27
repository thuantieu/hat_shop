import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const Navbar = (props) => {
  return (
    
    <nav className="nav-wrapper light-blue lighten-2">
      <div className="container">
        <Link className="brand-logo" to="/">Asano Hat Shop</Link>
        <a href="#" data-target="mobile" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink exact to="/">Shopping</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
         
        </ul>
      </div>


      <ul className="sidenav" id="mobile">
        <li><NavLink exact to="/">Main Page</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
      
    </nav>
    
    
    
        )
}

export default withRouter(Navbar);