import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
  query first_query{
    site {
      info:siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
  `)
  return (
      <div>
          <h1>
             Person:  {data.site.info.person.name}
          </h1>
          <h1>
              Title: {data.site.info.title}
          </h1>
          <h2>Description</h2>
          <p>
          
          {data.site.info.description}

          </p>
          <p>


          </p>
      </div>
  )
}

export default ComponentName
