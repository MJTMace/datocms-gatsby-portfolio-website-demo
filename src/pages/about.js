import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const About = ({ data: { about } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="sheet__inner">
        <h6 className="sheet__title">{about.title}</h6>
        <p></p> 
	<p className="sheet__lead">{about.subtitle}</p>
        <p></p> 
	<div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 1000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
