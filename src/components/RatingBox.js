import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

export default function RatingBox({ reviewData }) {
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
    
    if(reviewData.cpt_reviews.rating < 8 && reviewData.cpt_reviews.rating >= 7){
        ratingReputation = 'Good';
        ratingCSSClass = 'good';
    } else if(reviewData.cpt_reviews.rating < 9 && reviewData.cpt_reviews.rating >= 8){
        ratingReputation = 'Very Good';
        ratingCSSClass = 'very-good';
    } else if(reviewData.cpt_reviews.rating >= 9){
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
        <div className={`${ratingCSSClass} rating-box`}>
            <div className="rating-box__top">
                <img src={ratingIconUrl} alt=""/>
                <span className="rating-box__rating">{reviewData.cpt_reviews.rating} / 10</span>
            </div>
            <span className="rating-box__bottom">{ratingReputation} Reputation</span>
        </div>
    )
}
