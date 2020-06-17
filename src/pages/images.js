import React from 'react'
import Header from "../examples/Header"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import pic from "../images/image_3.jpeg"

export default function images( {data} ) {
    
    return (
      <>
      <Layout>

      </Layout>
    
      <Header/>
      
    <section className="images">
      <article className="single-image" alt = "dumb">
        <h3>Basic Image </h3>
        <img src = {pic} width="100%" alt= "screw"/>
       </article>
       <article className="single-image">
        <h3>Fixed Image </h3>
        <Img fixed = {data.fixed.childImageSharp.fixed} alt ="screw"/>
       </article>
       <article className="single-image">
        <h3>Fluid Image </h3>
        <Img fluid = {data.fluid.childImageSharp.fluid} />
       </article>
    
    </section>
    </>
    )
}

export const data = graphql `
query imagesSet{
    site{
      siteMetadata
      {
        title
        description
        author
        data
        person{
          name
          age
        }
      }
    }
    fixed:file(relativePath: {eq: "image_1.jpeg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    
    fluid: file(relativePath: {eq: "image_2.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }

`

