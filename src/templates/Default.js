import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        id
        isFrontPage
        uri
        seo {
          metaDesc
          title
          opengraphType
        }
      }
    }
  }
`

export default function DefaultTemplate({ data }) {
  console.log(data);
    return (
        <Layout>
            
        </Layout>
    )
}
