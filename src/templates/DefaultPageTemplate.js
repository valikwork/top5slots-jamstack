import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"

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

export default function DefaultPageTemplate({ data }) {
  const { page } = data.wpgraphql
    return (
        <Layout>
          <Helmet
              htmlAttributes={{ lang: "en", amp: undefined }}
              title={page.seo.title}
              meta={[
                  { name: "description", content: page.seo.metaDesc },
                  { property: "og:type", content: page.seo.opengraphType },
              ]}
          />
            
        </Layout>
    )
}
