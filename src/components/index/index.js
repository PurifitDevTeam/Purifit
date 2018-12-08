import React,{ Component } from 'react'
import { Link } from 'gatsby'
//import wall from '../../images/wall.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload,faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'nuka-carousel';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import icon1 from '../../images/icon-1.png'
import icon2 from '../../images/icon-2.png'
import icon3 from '../../images/icon-3.png'
import showerfilter from '../../images/showerfilter.png'
import tap2 from '../../images/tap2.jpg'
import tapfilter from '../../images/tap-filter.jpg'
import handShower from '../../images/handshower1.jpg'
import leftarrow from '../../images/left-arrow.jpg'
import rightarrow from '../../images/right-arrow.jpg'
import Footer from '../footer/index'
import user1 from '../../images/user1.jpg'
import user2 from '../../images/user2.jpg'
import user3 from '../../images/user3.jpg'

 class Index extends Component {


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
      
   

           <div id="fh5co-hero-wrapper">
        <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
          <a className="navbar-brand" href="">Purifit</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-items-center ml-auto mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onclick="$('#fh5co-features').goTo();return false;">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onclick="$('#fh5co-reviews').goTo();return false;">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  onclick="$('#fh5co-download').goTo();return false;">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  onclick="$('#fh5co-download').goTo();return false;">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  onclick="$('#fh5co-download').goTo();return false;">Contact</a>
              </li>
            </ul>
            <div className="social-icons-header">
              <a href="https://www.facebook.com/fh5co"><i className="fab fa-facebook-f"></i></a>
              <a href="https://freehtml5.co"><i className="fab fa-instagram"></i></a>
              <a href="https://www.twitter.com/fh5co"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </nav>
    
        <div className="container fh5co-hero-inner">
          <h1 className="animated fadeIn wow" data-wow-delay="0.4s">A new tool for purity</h1>
          <p className="animated fadeIn wow" data-wow-delay="0.67s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptates, aliquid soluta distinctio dolorum tenetur. </p>
          <button className="btn btn-md download-btn-first wow fadeInLeft animated" data-wow-delay="0.85s" onclick="$('#fh5co-download').goTo();return false;"><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>&nbsp;&nbsp;Brochure</button>
          <button className="btn btn-md features-btn-first animated fadeInLeft wow" data-wow-delay="0.95s" onclick="$('#fh5co-features').goTo();return false;"><FontAwesomeIcon icon={faPuzzlePiece}/>&nbsp;&nbsp;Products</button>
          <Zoom>
          <img className="fh5co-hero-smartphone animated fadeInRight wow" data-wow-delay="1s" src={showerfilter} alt="Filter" />
          </Zoom>
        </div>
    
    

      

  



      </div>  {/*End of hero wrapper */}


      <div className="fh5co-advantages-outer">
		<div className="container">
			<h1 className="second-title"><span className="span-perfect span-purifit">Purifit</span> <span className="span-features">Features</span></h1>
			<small>Only necessary</small>

			<div className="row fh5co-advantages-grid-columns">

                <Fade delay={500} left={true}>
				<div className="col-sm-4">
					<img className="grid-image" src={icon1} alt="Icon-1"/>
					<h1 className="grid-title">Usability</h1>
					<p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
				</div>
                </Fade>
                <Zoom delay={500}>
				<div className="col-sm-4">
					<img className="grid-image" src={icon2} alt="Icon-2"/>
					<h1 className="grid-title">Vitamins Diffusion</h1>
					<p className="grid-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate.</p>
				</div>
                </Zoom>

                <Fade delay={500} right={true}>
				<div className="col-sm-4">
                <img className="grid-image" src={icon3} alt="Icon-3"/>
					<h1 className="grid-title">Fit Perfect</h1>
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
						<Fade delay={400} left={true}><img className="img-float-left featureimages" src={handShower} alt="shower filter"/></Fade>
						<span className="span-new">NEW</span>
						<span className="span-improved">Improved</span>
					</div>
				</div>

				<div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
					<h1>New Features</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
					<span className="circle circle-first"><i className="fab fa-instagram"></i></span>
					<span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
					<span className="circle circle-last"><i className="fab fa-twitter"></i></span>
				</div>

				<div className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
					<h1>ADDED MINERALS</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor iste beatae ad adipisci, fugiat dignissimos pariatur, dolore nemo suscipit cum nisi earum voluptates nulla! </p>
					<span className="circle circle-first"><i className="fas fa-star"></i></span>
					<span className="circle circle-middle"><i className="far fa-star"></i></span>
					<span className="circle circle-last"><i className="far fa-thumbs-up"></i></span>
				</div>

				<div className="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
					<Fade delay={400} right={true}><img className="img-float-right featureimages" src={tapfilter} alt="tap filter"/></Fade>
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
					<span className="circle circle-first">95%</span>
					<span className="circle circle-middle"><i className="fas fa-forward"></i></span>
					<span className="circle circle-last"><i className="fab fa-github"></i></span>

				</div>




			</div> 


		</div>
	</div>
    {/* End of Features ***************/}




 {/* ******Testimonials ********************/}
 <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
 <div id="fh5co-features" className="fh5co-features-outer">
     <div className="container">


     <div className="testimonial-section-heading"> <h1>Our users say..</h1></div>
         <div className="row fh5co-features-grid-columns">
        



    <Carousel autoplay={true} autoplayInterval={3000} swiping={true} renderCenterLeftControls={({ previousSlide }) => (
        <button className="carouselbutton" onClick={previousSlide}><img src={leftarrow} className="testimonial-carousel-arrow" /></button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className="carouselbutton" onClick={nextSlide}><img src={rightarrow} className="testimonial-carousel-arrow" /></button>
      )}>
        
    <div>
        <div className="col-sm-12 testimonial_container">

        <div class="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
        <div className="testimonial-image">
        
        <img src={user1}  className="testimonial-image-user"/></div>
        <div className="testimonial-title">Best Product</div>
        <div className="testimonial-text"><p>Lleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p></div>
        <div className="testimonial-author">Emma Whitton, Customer</div>
        </div>
        
        </div>
    </div>
        
    <div>
    <div className="col-sm-12 testimonial_container">

    <div class="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
    <div className="testimonial-image">
    
    <img src={user2} className="testimonial-image-user" /></div>
    <div className="testimonial-title">zawer</div>
    <div className="testimonial-text"><p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p></div>
    <div className="testimonial-author">Josephine Sans, Customer</div>
    </div>
    
    </div>
    </div>

    <div>
    <div className="col-sm-12 testimonial_container">

    <div class="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
    <div className="testimonial-image">
    
    <img src={user3} className="testimonial-image-user" /></div>
    <div className="testimonial-title">zawer</div>
    <div className="testimonial-text"><p>Leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem</p></div>
    <div className="testimonial-author">Jane Doe, Customer</div>
    </div>
    
    </div>
    </div>
    
        
      </Carousel>
        
            

             

            

            

            
             




         </div> 


     </div>
 </div>
 {/* End of Testimonials ***************/}


<Footer/>
        
      </div>
    )
  }
}



export default Index
