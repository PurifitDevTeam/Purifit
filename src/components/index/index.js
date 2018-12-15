import React,{ Component } from 'react'
import { Link } from 'gatsby'
//import wall from '../../images/wall.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter ,faGooglePlus, faMedium,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'nuka-carousel'
import CountUp from 'react-countup'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import icon1 from '../../images/icon-1.png'
import cart from '../../images/cart.jpg'
import smile1 from '../../images/smile2.jpg'
import delivery1 from '../../images/delivery1.jpg'
import icon2 from '../../images/icon-2.png'
import icon3 from '../../images/icon-3.png'
import DoctorImage from '../../images/DoctorImage.png'
import showerfilter from '../../images/product1.jpg'
import withShower from '../../images/with-shower.jpg'
import tap2 from '../../images/tap2.jpg'
import productbox from '../../images/product-box-1.png'
import handShower from '../../images/handshower1.jpg'
import leftarrow from '../../images/left-arrow.jpg'
import rightarrow from '../../images/right-arrow.jpg'
import Footer from '../footer/index'
import user1 from '../../images/user1.jpg'
import user2 from '../../images/user2.jpg'
import user3 from '../../images/user3.jpg'

 class Index extends Component {


  state={
      isSidebarOpen : false,
      
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
      <div>
      
   

           <div id="fh5co-hero-wrapper">
        <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
          <a className="navbar-brand" href="">Purifit</a>
          <button className="navbar-toggler" type="button" onClick={this.changeSidebarStatus}>
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className={`collapse navbar-collapse ${shownav}`} id="navbarSupportedContent">
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
    
        <div className="container fh5co-hero-inner">
        <h1 className="animated fadeIn wow" data-wow-delay="0.4s">A new tool for purity</h1>
        <p className="animated fadeIn wow" data-wow-delay="0.67s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates, aliquid soluta distinctio dolorum tenetur. </p>
          <Zoom>
          <img className="fh5co-hero-smartphone animated fadeInRight wow" data-wow-delay="1s" src={productbox} alt="Filter" />
          </Zoom>
        </div>
    
    

      

  



      </div>  {/*End of hero wrapper */}


      {/* Numbers Section */}
      <div className="fh5co-advantages-outer">
      <div className="container">
        <h1 className="second-title"> <span className="span-features">Let the Numbers Speak</span></h1>
        <small></small>
  
        <div className="row fh5co-advantages-grid-columns">
  
                  <Fade delay={500} left={true}>
          <div className="col-sm-4">
            <img className="grid-image" src={cart} alt="Icon-1"/>
            <div className="number-section-container">
            <h1 className="grid-number-title">910+ </h1>
            <h2 className="grid-sub-title">Products sold </h2>
            <p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
            </div>
          </div>
                  </Fade>
                  <Zoom delay={500}>
          <div className="col-sm-4">
            <img className="grid-image" src={smile1} alt="Icon-2"/>
            <h1 className="grid-number-title">910+</h1>
            <h2 className="grid-sub-title">Happy Customers </h2>
            <p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
          </div>
                  </Zoom>
  
                  <Fade delay={500} right={true}>
          <div className="col-sm-4">
                  <img className="grid-image" src={delivery1} alt="Icon-3"/>
            <h1 className="grid-number-title">28+</h1>
            <h2 className="grid-sub-title">Delivery Centres</h2>
            <p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
          </div>
                  </Fade>
  
        </div>
      </div>
      </div>



       {/* ******Testimonials ********************/}
 <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
 <div id="fh5co-features" className="fh5co-features-outer">
     <div className="container">


     <div className="testimonial-section-heading"> <h1>Our users say..</h1></div>
         <div className="row fh5co-features-grid-columns">
        
         <div className="col-sm-4">
         <div class="testimonial">
         <div className="testimonial-image">
         
         <img src={user1}  className="testimonial-image-user"/>
         </div>
         <div class="testimonial-text-section">
         <div className="testimonial-title">Best Product</div>
         <div className="testimonial-text"><p>Lleap into electronic typesetting, Excellent Product with the release of Letraset sheets containing Lorem Ipsum </p></div>
         <div className="testimonial-author">Emma Whitton, Customer</div>
         </div>
         
         
         </div></div>
         <div className="col-sm-4">
         <div class="testimonial">
        <div className="testimonial-image">
        
        <img src={user2}  className="testimonial-image-user"/>
        </div>
        <div class="testimonial-text-section">
        <div className="testimonial-title">Best Product</div>
        <div className="testimonial-text"><p>Lleap into electronic typesetting, Excellent Product with the release of Letraset sheets containing Lorem Ipsum </p></div>
        <div className="testimonial-author">Sophie Turner, Customer</div>
        </div>
        
        
        </div>
        </div>
         <div className="col-sm-4">
         <div class="testimonial">
        <div className="testimonial-image">
        
        <img src={user3}  className="testimonial-image-user"/>
        </div>
        <div class="testimonial-text-section">
        <div className="testimonial-title">Best Product</div>
        <div className="testimonial-text"><p>Lleap into electronic typesetting, Excellent Product with the release of Letraset sheets containing Lorem Ipsum </p></div>
        <div className="testimonial-author">Julia Roberts, Customer</div>
        </div>
        
        
        </div>
         </div>


         </div> 


     </div>
 </div>
 {/* End of Testimonials ***************/}

 

      {/* What why and how section */}
      <div className="fh5co-advantages-outer what-why-section">
		<div className="container">
			<h1 className="second-title"> <span className="span-features">What, Why </span></h1>
			<small>We will tell you what we are trying to solve, what impact does it make</small>

			<div className="row fh5co-advantages-grid-columns">

                <Fade delay={500} left={true}>
				<div className="col-sm-4">
					<img className="grid-image" src={icon1} alt="Icon-1"/>
					<h1 className="grid-title">Filter</h1>
					<p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
				</div>
                </Fade>
                <Zoom delay={500}>
				<div className="col-sm-4">
					<img className="grid-image" src={icon2} alt="Icon-2"/>
					<h1 className="grid-title">How</h1>
					<p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
				</div>
                </Zoom>

                <Fade delay={500} right={true}>
				<div className="col-sm-4">
                <img className="grid-image" src={icon3} alt="Icon-3"/>
					<h1 className="grid-title">Advantages</h1>
					<p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
				</div>
                </Fade>

			</div>
		</div>
    </div>
    

    {/* ******Features ********************/}
    <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
	<div id="fh5co-features" className="fh5co-features-outer">
		<div className="container">

			<div className="row fh5co-features-grid-columns">

				<div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
					<div className="col-sm-image-container">
						<Fade delay={400} left={true}><img className="img-float-left featureimages" src={withShower} alt="shower filter"/></Fade>
						<span className="span-new">NEW</span>
						<span className="span-improved">Improved</span>
					</div>
				</div>

				<div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
					<h1>New Features</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
				{/* 	<span className="circle circle-first"><i className="fab fa-instagram"></i></span>
					<span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
    <span className="circle circle-last"><i className="fab fa-twitter"></i></span> */}
				</div>

				<div className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
					<h1>ADDED MINERALS</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
					{/*	<span className="circle circle-first"><i className="fas fa-star"></i></span>
					<span className="circle circle-middle"><i className="far fa-star"></i></span>
					<span className="circle circle-last"><i className="far fa-thumbs-up"></i></span>*/}
				</div>

				<div className="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
					<Fade delay={400} right={true}><img className="img-float-right featureimages" src={showerfilter} alt="tap filter"/></Fade>
        </div>
        
        <div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
        <div className="col-sm-image-container">
          <Fade delay={400} left={true}><img className="img-float-left featureimages" src={withShower} alt="shower filter"/></Fade>
          <span className="span-new">NEW</span>
          <span className="span-improved">Improved</span>
        </div>
      </div>

      <div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
        <h1>New Features</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
      {/* 	<span className="circle circle-first"><i className="fab fa-instagram"></i></span>
        <span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
  <span className="circle circle-last"><i className="fab fa-twitter"></i></span> */}
      </div>

				<div className="col-sm-6 in-order-5 wow animated fadeInLeft" data-wow-delay="0.22s">
					<div className="col-sm-image-container">
						<Fade delay={400} left={true}><img className="img-float-left featureimages" src={tap2} alt="tap filter" /></Fade>
						<span className="span-data">DATA</span>
						<span className="span-percent">100%</span>
					</div>
				</div>
				<div className="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
					<h1>EXTENDED LIFE</h1>
					<p>Perfect for daily use consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
				{/*	<span className="circle circle-first">95%</span>
					<span className="circle circle-middle"><i className="fas fa-forward"></i></span>
        <span className="circle circle-last"><i className="fab fa-github"></i></span> */}

				</div>


       


			</div> 


		</div>
	</div>
    {/* End of Features ***************/}



{/* Start of Doctor Reccomendations */}
<div id="fh5co-features" className="fh5co-features-outer-doctor">
    <div className="container">
    <h1 className="doctors-section-title"> <span className="span-features">Even the Doctors say..</span></h1>
    <div className="row fh5co-advantages-grid-columns">
   
        <div className="col-sm-6">
        <div class="testimonial">
        <div className="testimonial-image">
        
        <img src={user1}  className="testimonial-image-user"/>
        </div>
        <div class="testimonial-text-section">
        <div className="testimonial-title">Best Product</div>
        <div className="testimonial-text"><p>Lleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p></div>
        <div className="testimonial-author">Emma Whitton, Customer</div>
        </div>
        
        
        </div>
        </div>


        <div className="col-sm-6">
        <div class="testimonial">
        <div className="testimonial-image">
        
        <img src={user2}  className="testimonial-image-user"/>
        </div>
        <div class="testimonial-text-section">
        <div className="testimonial-title">Best Product</div>
        <div className="testimonial-text"><p>Lleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p></div>
        <div className="testimonial-author">Emma Whitton, Customer</div>
        </div>
        
        
        </div>
        </div>


        </div> {/*End of row */}
    </div>
    </div>
{/* End of Doctor Reccomendations*/}



<Footer/>
        
      </div>
    )
  }
}



export default Index
