import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {Container} from '../styles/CommonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,fabFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter ,faGooglePlus, faMedium,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import showericon from '../../images/showericon.jpg'


const Footer = ()=> {
  return (
    <footer className="footer-outer">
		<div className="container footer-inner">

			<div className="footer-three-grid wow fadeIn animated" data-wow-delay="0.66s">
				<div className="column-1-3">
					<h1 className="purifit-brand">Purifit</h1>
				</div>
				<div className="column-2-3">
					<nav className="footer-nav">
						<ul>
							<Link to="/home"><li className="active">Home</li></Link>
							<Link to="/blog"><li>Blog</li></Link>
							<Link to="/"><li>Products</li></Link>
							<Link to="/about"><li>About</li></Link>
							<Link to="/"><li>Contact</li></Link>
						
						</ul>
					</nav>
				</div>

				<div className="column-3-3">
					<div className="social-icons-footer">
						<a href="https://www.facebook.com/fh5co" className="footer-social-icon"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
						<a href="https://www.instagram.com/fh5co" className="footer-social-icon"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        <a href="https://www.twitter.com/fh5co" className="footer-social-icon"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                        <a href="https://www.googleplus.com/fh5co" className="footer-social-icon"><FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></a>
                        <a href="https://www.medium.com/fh5co" className="footer-social-icon"><FontAwesomeIcon icon={faMedium}></FontAwesomeIcon></a>
					</div>
				</div>
				
			</div>

			<span className="border-bottom-footer"></span>

			<p className="copyright">&copy; 2018 Purifit All rights reserved. Design by <span className="footericonshower"><img className="showerimageicon" src={showericon}/></span></p>

		</div>
		

	</footer>
  )
}

export default Footer;
