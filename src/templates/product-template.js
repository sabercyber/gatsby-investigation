import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Image from 'gatsby-image'


const ComponentName = ({
     data:{
         product:{
             price,
             title,
             image:
             {fixed},
              info:{info}
            }
         }
    }) => {
return(
<Layout>
<div style = {{textAlign:"center"}}>
<Link to ="/product">back to product</Link>
    <h1>Single Product : {title}</h1>
</div>
<section className="single-product">
    <article>
        <Image fixed={fixed} alt={fixed}/>
    </article>
    <article>
    <h1>{title}</h1>
    <h3>Rs {price}</h3>
    <p>{info}</p>
    <button>Add to cart</button>
    </article>
</section>
</Layout>
)
}

export const query = graphql`
query GetSingleProduct($slug: String){
    product: contentfulProduct(slug: {eq: $slug}) {
      price
      slug
      title
      info {
        info
      }
      image {
        fixed (width : 300){
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName