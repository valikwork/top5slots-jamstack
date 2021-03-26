import { useStaticQuery, graphql } from "gatsby"

export default function AllGamesCategories(exclude) {
    
    const gamesCategories = useStaticQuery(graphql`
        query {
            wpgraphql {
                games_categories(first: 1000) {
                    nodes {
                        id
                        name
                        uri
                        tax_games_categories {
                            termIcon {
                                mediaItemUrl
                            }
                        }
                    }
                }
            }
        }
    `)

    const gamesCategArray = gamesCategories.wpgraphql.games_categories.nodes;

    if(exclude){
        const sortedGamesCateg = gamesCategArray.filter(gameCateg => !exclude.includes(gameCateg.name));
        return sortedGamesCateg

    } else {
        return gamesCategArray
    }


}
