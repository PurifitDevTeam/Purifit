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
      <div>
      <SiteMetaData title={siteTitle}/>
       
      </div>
    )
  }
}



export default Header
