import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

export default function ReputationEstimate({ rating, className }) {

    const data = useStaticQuery(graphql`
        query {
            wpgraphql {
                reviewSettings {
                    option_review_settings {
                        ratings {
                            ratingLabel
                            ratingIcon {
                                mediaItemUrl
                            }
                        }
                    }
                }
            }
        }
    `)

    const reviewOptionFields = data.wpgraphql.reviewSettings.option_review_settings;

    //Handling Rating
    let ratingReputation = '';
    let ratingCSSClass = '';
    
    if(rating < 8 && rating >= 7){
        ratingReputation = 'Good';
        ratingCSSClass = 'good';
    } else if(rating < 9 && rating >= 8){
        ratingReputation = 'Very Good';
        ratingCSSClass = 'very-good';
    } else if(rating >= 9){
        ratingReputation = 'Perfect';
        ratingCSSClass = 'perfect';
    }

    let ratingIconUrl = '';
    if(reviewOptionFields){
        for (const rating of reviewOptionFields.ratings) {
            if(rating.ratingLabel === ratingReputation){
                ratingIconUrl = rating.ratingIcon.mediaItemUrl;
                break;
            }
        }
    }

    return (
        <div className={className}>
            <img src={ratingIconUrl} alt=""/>
            <span>{ratingReputation} <br/> Reputation</span>
        </div>
    )
}
