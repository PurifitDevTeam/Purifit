import React from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import styled from 'styled-components'
import {Container,Section} from '../components/styles/CommonStyles';



export default function about(props) {
  const { title , description  } = props.data.allContentfulAboutSection.edges[0].node
  console.log('title is ',title)
  return (
    <div>
        <Layout isHome={false}>
       <Section>
       <div class="container">

       <h1 className="second-title-blog"><span className="span-features-blog">{title}</span></h1>
       
       <div className="about-us-section-article"   dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}>
       </div>
    </div>
           
           

       </Section>
            
        </Layout>
      
    </div>
  )
}

export const query = graphql`

query{
  allContentfulAboutSection {
    edges{
      node {
        title
        description {
          childMarkdownRemark{
            html
            excerpt
          }
        }
      }
    }
  }
}
`