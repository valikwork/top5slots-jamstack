
exports.createPages = async({ actions, graphql }) => {

    const result = await graphql(`
        {
            wpgraphql {
                
            }
        }
    `)
}