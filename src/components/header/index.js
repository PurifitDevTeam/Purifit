import React,{ Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter , faGooglePlus, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons'
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
    let shownav = this.state.isSidebarOpen?'show':''
    return (
     
      <div className="app-header-wrapper">
      <SiteMetaData title={siteTitle}/>
      <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
      <a className="navbar-brand" href="">Purifit</a>
      <button className="navbar-toggler" type="button" onClick={this.changeSidebarStatus}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${shownav}`}  id="navbarSupportedContent">
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
        <a href="https://www.facebook.com/purifit" target="blank"><FontAwesomeIcon    icon={faFacebookF} /></a>
        <a href="https://twitter.com/purifit" target="blank"><FontAwesomeIcon    icon={faTwitter} /></a>
        <a href="https://www.instagram.com/purifit" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.googleplus.com/purifit" target="blank"><FontAwesomeIcon icon={faGooglePlus} /></a>
        <a href="https://www.googleplus.com/purifit" target="blank"><FontAwesomeIcon icon={faMedium}/></a>
        </div>
      </div>
    </nav>
      </div>
      
    )
  }
}



export default Header
