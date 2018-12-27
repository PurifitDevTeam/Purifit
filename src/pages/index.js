import React from 'react'
//import { Link } from 'gatsby'

//import Layout from '../components/layout'
//import {Container} from '../components/styles/CommonStyles';
import IndexComponent from '../components/index'
import SiteMeta from '../components/SiteMeta/site-metadata'



const IndexPage = ({data}) => {
//console.log('######## data is ',data);
//const { node } = data.allContentfulLandingPageContent.edges[0];
//console.log('node is ',node);
  return ( 
    <React.Fragment>
    <SiteMeta/>
    <IndexComponent TestimonialsData={data.allContentfulTestimonials.edges} ProductFeaturesData={data.allContentfulProductFeatures.edges} DoctorSectionData={data.allContentfulDoctorReccomendations.edges} WhatWhySection={data.allContentfulWhatWhySection.edges} LandingViewContent={data.allContentfulLandingViewContent.edges}  numbersSectionData={data.allContentfulNumbersSection.edges}/>
    </React.Fragment>
  )
}







export default IndexPage


export const query = graphql`
    query{ 




      allContentfulLandingViewContent {
        edges {
          node {
            id
            productTagLine
            shortDescription
            productImage {
              id
              title 
              sizes(maxWidth:375) {
                ...GatsbyContentfulSizes
              }
              file{
                url
               
              }
            }
          }
        }
      }



      allContentfulNumbersSection{
        edges {
          node {
            title
            quantity
            description
            
            numbersIcon {
              id
              file{
                url
              }
            }
          }
        }
      }


      allContentfulTestimonials{
        edges {
          node {
            id
            title
            description {
              id
              description
            }
            customerName
            customerPlace
            image {
              file {
                url
              }
            }
          }
        }
      }


      allContentfulWhatWhySection{
        edges {
          node {
            id
            title
            description {
              id
              description
            }
            icon {
              id
              file{
                url
              }
            }
          }
        }
      }


      allContentfulProductFeatures{
        edges {
          node {
            id
            title
            description {
              id
              description
            }
            productImage {
              id
              file{
                url
              }
              
            }
            
          }
        }
      }


      allContentfulDoctorReccomendations{
        edges {
          node {
            id
            name
            description {
              id
              description
            }
            review
            designation
            profilePicture{
              file{
                url
              }
            }
            
          }
        }
      }





    }`


