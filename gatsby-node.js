
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
                        ... on WPGraphQL_Template_ReviewArchivePage {
                          templateName
                        }
                      }
                    }
                }

                reviews(first: 10000) {
                    nodes {
                        id
                        uri
                        title
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

                contentTypes(first: 1000) {
                    nodes {
                        name
                        uri
                        id
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
            case "ReviewArchivePage":
                actions.createPage({
                    path: page.uri,
                    component: require.resolve("./src/templates/ReviewArchivePage.js"),
                    context: {
                        id: page.id,
                    },
                })
                break;
            case "ContactUs":
                actions.createPage({
                    path: page.uri,
                    component: require.resolve("./src/templates/ContactUsPage.js"),
                    context: {
                        id: page.id,
                    },
                })
                break;
            default:
                actions.createPage({
                    path: page.uri,
                    component: require.resolve("./src/templates/DefaultPageTemplate.js"),
                    context: {
                        id: page.id,
                    },
                })
                break;
        }
    })

    //Casino Review Single
    const reviews = result.data.wpgraphql.reviews.nodes
    reviews.forEach(review => {
        actions.createPage({
            path: review.uri,
            component: require.resolve("./src/templates/singles/ReviewSingle.js"),
            context: {
                id: review.id,
            },
        })
    })

    //Taxonomies Archive Pages
    const taxonomies = result.data.wpgraphql.taxonomies.nodes;
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

    //Post Type Archive Pages
    // postTypes = result.data.wpgraphql.contentTypes.nodes;
    // postTypes.forEach(type => {
    //     switch (type.name) {
    //         case "review":
    //             actions.createPage({
    //                 path: type.name,
    //                 component: require.resolve("./src/templates/archives/postTypes/ReviewArchivePage.js"),
    //                 context: {
    //                     id: type.id
    //                 },
    //             })
    //             break;
    //         default:
                
    //             break;
    //     }
    // })

}