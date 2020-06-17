import React from 'react'
import Header from "../examples/Header"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import pic from "../images/image_3.jpeg"

export default function examples( {data} ) {
    
    return (
        <div>
            <Layout/>
            <h1>Hello from Examples</h1>
            <Header/>
    <h4>Age : {data.site.siteMetadata.person.name}</h4>
    <section className="images">
      <article className="single-image">
        <h3>Basic Image </h3>
        <img src = {pic} />
       </article>
       <article className="single-image">
        <h3>Fixed Image </h3>
        <Img fixed = {data.fixed.childImageSharp.fixed} />
       </article>
       <article className="single-image">
        <h3>Fluid Image </h3>
        <Img fluid = {data.fluid.childImageSharp.fluid} />
       </article>
    
    </section>
        </div>
        
    )
}

export const data = graphql `
query Myquery{
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
