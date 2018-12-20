import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components'
import {Container,Section} from '../components/styles/CommonStyles';
import PostListing from '../components/Posts/PostListing'


const BlogPage =({data})=> {

    console.log('data is',data)
  return (
    <div>
        <Layout isHome={false}>
       <Section>
           <div class="container">

          <h1 className="second-title-blog"><span className="span-features-blog">Blogs</span></h1>
      <br/>
      {data.allContentfulBlogPost.edges.map(({node})=><PostListing post={node} key={node.id}/>)}

           </div>
           
           

       </Section>
            
        </Layout>
      
    </div>
  )
}


export default BlogPage

export const query = graphql`
    query{

      allContentfulBlogPost{
        edges{
          node{
            title
            createdAt (formatString: "DD - MMMM - YYYY" )
            body {
              childMarkdownRemark{
                excerpt
              }
            }
            slug
            id
          }
        }
      
      }
    }


`