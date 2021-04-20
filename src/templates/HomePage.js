import React, { useState, useEffect } from "react"
// import SearchInput, {createFilter} from 'react-search-input'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Tabs from "../components/Tabs";
import RatingBox from "../components/RatingBox";
import DateHandler from "../functions/DateHandler";
import MatchHeight from '../functions/MatchHeight';
import Parser from "html-react-parser"
import Equalizer from "react-equalizer";
import shortid from 'shortid';
import Helmet from "react-helmet"
 

import tabDecorLeft from '../assets/images/tab-section-left.png';
import tabDecorRight from '../assets/images/tab-section-right.png';

import gamesDecorLeft from '../assets/images/casino-games-decor-left.png';
import gamesDecorRight from '../assets/images/casino-games-decor-right.png';

import bonusDecorRight from '../assets/images/bonus-decor-right.png';

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

            tmpl_home_page {

                heroSearchSubtitle
                heroSearchTitle

                categoriesForTabs {
                    name
                    uri
                    tax_review_categories {
                        termImage {
                            mediaItemUrl
                        }
                        categoryHeader
                        categoryDescription
                    }
                    reviews(first: 7) {
                        nodes {
                            title
                            uri
                            cpt_reviews {
                                affiliateLink
                                bonusSubtext
                                bonusText
                                depositBonusText
                                rating
                                termsAndConditionsText
                                hasExclusiveBonus
                                languageOptions {
                                    language {
                                        name
                                        tax_review_languages {
                                            languageIcon {
                                            mediaItemUrl
                                            }
                                        }
                                    }
                                }
                            }
                            featuredImage {
                                node {
                                    mediaItemUrl
                                    sizes(size: REVIEW_SMALL)
                                    mediaDetails {
                                        filteredSizes(sizes: "review-small") {
                                            width
                                            height
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                gamesSectionHeading
                gameCategoriesToShow {
                    uri
                    name
                    tax_games_categories {
                        termIcon {
                            mediaItemUrl
                        }
                    }
                    games(first: 3) {
                        nodes {
                            uri
                            featuredImage {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }


                bonusesSectionHeading
                bonusesShowRecomended {
                    pickABonus
                    pickACasino {
                        ... on WPGraphQL_Review {
                            uri
                            title
                            featuredImage {
                                node {
                                    mediaDetails {
                                        filteredSizes(sizes: "review-extra-small") {
                                            width
                                            height
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                            cpt_reviews {
                                affiliateLink
                                bonusSubtext
                                bonusText
                                depositBonusText
                                rating
                                termsAndConditionsText
                                languageOptions {
                                    language {
                                        name
                                        tax_review_languages {
                                            languageIcon {
                                                mediaItemUrl
                                            }
                                        }
                                    }
                                }
                                noDepositBonus {
                                    hasThisBonus
                                    name
                                }
                                freeSpinsBonus {
                                    hasThisBonus
                                    name
                                }
                                depositBonus {
                                    hasThisBonus
                                    name
                                }
                                bestPercentageBonus {
                                    hasThisBonus
                                    name
                                }
                                otherBonus {
                                    hasThisBonus
                                    name
                                }
                            }
                        }
                    }
                }
                bonusesShowLatest {
                    pickABonus
                    pickACasino {
                        ... on WPGraphQL_Review {
                            uri
                            title
                            date
                            featuredImage {
                                node {
                                    mediaDetails {
                                        filteredSizes(sizes: "review-extra-small") {
                                            width
                                            height
                                            sourceUrl
                                        }
                                    }
                                }
                            }
                            cpt_reviews {
                                affiliateLink
                                bonusSubtext
                                bonusText
                                depositBonusText
                                rating
                                termsAndConditionsText
                                languageOptions {
                                    language {
                                        name
                                        tax_review_languages {
                                            languageIcon {
                                                mediaItemUrl
                                            }
                                        }
                                    }
                                }
                                noDepositBonus {
                                    hasThisBonus
                                    name
                                }
                                freeSpinsBonus {
                                    hasThisBonus
                                    name
                                }
                                depositBonus {
                                    hasThisBonus
                                    name
                                }
                                bestPercentageBonus {
                                    hasThisBonus
                                    name
                                }
                                otherBonus {
                                    hasThisBonus
                                    name
                                }
                            }
                        }
                    }
                }

                postsSectionHeading

                aboutUsHeading
                ourAdvantages {
                    advantageHeading
                    advantageText
                    advantageImage {
                        mediaItemUrl
                    }
                }
                
                aboutUsButtonText
                aboutUsButtonExternalLink
                aboutUsButtonInternalLink {
                    ... on WPGraphQL_Post {
                        uri
                    }
                    ... on WPGraphQL_Page {
                        uri
                    }
                    ... on WPGraphQL_Review {
                        uri
                    }
                    ... on WPGraphQL_Bonus {
                        uri
                    }
                    ... on WPGraphQL_Payment_method {
                        uri
                    }
                    ... on WPGraphQL_Game {
                        uri
                    }
                    ... on WPGraphQL_Game_provider {
                        uri
                    }
                }

            }
        }

        posts(first: 12) {
            nodes {
                uri
                title
                excerpt
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            
            }
        }

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
`

export default function HomePage({ data }) {
    const { page } = data.wpgraphql;
    const reviewOptionFields = data.wpgraphql.reviewSettings.option_review_settings;

    useEffect(() => {
        MatchHeight('bonus-section__recom--heading');
        MatchHeight('each-review');
    })

    const HeroSearchSection = () => {
        return (
            <div className="hero-search-section row full-width">
                <div className="column small-12 hero-search-section--content-wrap">
                    <h1 className="home-page-title">{page.tmpl_home_page.heroSearchTitle}</h1>
                    <h4 className="home-page-subtitle">{page.tmpl_home_page.heroSearchSubtitle}</h4>
                    <form className="hero-search" action="">
                        <input type="search" placeholder="Find your favourite game or casino"/>
                        <button type="submit">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5312 27.9297L21.5645 18.9615C23.0096 16.9758 23.7869 14.5825 23.7845 12.1266C23.7845 5.69861 18.5547 0.46875 12.1266 0.46875C5.69861 0.46875 0.46875 5.69861 0.46875 12.1266C0.46875 18.5547 5.69861 23.7845 12.1266 23.7845C14.5825 23.7869 16.9758 23.0096 18.9615 21.5645L27.9297 30.5312L30.5312 27.9297ZM12.1266 20.1026C10.5489 20.1027 9.00663 19.635 7.69476 18.7586C6.38289 17.8822 5.36039 16.6364 4.75657 15.1788C4.15274 13.7212 3.99471 12.1173 4.30247 10.5699C4.61023 9.02253 5.36995 7.60116 6.48555 6.48555C7.60116 5.36995 9.02253 4.61023 10.5699 4.30247C12.1173 3.99471 13.7212 4.15274 15.1788 4.75657C16.6364 5.36039 17.8822 6.38289 18.7586 7.69476C19.635 9.00663 20.1027 10.5489 20.1026 12.1266C20.1001 14.2412 19.259 16.2685 17.7637 17.7637C16.2685 19.259 14.2412 20.1001 12.1266 20.1026Z" fill="#30475E"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    const CategoryTabsSection = () => {
        return (
            <div className="tabs-section">
                <Tabs>

                    {page.tmpl_home_page.categoriesForTabs.map(category => {
                        
                        const reviews = category.reviews.nodes;

                        return (
                            <div label={category.name} key={shortid.generate()} image={category.tax_review_categories.termImage.mediaItemUrl}>
                                <div className="tab-content__wrapper row" >
                                    <div className="column small-12">
                                        <img className="tab-content__decor decor-left" src={tabDecorLeft} alt=""/>
                                        <img className="tab-content__decor decor-right" src={tabDecorRight} alt=""/>
                                        <h2 className="tab-content__header">{category.tax_review_categories.categoryHeader}</h2>
                                        <p className="tab-content__descr">{category.tax_review_categories.categoryDescription}</p>
                                        <div className="tab-content__reviews-wrap">
                                            {reviews && reviews.map( review => {

                                                const tabContentClass = "tab-content__review";
                                                
                                                //Has English Language?
                                                let hasEnglish = false;
                                                let imgUrl = '';
                                                if(review.cpt_reviews.languageOptions){
                                                    review.cpt_reviews.languageOptions.forEach((lang) => {
                                                        if(lang.language.name === 'English'){
                                                            hasEnglish = true;
                                                            imgUrl = lang.language.tax_review_languages.languageIcon ? lang.language.tax_review_languages.languageIcon.mediaItemUrl : ''
                                                        } 
                                                    })
                                                }

                                                //Handling Rating
                                                let ratingReputation = '';
                                                let ratingCSSClass = '';
                                                
                                                if(review.cpt_reviews.rating < 8 && review.cpt_reviews.rating >= 7){
                                                    ratingReputation = 'Good';
                                                    ratingCSSClass = 'good';
                                                } else if(review.cpt_reviews.rating < 9 && review.cpt_reviews.rating >= 8){
                                                    ratingReputation = 'Very Good';
                                                    ratingCSSClass = 'very-good';
                                                } else if(review.cpt_reviews.rating >= 9){
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
                                                
                                                return(
                                                    <div key={shortid.generate()} className={tabContentClass}>
                                                        {review.featuredImage && (
                                                            <Link to={review.uri} className={`${tabContentClass}--image-link`}>
                                                                {review.cpt_reviews.hasExclusiveBonus && <span className="exclusive-bonus">Exclusive bonus</span> }
                                                                <img className={`${tabContentClass}--image`} src={review.featuredImage.node.mediaDetails.filteredSizes[0].sourceUrl} alt="" width={review.featuredImage.node.mediaDetails.filteredSizes[0].width} height={review.featuredImage.node.mediaDetails.filteredSizes[0].height} />
                                                            </Link>
                                                        )}
                                                        <div className={`${tabContentClass}--info`}>
                                                            {review.cpt_reviews.bonusText && (
                                                                <p className={`${tabContentClass}--info-bonus-text`}>{review.cpt_reviews.bonusText}</p>
                                                            )}
                                                            {review.cpt_reviews.bonusSubtext && (
                                                                <p className={`${tabContentClass}--info-bonus-subtext`}>{review.cpt_reviews.bonusSubtext}</p>
                                                            )}
                                                            <div className={`${tabContentClass}--info-additional`}>
                                                                {review.cpt_reviews.depositBonusText && <span className="depositBonusText">{review.cpt_reviews.depositBonusText}</span>}
                                                                {review.cpt_reviews.depositBonusText && review.cpt_reviews.termsAndConditionsText && <span className="dash"> | </span>}
                                                                {review.cpt_reviews.termsAndConditionsText && <span className="termsAndConditionsText">{review.cpt_reviews.termsAndConditionsText}</span>}
                                                            </div>
                                                        </div>

                                                        {hasEnglish && (
                                                            <div className={`${tabContentClass}--language`}>
                                                                <img className={`${tabContentClass}--language-icon`} width="34" src={imgUrl} alt=""/>
                                                                <svg className={`${tabContentClass}--language-check-mark`} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.5479 29.1792L0.497898 18.1292C-0.165966 17.4653 -0.165966 16.3889 0.497898 15.725L2.902 13.3208C3.56587 12.6569 4.64231 12.6569 5.30618 13.3208L12.75 20.7646L28.6938 4.82083C29.3577 4.15697 30.4341 4.15697 31.098 4.82083L33.5021 7.22501C34.1659 7.88887 34.1659 8.96525 33.5021 9.62918L13.9521 29.1792C13.2881 29.8431 12.2118 29.8431 11.5479 29.1792Z" fill="#5FCC6A"/>
                                                                </svg>
                                                            </div>
                                                        )}
                                                        {<RatingBox reviewData={review}/>}

                                                        {review.uri && (
                                                            <div className={`${tabContentClass}--visit`}>
                                                                {review.cpt_reviews.affiliateLink && (
                                                                    <a className={`${tabContentClass}--visit-affiliate-link btn`} href={review.cpt_reviews.affiliateLink}>Visit Casino</a>
                                                                )}
                                                                <div className={`${tabContentClass}--visit-review-link`}>
                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M14.4062 13.2109L10.2864 9.09043C10.9503 8.17805 11.3075 7.07846 11.3064 5.95008C11.3064 2.99666 8.9035 0.59375 5.95008 0.59375C2.99666 0.59375 0.59375 2.99666 0.59375 5.95008C0.59375 8.9035 2.99666 11.3064 5.95008 11.3064C7.07846 11.3075 8.17805 10.9503 9.09043 10.2864L13.2109 14.4062L14.4062 13.2109ZM5.95008 9.61471C5.22519 9.61477 4.51656 9.39987 3.91381 8.99719C3.31106 8.5945 2.84126 8.02212 2.56383 7.35242C2.28639 6.68272 2.21379 5.94579 2.35519 5.23483C2.49659 4.52387 2.84565 3.8708 3.35823 3.35823C3.8708 2.84565 4.52387 2.49659 5.23483 2.35519C5.94579 2.21379 6.68272 2.28639 7.35242 2.56383C8.02212 2.84126 8.5945 3.31106 8.99719 3.91381C9.39987 4.51656 9.61477 5.22519 9.61471 5.95008C9.61356 6.92165 9.2271 7.8531 8.5401 8.5401C7.8531 9.2271 6.92165 9.61356 5.95008 9.61471Z" fill="#022141"/>
                                                                    </svg>
                                                                    <Link to={review.uri}>Read Review</Link>
                                                                </div>
                                                            </div>
                                                        )}

                                                        
                                                    </div>
                                                )
                                            })}

                                            <Link className="btn btn-arrow btn-center" to={category.uri}>Best Online Casinos</Link>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        )
                    })}

                </Tabs>
            </div>

        )
    }

    const GamesSection = () => {
        const gamesSectionData = page.tmpl_home_page.gameCategoriesToShow;
        const heading = page.tmpl_home_page.gamesSectionHeading;
        const sectionClass = 'games-section';
        
        return (
            <div className={sectionClass}>
                <div className={`${sectionClass}__inner-wrap row`}>
                    <img className={`${sectionClass}__decor decor-left`} src={gamesDecorLeft} alt=""/>
                    <img className={`${sectionClass}__decor decor-right`} src={gamesDecorRight} alt=""/>
                    <h2 className={`column small-12 ${sectionClass}__heading`}>{heading}</h2>
                    <div className={`${sectionClass}__categories-wrap column small-12`}>
                        {gamesSectionData && gamesSectionData.map(gameCateg => {
                            const games = gameCateg.games ? gameCateg.games.nodes : null;
                            return(
                                <div key={shortid.generate()} className={`${sectionClass}__category row`}>
                                    <div className={`column small-12 ${sectionClass}__category-top`}>
                                        <img src={gameCateg.tax_games_categories.termIcon.mediaItemUrl} alt=""/>
                                        <span>{gameCateg.name}</span>
                                    </div>
                                    <div className={`column small-12 ${sectionClass}__category-bottom`}>
                                        {games && games.map(eachGame => {
                                            return (
                                                <Link key={shortid.generate()} to={eachGame.uri} className={`${sectionClass}__category-bottom-each`}>
                                                    {eachGame.featuredImage && <img src={eachGame.featuredImage.node.mediaItemUrl} alt=""/>}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <Link to={gameCateg.uri} className={`btn`}>View All</Link>
                                    
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        )
    }


    const BonusSection = () => {
        
        const bonusSectionCssClass = 'bonus-section';
        const bonusSectionHeading = page.tmpl_home_page.bonusesSectionHeading;
        const bonusesSectionRecommData = page.tmpl_home_page.bonusesShowRecomended;
        const bonusesSectionLatestData = page.tmpl_home_page.bonusesShowLatest;
        const columnClass = bonusesSectionRecommData.length > 0 && bonusesSectionLatestData.length > 0 ? 'medium-6' : 'medium-12';

        return (
            <div className={bonusSectionCssClass}>
                <div className={`${bonusSectionCssClass}__wrap row`}>
                    <img src={bonusDecorRight} className={`${bonusSectionCssClass}__decor decor-right`} alt=""/>
                    <div className="column small-12 large-12">
                        <h2 className={`${bonusSectionCssClass}__heading `}>{bonusSectionHeading}</h2>
                    </div>

                    {bonusesSectionRecommData && (
                        <div className={`${bonusSectionCssClass}__recom column small-12 ${columnClass}`}>
                            <div className={`${bonusSectionCssClass}__recom--heading`}>
                                <svg width="29" height="42" viewBox="0 0 29 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.3047 41.9983C2.63605 26.6144 12.5008 20.9973 12.5008 20.9973C11.8106 29.2063 16.4756 35.6017 16.4756 35.6017C18.1913 35.084 21.4661 32.6646 21.4661 32.6646C21.4661 35.6017 19.7381 41.9946 19.7381 41.9946C19.7381 41.9946 25.7872 37.3174 27.6913 29.5489C29.5931 21.7805 24.069 13.9815 24.069 13.9815C24.4019 19.4798 22.5418 24.8876 18.8974 29.0191C19.0797 28.8086 19.2327 28.5748 19.3502 28.3215C20.0049 27.0121 21.0561 23.6088 20.4406 15.7278C19.5741 4.66498 9.5503 0 9.5503 0C10.4143 6.74048 7.82357 8.29343 1.75494 21.0879C-4.31369 33.8798 7.3047 41.9983 7.3047 41.9983Z" fill="#C2A57B"/>
                                </svg>
                                <span>Top recommended bonuses</span>
                            </div>

                            <div className={`${bonusSectionCssClass}__recom--body`}>
                                {bonusesSectionRecommData.map(eachReviewInfo => {
                                    const pickedBonus = eachReviewInfo.pickABonus;
                                    const pickedCasino = eachReviewInfo.pickACasino;
                                    const bonusInfoInCasino = pickedCasino.cpt_reviews[pickedBonus];
                                    
                                    return(
                                        <div key={shortid.generate()} className="each-review">
                                            {pickedCasino.featuredImage && (
                                                <Link className="each-review__link" to={pickedCasino.uri}>
                                                    <img onLoad={() => MatchHeight('each-review')} src={pickedCasino.featuredImage.node.mediaDetails.filteredSizes[0].sourceUrl} alt=""/>
                                                </Link>
                                            )}

                                            <div className="info-box">
                                                <div className="bonuses">
                                                    {bonusInfoInCasino.hasThisBonus && <span>{bonusInfoInCasino.name}</span>}
                                                </div>
                                                <Link to={pickedCasino.uri} className="casino-name">{pickedCasino.title}</Link>
                                            </div>

                                            {<RatingBox reviewData={pickedCasino}/>}
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    )}

                    {bonusesSectionLatestData && (
                        <div className={`${bonusSectionCssClass}__recom column small-12 ${columnClass}`}>
                            <div className={`${bonusSectionCssClass}__recom--heading`}>
                                <svg width="27" height="39" viewBox="0 0 27 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.7956 10.1276C21.5302 9.6887 21.005 9.48012 20.5108 9.61788C20.0169 9.75565 19.675 10.2058 19.675 10.7185C19.675 12.1131 18.5404 13.2474 17.1461 13.2474C15.7518 13.2474 14.6173 12.1131 14.6173 10.7185V1.14257C14.6173 0.680481 14.3388 0.263916 13.9118 0.0871731C13.4848 -0.089867 12.9936 0.00772818 12.6669 0.334732C12.5383 0.462974 9.49175 3.5277 6.40501 8.15782C4.58462 10.8881 3.132 13.5964 2.08761 16.2073C0.764717 19.5152 0.09375 22.6817 0.09375 25.6193C0.09375 32.9973 6.09645 39 13.4747 39C20.8527 39 26.8554 32.9973 26.8554 25.6193C26.8557 20.8964 25.1531 15.6843 21.7956 10.1276ZM21.0987 25.3221C21.0987 25.9532 20.5873 26.4647 19.9562 26.4647C19.3254 26.4647 18.8136 25.9532 18.8136 25.3221V23.1854L13.1245 28.8748C12.91 29.089 12.6196 29.2092 12.3164 29.2092C12.0135 29.2092 11.7228 29.089 11.5085 28.8748L8.855 26.221L7.06675 28.0092C6.62043 28.4555 5.89709 28.4555 5.45078 28.0092C5.00446 27.5629 5.00446 26.8396 5.45078 26.3933L8.04716 23.7972C8.49348 23.3511 9.21682 23.3511 9.66314 23.7975L12.3164 26.451L17.1979 21.5694H15.0609C14.4298 21.5694 13.9184 21.0579 13.9184 20.4269C13.9184 19.7958 14.4298 19.2843 15.0609 19.2843H19.9565C20.5873 19.2843 21.099 19.7961 21.099 20.4269V25.3221H21.0987Z" fill="#C2A57B"/>
                                </svg>
                                <span>Latest bonuses</span>
                            </div>

                            <div className={`${bonusSectionCssClass}__recom--body`}>
                                {bonusesSectionLatestData.map(eachReviewInfo => {

                                    const pickedBonus = eachReviewInfo.pickABonus;
                                    const pickedCasino = eachReviewInfo.pickACasino;
                                    const bonusInfoInCasino = pickedCasino.cpt_reviews[pickedBonus];

                                    return(
                                        <div key={shortid.generate()} className={`each-review`}>
                                            {pickedCasino.featuredImage && (
                                                <Link className="each-review__link" to={pickedCasino.uri}>
                                                    <img src={pickedCasino.featuredImage.node.mediaDetails.filteredSizes[0].sourceUrl} alt=""/>
                                                </Link>
                                            )}

                                            <div className="info-box">
                                                <div className="bonuses">
                                                    {bonusInfoInCasino.hasThisBonus && <span>{bonusInfoInCasino.name}</span>}
                                                </div>
                                                <Link to={pickedCasino.uri} className="casino-name">{pickedCasino.title}</Link>
                                            </div>
                                            <div className="info-date">
                                                {DateHandler(pickedCasino.date, true)}
                                            </div>

                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    )}

                    <div className={`${bonusSectionCssClass}__bottom-link column small-12 large-12`}>
                        <Link to='/bonuses' className="btn btn-arrow btn-big btn-center">All Bonuses</Link>
                    </div>

                </div>

            </div>
        );
    }

    const AboutUsSection = () => {

        const aboutUsCssClass = 'about-us-section';
        const heading = page.tmpl_home_page.aboutUsHeading;
        const advantages = page.tmpl_home_page.ourAdvantages;
        const btnLink = page.tmpl_home_page.aboutUsButtonExternalLink ? page.tmpl_home_page.aboutUsButtonExternalLink : page.tmpl_home_page.aboutUsButtonInternalLink.uri
        const btnText = page.tmpl_home_page.aboutUsButtonText;

        return(
            <div className={aboutUsCssClass}>
                <div className={`${aboutUsCssClass}__heading row`}>
                    <div className="column small-12"><h2>{heading}</h2></div>
                </div>

                <div className={`${aboutUsCssClass}__advantages`}>
                    {advantages.map((advantage, i) => {
                        const rlClass = i % 2 === 0 ? 'advantage-right' : 'advantage-left';
                        
                        return(
                            <div key={shortid.generate()} className={`${aboutUsCssClass}__advantages--each ${rlClass}`}>
                                <div className="text-section">
                                    <h5>{advantage.advantageHeading}</h5>
                                    <p>{advantage.advantageText}</p>
                                </div>
                                <div className="image-section">
                                    <img src={advantage.advantageImage.mediaItemUrl} alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={`${aboutUsCssClass}__bottom-btn`}>
                    <Link className="btn btn-arrow btn-big btn-center" to={btnLink}>{btnText}</Link>
                </div>

            </div>
        )
    }

    const PostsSection = () => {
        const posts = data.wpgraphql.posts.nodes;
        const postsSectionCssClass = 'posts-section';
        const heading = page.tmpl_home_page.postsSectionHeading;

        if(posts.length === 0) return null
        return (
            <div className={`${postsSectionCssClass}`}>

                <div className={`row ${postsSectionCssClass}__heading`}>
                    <h2 className={`column small-12 `}>{ heading }</h2>
                </div>
                
                <div className={`row ${postsSectionCssClass}__grid column small-12 row`}>
                    <Equalizer>
                    {posts.map(post => {
                        return(
                            <Link key={shortid.generate()} to={post.uri} className={`column large-3 medium-6 small-12 ${postsSectionCssClass}__grid--each`}>
                                {post.featuredImage && <img src={post.featuredImage.node.mediaItemUrl} alt=""/>}
                                <div className="descr-box">
                                    <h6>{post.title}</h6>
                                    {Parser(post.excerpt ? post.excerpt : '')}
                                </div>
                            </Link>
                        )
                    })}
                    </Equalizer>
                </div>

                <div className={`${postsSectionCssClass}__bottom row`}>
                    <div className="column small-12">
                        <Link to="/blog" className="btn btn-arrow btn-big btn-center">All articles</Link>
                    </div>
                </div>

            </div>
        )
    }

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
            <HeroSearchSection />
            <CategoryTabsSection />
            <GamesSection />
            <BonusSection />
            <AboutUsSection />
            <PostsSection />
        </Layout>
    )
}
