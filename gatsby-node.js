
exports.createPages = async({ actions, graphql }) => {

    const result = await graphql(`
        {
            wpgraphql {

                pages(first: 5000) {
                    nodes {
                      id
                      uri
                      template {
                        ... on WPGraphQL_DefaultTemplate {
                          templateName
                        }
                        ... on WPGraphQL_Template_HomePage {
                          templateName
                        }
                        ... on WPGraphQL_Template_ContactUs {
                          templateName
                        }
                      }
                    }
                }

                taxonomies {
                    nodes {
                        name
                        id
                        label
                        graphqlPluralName
                        graphqlSingleName
                    }
                }


            }
        }
    `)

    // pull the page data out of the query response
    const pages = result.data.wpgraphql.pages.nodes

    // loop through WordPress pages and create a Gatsby page for each one
    pages.forEach(page => {
        switch (page.template.templateName.split(' ').join('')) {
            case "HomePage":
                actions.createPage({
                    path: page.uri,
                    component: require.resolve("./src/templates/HomePage.js"),
                    context: {
                        id: page.id,
                    },
                })
                break;
            default:
                actions.createPage({
                    path: page.uri,
                    component: require.resolve("./src/templates/Default.js"),
                    context: {
                        id: page.id,
                    },
                })
        }
    })

    const taxonomies = result.data.wpgraphql.taxonomies.nodes;
    // console.log(taxonomies);
    taxonomies.forEach(tax => {
        switch (tax.name) {
            case "bonuses":
                actions.createPage({
                    path: tax.name,
                    component: require.resolve("./src/templates/archives/taxonomies/TaxReviewBonusArchive.js"),
                    context: {
                        id: tax.id,
                    },
                })
                break;
            default:
                
                break;
        }
    })

}