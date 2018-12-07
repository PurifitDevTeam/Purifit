import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/layout';
import {Container,Section} from '../components/styles/CommonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {TempDiv,GoBackDiv} from './styles';
import './styles.css';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { contentfulBlogPost } = data // data.markdownRemark holds our post data
  const { title, date, body } = contentfulBlogPost
  return (
    <Layout>

          <Section>
           <Container>

                <TempDiv>
                    <br/>
                     <h1>{title}</h1>
                        
                        <h2>{date}</h2>
                    
                    <br/>
                    <article> 
            <div
             className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
                /></article>
       
      </TempDiv>
<hr/>
<GoBackDiv><Link to="/blog"><FontAwesomeIcon icon={faArrowLeft}> </FontAwesomeIcon> Go to Blogs</Link></GoBackDiv>


           </Container>
           </Section> 
          
     
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug:{eq:$slug})
  {


      title
      body{
        childMarkdownRemark{
          html
          excerpt
        }
      }
      slug
      id
    }
  }
`