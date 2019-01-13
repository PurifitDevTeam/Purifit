import React,{ Component } from 'react'
import { Link } from 'gatsby'
//import Img from 'gatsby-image'
//import wall from '../../images/wall.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter , faGooglePlus, faMedium,faInstagram } from '@fortawesome/free-brands-svg-icons'
//import Carousel from 'nuka-carousel'
//import CountUp from 'react-countup'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import {Link as CLink, Element, Events,  scrollSpy   } from "react-scroll";



//import leftarrow from '../../images/left-arrow.jpg'
//import rightarrow from '../../images/right-arrow.jpg'
import Footer from '../footer/index'




 class Index extends Component {


  state={
      isSidebarOpen : false,
      
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    window.addEventListener("scroll", this.handleScrollToElement);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollToElement);
  }

  handleScrollToElement = event => {
    const { isHide } = this.state;

    window.scrollY > 600
      ? !isHide && this.setState({ isHide: true })
      : isHide && this.setState({ isHide: false });
  };

  changeSidebarStatus=()=>{
    console.log('change sidebar status is called ');

    this.setState((prevState)=>({ 
      isSidebarOpen: !prevState.isSidebarOpen
    }));

    console.log('new state is ',this.state);

  }

  render() {

    const { DoctorSectionData }= this.props;
    
    let shownav = this.state.isSidebarOpen?'show':''
   const landinPageData = this.props.LandingViewContent[0].node;
   const NumbersSectionData1 = this.props.numbersSectionData[2].node;
   const NumbersSectionData2 = this.props.numbersSectionData[1].node;
   const NumbersSectionData3 = this.props.numbersSectionData[0].node;

   const WhatWhySectionData1 = this.props.WhatWhySection[2].node;
   const WhatWhySectionData2 = this.props.WhatWhySection[1].node;
   const WhatWhySectionData3 = this.props.WhatWhySection[0].node;


   const ProductFeaturesData1 = this.props.ProductFeaturesData[3].node;
   const ProductFeaturesData2 = this.props.ProductFeaturesData[2].node;
   const ProductFeaturesData3 = this.props.ProductFeaturesData[1].node;
   const ProductFeaturesData4 = this.props.ProductFeaturesData[0].node;

   const TestimonialsData1 = this.props.TestimonialsData[0].node;
   const TestimonialsData2 = this.props.TestimonialsData[1].node;
   const TestimonialsData3 = this.props.TestimonialsData[2].node;

    return (
      <div>
      
   
      <Element name="landed" className="element"> 
           <div id="fh5co-hero-wrapper">
        <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
          <Link className="navbar-brand" to="/">Purifit</Link>
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
              <CLink
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    className="topic-list-item nav-link"
                  >Products
               </CLink>
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
        <h1 className="animated fadeIn wow" data-wow-delay="0.4s">{landinPageData.productTagLine}</h1>
        <p className="animated fadeIn wow" data-wow-delay="0.67s">{landinPageData.shortDescription} </p>
        <CLink
        activeClass="active"
        to="products"
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
        className="topic-list-item"
      ><button className="btn btn-md features-btn-first animated fadeInLeft wow" data-wow-delay="0.95s" >Features</button>
   </CLink>
          <Zoom>
          <img className="fh5co-hero-smartphone animated fadeInRight wow" data-wow-delay="1s" src={landinPageData.productImage.file.url} alt="Filter" />
          </Zoom>
        </div>
    
    

      

  



      </div>  
      </Element>
      {/*End of hero wrapper */}


      {/* Numbers Section */}
      <div className="fh5co-advantages-outer">
      <div className="container">
        <h1 className="second-title"> <span className="span-features">Let the Numbers Speak</span></h1>
        <small></small>
  
        <div className="row fh5co-advantages-grid-columns">
  
                  <Fade delay={500} left={true}>
        {/* <NumbersSection url={cart} title={NumbersSectionData.title} quantity={NumbersSectionData.quantity} description={NumbersSectionData.description} /> */}
         <div className="col-sm-4" >
        <img className="grid-image" src={NumbersSectionData1.numbersIcon.file.url} alt="Icon-1"/>
        <div className="number-section-container">
        <h1 className="grid-number-title">{NumbersSectionData1.quantity}</h1>
        <h2 className="grid-sub-title">{NumbersSectionData1.title} </h2>
        <p className="grid-desc">{NumbersSectionData1.description}</p>
        </div>
      </div> 
                  </Fade>
                  <Zoom delay={500}>
          <div className="col-sm-4">
            <img className="grid-image" src={NumbersSectionData2.numbersIcon.file.url} alt="happy smile"/>
            <h1 className="grid-number-title">{NumbersSectionData2.quantity}</h1>
            <h2 className="grid-sub-title">{NumbersSectionData2.title} </h2>
            <p className="grid-desc">{NumbersSectionData2.description}</p>
          </div>
                  </Zoom>
  
                  <Fade delay={500} right={true}>
          <div className="col-sm-4">
                  <img className="grid-image" src={NumbersSectionData3.numbersIcon.file.url} alt="delivery van"/>
            <h1 className="grid-number-title">{NumbersSectionData3.quantity}</h1>
            <h2 className="grid-sub-title">{NumbersSectionData3.title}</h2>
            <p className="grid-desc">{NumbersSectionData3.description}</p>
          </div>
                  </Fade>
  
        </div>
      </div>
      </div>



       {/* ******Testimonials ********************/}
 <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
 <div id="fh5co-features" className="fh5co-features-outer" style={{marginTop:'-229px'}}>
     <div className="container">


     <div className="testimonial-section-heading"> <h1>Customer Testimonials</h1></div>
         <div className="row fh5co-features-grid-columns">
        
         <div className="col-sm-4">
         <div className="testimonial">
         <div className="testimonial-image">
         
         <img src={TestimonialsData1.image.file.url}  className="testimonial-image-user" alt="user1" />
         </div>
         <div className="testimonial-text-section">
         <div className="testimonial-title">{TestimonialsData1.title}</div>
         <div className="testimonial-text"><p>{TestimonialsData1.description.description} </p></div>
         <div className="testimonial-author">{`${TestimonialsData1.customerName}, ${TestimonialsData1.customerPlace}`}</div>
         </div>
         
         
         </div></div>
         <div className="col-sm-4">
         <div className="testimonial">
        <div className="testimonial-image">
        
        <img src={TestimonialsData2.image.file.url}  className="testimonial-image-user" alt="user-2" />
        </div>
        <div className="testimonial-text-section">
        <div className="testimonial-title">{TestimonialsData2.title}</div>
        <div className="testimonial-text"><p>{TestimonialsData2.description.description}</p></div>
        <div className="testimonial-author">{`${TestimonialsData2.customerName}, ${TestimonialsData2.customerPlace}`}</div>
        </div>
        
        
        </div>
        </div>
         <div className="col-sm-4">
         <div className="testimonial">
        <div className="testimonial-image">
        
        <img src={TestimonialsData3.image.file.url}  className="testimonial-image-user" alt="user-3" />
        </div>
        <div className="testimonial-text-section">
        <div className="testimonial-title">{TestimonialsData3.title}</div>
        <div className="testimonial-text"><p>{TestimonialsData3.description.description} </p></div>
        <div className="testimonial-author">{`${TestimonialsData3.customerName}, ${TestimonialsData3.customerPlace}`}</div>
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
			<h1 className="second-title"> <span className="span-features">Purifit </span></h1>
			<small>This is who we are</small>

			<div className="row fh5co-advantages-grid-columns">

                <Fade delay={500} left={true}>
				<div className="col-sm-4">
					<img className="grid-image" src={WhatWhySectionData1.icon.file.url} alt="Icon-1"/>
					<h1 className="grid-title">{WhatWhySectionData1.title}</h1>
					<p className="grid-desc">{WhatWhySectionData1.description.description}</p>
				</div>
                </Fade>
                <Zoom delay={500}>
				<div className="col-sm-4">
					<img className="grid-image" src={WhatWhySectionData2.icon.file.url} alt="Icon-2"/>
					<h1 className="grid-title">{WhatWhySectionData2.title}</h1>
					<p className="grid-desc">{WhatWhySectionData2.description.description}</p>
				</div>
                </Zoom>

                <Fade delay={500} right={true}>
				<div className="col-sm-4">
                <img className="grid-image" src={WhatWhySectionData3.icon.file.url} alt="Icon-3"/>
					<h1 className="grid-title">{WhatWhySectionData3.title}</h1>
					<p className="grid-desc">{WhatWhySectionData3.description.description}</p>
				</div>
                </Fade>

			</div>
		</div>
    </div>
    
    
    {/* ******Features ********************/}
    <Element name="products" className="element"> 
    <div className="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
	<div id="fh5co-features" className="fh5co-features-outer">
		<div className="container">

			<div className="row fh5co-features-grid-columns">

				<div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
					<div className="col-sm-image-container">
						<Fade delay={400} left={true}><img className="img-float-left featureimages" src={ProductFeaturesData1.productImage.file.url} alt="shower filter"/></Fade>
						{/* <span className="span-new">NEW</span>
             <span className="span-improved">Improved</span>
            */}
					</div>
				</div>

				<div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
					<h1>{ProductFeaturesData1.title}</h1>
					<p>{ProductFeaturesData1.description.description} </p>
				{/* 	<span className="circle circle-first"><i className="fab fa-instagram"></i></span>
					<span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
    <span className="circle circle-last"><i className="fab fa-twitter"></i></span> */}
				</div>

				<div className="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft" data-wow-delay="0.22s">
					<h1>{ProductFeaturesData2.title}</h1>
					<p>{ProductFeaturesData2.description.description} </p>
					{/*	<span className="circle circle-first"><i className="fas fa-star"></i></span>
					<span className="circle circle-middle"><i className="far fa-star"></i></span>
					<span className="circle circle-last"><i className="far fa-thumbs-up"></i></span>*/}
				</div>

				<div className="col-sm-6 in-order-4 wow animated fadeInRight" data-wow-delay="0.22s">
					<Fade delay={400} right={true}><img className="img-float-right featureimages" src={ProductFeaturesData2.productImage.file.url} alt="tap filter"/></Fade>
        </div>
        
        <div className="col-sm-6 in-order-1 wow animated fadeInLeft" data-wow-delay="0.22s">
        <div className="col-sm-image-container">
          <Fade delay={400} left={true}><img className="img-float-left featureimages" src={ProductFeaturesData3.productImage.file.url} alt="shower filter"/></Fade>
         {/* <span className="span-new">NEW</span>
        <span className="span-improved">Improved</span> */}
        </div>
      </div>

      <div className="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
        <h1>{ProductFeaturesData3.title}</h1>
        <p>{ProductFeaturesData3.description.description} </p>
      {/* 	<span className="circle circle-first"><i className="fab fa-instagram"></i></span>
        <span className="circle circle-middle"><i className="fab fa-facebook"></i></span>
  <span className="circle circle-last"><i className="fab fa-twitter"></i></span> */}
      </div>

				<div className="col-sm-6 in-order-5 wow animated fadeInLeft" data-wow-delay="0.22s">
					<div className="col-sm-image-container">
						<Fade delay={400} left={true}><img className="img-float-left featureimages" src={ProductFeaturesData4.productImage.file.url} alt="tap filter" /></Fade>
						{/*<span className="span-data">DATA</span>
<span className="span-percent">100%</span> */}
					</div>
				</div>
				<div className="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight" data-wow-delay="0.22s">
					<h1>{ProductFeaturesData4.title}</h1>
					<p>{ProductFeaturesData4.description.description}</p>
				{/*	<span className="circle circle-first">95%</span>
					<span className="circle circle-middle"><i className="fas fa-forward"></i></span>
        <span className="circle circle-last"><i className="fab fa-github"></i></span> */}

				</div>


       


			</div> 


		</div>
  </div>
  </Element>
    {/* End of Features ***************/}



{/* Start of Doctor Reccomendations */}
<div id="fh5co-features" className="fh5co-features-outer-doctor">
    <div className="container">
    <h1 className="doctors-section-title"> <span className="span-features">Even the Doctors say..</span></h1>
    <div className="row fh5co-advantages-grid-columns">
   
        <div className="col-sm-6">
        <div className="testimonial">
        <div className="testimonial-image">
        
        <img src={DoctorSectionData[0].node.profilePicture?DoctorSectionData[0].node.profilePicture.file.url:''} alt="doctor-profile" className="testimonial-image-user"/>
        </div>
        <div className="testimonial-text-section">
        <div className="testimonial-title">{DoctorSectionData[0].node.review}</div>
        <div className="testimonial-text"><p>{DoctorSectionData[0].node.description.description}</p></div>
        <div className="testimonial-author">{`${DoctorSectionData[0].node.name}, ${DoctorSectionData[0].node.designation}`}</div>
        </div>
        
        
        </div>
        </div>


        <div className="col-sm-6">
        <div className="testimonial">
        <div className="testimonial-image">
        
        <img src={DoctorSectionData[1].node.profilePicture?DoctorSectionData[1].node.profilePicture.file.url:''}  alt="doctor-profile" className="testimonial-image-user"/>
        </div>
        <div className="testimonial-text-section">
        <div className="testimonial-title">{DoctorSectionData[1].node.review}</div>
        <div className="testimonial-text"><p>{DoctorSectionData[1].node.description.description}</p></div>
        <div className="testimonial-author">{`${DoctorSectionData[1].node.name}, ${DoctorSectionData[1].node.designation}`}</div>
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


