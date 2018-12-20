import React,{ Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
//import wall from '../../images/wall.jpg'
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import SiteMetaData from '../SiteMeta/site-metadata'
import './style.css'



 class Header extends Component {


  state={
      isSidebarOpen : false
  }


  changeSidebarStatus=()=>{
    console.log('change sidebar status is called ');

    this.setState((prevState)=>({ 
      isSidebarOpen: !prevState.isSidebarOpen
    }));

    console.log('new state is ',this.state);

  }

  render() {
console.log('isHome',this.props);
    const {siteTitle}= this.props;
    return (
     
      <div className="app-header-wrapper">
      <SiteMetaData title={siteTitle}/>
      <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
      <a className="navbar-brand" href="">Purifit</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-items-center ml-auto mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/blog" >Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" >Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" >About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/" >Contact</Link>
        </li>
          
        </ul>
        <div className="social-icons-header">
          <a href="https://www.facebook.com/fh5co"><i className="fab fa-facebook-f"></i></a>
          <a href="https://freehtml5.co"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com/fh5co"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </nav>
      </div>
      
    )
  }
}



export default Header
