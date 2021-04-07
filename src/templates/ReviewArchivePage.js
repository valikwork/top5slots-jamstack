import React, { useState, useEffect } from 'react'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import shortid from 'shortid';
import ExpandableCard from '../components/ExpandableCard';
import NonExpandableCard from '../components/NonExpandableCard';
import Equalizer from "react-equalizer";
import Parser from "html-react-parser"
import RatingBox from "../components/RatingBox";
import DateHandler from "../functions/DateHandler";
import MatchHeight from '../functions/MatchHeight';
import FAQPanel from '../components/FAQPanel';
import TabsFilterSection from '../components/TabsFilterSection';

//Images
import tabDecorLeft from '../assets/images/tab-section-left.png';
import tabDecorRight from '../assets/images/tab-section-right.png';
import beforePlayingDecorLeft from '../assets/images/before-play-decor-left.png'
import beforePlayingDecorRight from '../assets/images/before-play-decor-right.png'
import tutorialDecorRight from '../assets/images/tutorial-section-decor.png'
import bonusDecorRight from '../assets/images/bonus-decor-right.png';
import allCasinos from '../assets/images/all-casinos.png'





export const query = graphql`
    query($id: ID!) {
        wpgraphql {

            page(id: $id) {

                title
                uri
                seo {
                    metaDesc
                    title
                    opengraphType
                }

                tmpl_review_archive_page {

                    heading
                    headingText

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
                        reviews(first: 1000) {
                            nodes {
                                title
                                uri
                                cpt_reviews {
                                    affiliateLink
                                    availableGames {
                                        uri
                                        name
                                    }
                                    bonusText
                                    bonusSubtext
                                    colorForBackground
                                    cons {
                                        text
                                    }
                                    currency {
                                        name
                                        uri
                                        slug
                                    }
                                    customerSupportLanguage {
                                        name
                                        uri
                                        slug
                                    }
                                    depositBonusText
                                    forPlayersFrom {
                                        name
                                        uri
                                        slug
                                    }
                                    gameProvider {
                                        ... on WPGraphQL_Game_provider {
                                            id
                                            uri
                                            title
                                            slug
                                        }
                                    }
                                    hasExclusiveBonus
                                    interestingFacts {
                                        text
                                    }
                                    languageOptions {
                                        optionDescription
                                        language {
                                            name
                                            tax_review_languages {
                                                languageIcon {
                                                    mediaItemUrl
                                                }
                                            }
                                        }
                                    }
                                    licensingAuthority {
                                        uri
                                        slug
                                        name
                                    }
                                    liveChatLanguage {
                                        uri
                                        slug
                                        name
                                    }
                                    paymentMethods {
                                        ... on WPGraphQL_Payment_method {
                                            id
                                            uri
                                            title
                                            slug
                                            featuredImage {
                                                node {
                                                    mediaItemUrl
                                                }
                                            }
                                        }
                                    }
                                    popularFilters {
                                        uri
                                        slug
                                        name
                                    }
                                    pros {
                                        text
                                    }
                                    rating
                                    termsAndConditionsText
                                    websiteLanguage {
                                        slug
                                        name
                                        uri
                                    }
                                    withdrawalLimit
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

                    whyUsHeading

                    advantagesList {
                        heading
                        text
                        image {
                            mediaItemUrl
                        }
                    }

                    advantageBanner {
                        mediaItemUrl
                    }

                    advantageHeading
                    advantageText
                    advantageButtonText
                    advantageButtonLink {
                        ... on WPGraphQL_Page {
                            uri
                        }
                    }

                    geoRatingHeading
                    geoRatingDescription
                    geoRatingInfoLeftHeading
                    geoRatingInfoMiddleText
                    geoRatingInfoMiddleCountryImage {
                        mediaItemUrl
                    }
                    geoRatingInfoRightHeading
                    geoRatingInfoLeftColumnList {
                        itemHeading
                        itemText
                        itemImage {
                            mediaItemUrl
                        }
                    }
                    geoRatingInfoRightColumnList {
                        itemHeading
                        itemText
                        itemImage {
                            mediaItemUrl
                        }
                    }

                    beforePlayingHeading
                    beforePlayingInfoList {
                        itemHeading
                        itemText
                    }

                    countryImportanceHeading
                    countryImportanceDescription
                    countryImportanceList {
                        heading
                        text
                        countyImage {
                            mediaItemUrl
                        }
                    }

                    tutorialSectionHeading
                    tutorialSectionTopHeading
                    tutorialSectionTopArticles {
                        ... on WPGraphQL_Post {
                            uri
                            title
                        }
                    }
                    tutorialSectionBottomHeading
                    tutorialSectionBottomCategories {
                        uri
                        name
                        tax_post_categories {
                            categoryImage {
                                mediaItemUrl
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

                    textSectionContent

                }

            }

            reviews(first: 1000) {
                nodes {
                    title
                    uri
                    cpt_reviews {
                        affiliateLink
                        availableGames {
                            uri
                            name
                        }
                        bonusText
                        bonusSubtext
                        colorForBackground
                        cons {
                            text
                        }
                        currency {
                            name
                            uri
                            slug
                        }
                        customerSupportLanguage {
                            name
                            uri
                            slug
                        }
                        depositBonusText
                        forPlayersFrom {
                            name
                            uri
                            slug
                        }
                        gameProvider {
                            ... on WPGraphQL_Game_provider {
                                id
                                uri
                                title
                                slug
                            }
                        }
                        hasExclusiveBonus
                        interestingFacts {
                            text
                        }
                        languageOptions {
                            optionDescription
                            language {
                                name
                                tax_review_languages {
                                    languageIcon {
                                        mediaItemUrl
                                    }
                                }
                            }
                        }
                        licensingAuthority {
                            uri
                            slug
                            name
                        }
                        liveChatLanguage {
                            uri
                            slug
                            name
                        }
                        paymentMethods {
                            ... on WPGraphQL_Payment_method {
                                id
                                uri
                                title
                                slug
                                featuredImage {
                                    node {
                                        mediaItemUrl
                                    }
                                }
                            }
                        }
                        popularFilters {
                            uri
                            slug
                            name
                        }
                        pros {
                            text
                        }
                        rating
                        termsAndConditionsText
                        websiteLanguage {
                            slug
                            name
                            uri
                        }
                        withdrawalLimit
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

            siteSettings {
                opt_site_settings {
                    faqHeading
                    faqList {
                        question
                        answer
                    }
                }
            }


        }
    }
`

export default function ReviewArchivePage({ data }) {

    const { page, siteSettings } = data.wpgraphql;
    const pageTemplateData = page.tmpl_review_archive_page;
    const { opt_site_settings } = siteSettings;

    useEffect( () => {
        // MatchHeight('why-us__list--each')
        
    }, [])

    const HeadingSection = () => {

        const heading = page.tmpl_review_archive_page.heading;
        const headingText = page.tmpl_review_archive_page.headingText;
        const sectionCssClass = 'review-page-heading';

        return (
            <div className={sectionCssClass}>
                <div className="row">
                    <div className={`${sectionCssClass}__heading small-12 column `}>
                        <h1>{heading}</h1>
                        <p>{headingText}</p>
                    </div>
                </div>
            </div>
        );
    }
    

    const CasinosTabSection = () => {
        
        const { reviews } = data.wpgraphql;
        const AllCasinos = {
            name: 'All Casinos',
            reviews: {
                nodes: reviews.nodes
            },
            tax_review_categories: {
                termImage: {
                    mediaItemUrl: allCasinos
                }
            }
        }
        const categoriesIncludingAllCasinos = [AllCasinos, ...page.tmpl_review_archive_page.categoriesForTabs];

        return <TabsFilterSection categoriesIncludingAllCasinos={categoriesIncludingAllCasinos} />
    }

    const WhyUsSection = () => {
        
        const sectionCssClass = 'why-us';
        const { whyUsHeading, advantagesList, advantageHeading, advantageText, advantageBanner, advantageButtonText, advantageButtonLink } = pageTemplateData;

        return (
            <div className={sectionCssClass}>

                <div className={`${sectionCssClass}__heading row`}>
                    <div className="column small-12">
                        <h2>{whyUsHeading}</h2>
                    </div>
                </div>

                <div className={`${sectionCssClass}__list row`}>
                    {advantagesList.map(advantage => {
                        return (
                            <div key={shortid.generate()} className={`${sectionCssClass}__list--each-wrap column large-4 medium-6 small-12`}>
                                <div className={`${sectionCssClass}__list--each`}>
                                    <img onLoad={() => MatchHeight(`${sectionCssClass}__list--each`)} src={advantage.image.mediaItemUrl} alt=""/>
                                    <h6>{advantage.heading}</h6>
                                    <p>{advantage.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={`${sectionCssClass}__banner`} style={{ backgroundImage: `url(${advantageBanner.mediaItemUrl})` }}>
                    <div className="info-box">
                        <h6>{advantageHeading}</h6>
                        <p>{advantageText}</p>
                        <Link className="btn btn-arrow btn-big" to={advantageButtonLink.uri}>{advantageButtonText}</Link>
                    </div>
                </div>

            </div>
        )
    }

    const GeoRatingSection = () => {

        const sectionCssClass = 'geo-rating';
        const { 
            geoRatingHeading, 
            geoRatingDescription, 
            geoRatingInfoLeftHeading, 
            geoRatingInfoMiddleText, 
            geoRatingInfoMiddleCountryImage, 
            geoRatingInfoRightHeading, 
            geoRatingInfoLeftColumnList, 
            geoRatingInfoRightColumnList 
        } = pageTemplateData;

        return (
            <div className={`${sectionCssClass}__wrap`}>

                <div className={`${sectionCssClass}__heading row`}>
                    <div className="column small-12">
                        <img className={`${sectionCssClass}__decor decor-left`} src={tabDecorLeft} alt=""/>
                        <img className={`${sectionCssClass}__decor decor-right`} src={tabDecorRight} alt=""/>
                        <h2>{geoRatingHeading}</h2>
                        <p>{geoRatingDescription}</p>
                    </div>
                </div>

                <div className={`${sectionCssClass}__info-box row`}>

                    <div className={`${sectionCssClass}__info-box-top column small-12`}>
                        <h5>{geoRatingInfoLeftHeading}</h5>
                        <div className="info-circle">
                            <svg className="info-circle-bg" width="262" height="262" viewBox="0 0 262 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M130.761 234.701C73.5955 234.701 27.2496 188.278 27.2496 131C27.2496 73.73 73.5955 27.2994 130.761 27.2994C130.846 27.2994 130.923 27.3071 131 27.3071V0.00772042C130.915 0.00772042 130.846 0 130.761 0C58.545 0 0 58.6597 0 131C0 203.356 58.545 262 130.761 262C130.846 262 130.915 261.992 131 261.992V234.693C130.923 234.693 130.838 234.701 130.761 234.701Z" fill="#3E7B97"/>
                                <path d="M130.761 27.2994C130.846 27.2994 130.923 27.3071 131 27.3071V0.00772042C130.915 0.00772042 130.846 0 130.761 0C58.545 0 0 58.6597 0 131H27.2496C27.2496 73.73 73.5955 27.2994 130.761 27.2994Z" fill="#2E687C"/>
                                <g clip-path="url(#clip0)">
                                    <path d="M131.239 27.2994C188.405 27.2994 234.75 73.7222 234.75 131C234.75 188.27 188.404 234.701 131.239 234.701C131.154 234.701 131.077 234.693 131 234.693L131 261.992C131.085 261.992 131.154 262 131.239 262C203.455 262 262 203.34 262 131C262 58.6443 203.455 -5.11817e-06 131.239 -1.14315e-05C131.154 -1.14389e-05 131.085 0.00767898 131 0.00767898L131 27.3071C131.077 27.3071 131.162 27.2994 131.239 27.2994Z" fill="#C2A57B"/>
                                    <path d="M131.239 234.701C131.154 234.701 131.077 234.693 131 234.693L131 261.992C131.085 261.992 131.154 262 131.239 262C203.455 262 262 203.34 262 131L234.75 131C234.75 188.27 188.404 234.701 131.239 234.701Z" fill="#A17F4D"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="131" height="262" fill="white" transform="translate(262 262) rotate(-180)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <img src={geoRatingInfoMiddleCountryImage.mediaItemUrl} alt=""/>
                            <span>{geoRatingInfoMiddleText}</span>
                        </div>
                        <h5>{geoRatingInfoRightHeading}</h5>
                    </div>

                    {geoRatingInfoLeftColumnList && (
                        <div className={`${sectionCssClass}__info-box-list left-list column large-6 medium-12 small-12`}>
                            {geoRatingInfoLeftColumnList.map(listItem => {
                                return(
                                    <div className="list-item-wrap">
                                        <svg width="97" height="192" viewBox="0 0 97 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M96.3368 171.994C54.2207 171.994 20.0758 137.975 20.0758 96C20.0758 54.0311 54.2207 20.0057 96.3368 20.0057C96.3993 20.0057 96.456 20.0113 96.5128 20.0113V0.00565771C96.4504 0.00565771 96.3993 0 96.3368 0C43.1324 0 0 42.9873 0 96C0 149.024 43.1324 192 96.3368 192C96.3993 192 96.4504 191.994 96.5128 191.994V171.989C96.456 171.989 96.3936 171.994 96.3368 171.994Z" fill="#3E7B97"/>
                                            <path d="M96.3368 20.0057C96.3993 20.0057 96.456 20.0113 96.5128 20.0113V0.00565771C96.4504 0.00565771 96.3993 0 96.3368 0C43.1324 0 0 42.9873 0 96H20.0758C20.0758 54.0311 54.2207 20.0057 96.3368 20.0057Z" fill="#2E687C"/>
                                        </svg>

                                        <div className="list-item-img-box">
                                            <img src={listItem.itemImage.mediaItemUrl} alt=""/>
                                        </div>

                                        <div className="list-item-text-box">
                                            <h6>{listItem.itemHeading}</h6>
                                            <p>{listItem.itemText}</p>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {geoRatingInfoRightColumnList && (
                        <div className={`${sectionCssClass}__info-box-list right-list column large-6 medium-12 small-12`}>
                            {geoRatingInfoRightColumnList.map(listItem => {
                                return(
                                    <div className="list-item-wrap">
                                        <svg width="97" height="192" viewBox="0 0 97 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M96.3368 171.994C54.2207 171.994 20.0758 137.975 20.0758 96C20.0758 54.0311 54.2207 20.0057 96.3368 20.0057C96.3993 20.0057 96.456 20.0113 96.5128 20.0113V0.00565771C96.4504 0.00565771 96.3993 0 96.3368 0C43.1324 0 0 42.9873 0 96C0 149.024 43.1324 192 96.3368 192C96.3993 192 96.4504 191.994 96.5128 191.994V171.989C96.456 171.989 96.3936 171.994 96.3368 171.994Z" fill="#C2A57B"/>
                                            <path d="M96.3368 20.0057C96.3993 20.0057 96.456 20.0113 96.5128 20.0113V0.00565771C96.4504 0.00565771 96.3993 0 96.3368 0C43.1324 0 0 42.9873 0 96H20.0758C20.0758 54.0311 54.2207 20.0057 96.3368 20.0057Z" fill="#A27F4D"/>
                                        </svg>

                                        <div className="list-item-img-box">
                                            <img src={listItem.itemImage.mediaItemUrl} alt=""/>
                                        </div>

                                        <div className="list-item-text-box">
                                            <h6>{listItem.itemHeading}</h6>
                                            <p>{listItem.itemText}</p>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    )}

                </div>

            </div>
        )
    }

    const BeforePlayingSection = () => {

        const sectionCssClass = 'before-playing';
        const { beforePlayingHeading, beforePlayingInfoList } = pageTemplateData;

        return (

            <div className={sectionCssClass}>

                <div className={`${sectionCssClass}__heading row`}>
                    <div className="column small-12">
                        <img className={`${sectionCssClass}__decor decor-left`} src={beforePlayingDecorLeft} alt=""/>
                        <img className={`${sectionCssClass}__decor decor-right`} src={beforePlayingDecorRight} alt=""/>
                        <h2>{beforePlayingHeading}</h2>
                        
                    </div>
                </div>

                <div className={`${sectionCssClass}__body row`}>
                    {beforePlayingInfoList && beforePlayingInfoList.map((listItem, i) => {
                        return <ExpandableCard className={sectionCssClass} count={i} heading={listItem.itemHeading} text={listItem.itemText} />
                    })}
                </div>

            </div>

        );
    }

    const CountryImportanceSection = () => {
        
        const sectionCssClass = 'country-importance';
        const { countryImportanceHeading, countryImportanceDescription, countryImportanceList } = pageTemplateData;

        return (

            <div className={sectionCssClass}>

                <div className={`${sectionCssClass}__heading row`}>
                    <div className="column small-10 small-centered custom-small-10">
                        <h2>{countryImportanceHeading}</h2>
                        {countryImportanceDescription && <div className={`${sectionCssClass}__heading-descr`}>{Parser(countryImportanceDescription)}</div>}
                    </div>
                </div>

                <div className={`${sectionCssClass}__body row`}>
                    {countryImportanceList && countryImportanceList.map(listItem => {
                        return <NonExpandableCard className={sectionCssClass} heading={listItem.heading} text={listItem.text} image={listItem.countyImage} />
                    })}
                </div>

            </div>
        );
    }

    const TutorialSection = () => {

        const sectionCssClass = 'tutorial';
        const { 
            tutorialSectionHeading, 
            tutorialSectionTopHeading,
            tutorialSectionTopArticles,
            tutorialSectionBottomHeading,
            tutorialSectionBottomCategories
        } = pageTemplateData;

        return (

            <div className={sectionCssClass}>

                <div className={`${sectionCssClass}__heading row`}>
                    <div className="column small-12">
                        <h2>{tutorialSectionHeading}</h2>
                        <img className={`${sectionCssClass}__decor decor-right`} src={tutorialDecorRight} alt=""/>
                    </div>
                </div>

                <div className={`${sectionCssClass}__body-top row`}>

                    <div className={`${sectionCssClass}__body-top-heading column small-12`}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.2468 11.4478C39.1363 11.3811 36.4428 9.75771 20.4958 0.143478C20.1786 -0.0478261 19.8192 -0.0478261 19.502 0.143478L0.750981 11.4478C-0.255165 12.0531 -0.245477 14.0401 0.750981 14.6391C4.39367 16.8349 10.3488 20.4254 19.502 25.9435C19.8173 26.1337 20.1767 26.136 20.4958 25.9435C21.365 25.4194 33.2082 18.2795 33.7496 17.9533V36.4729C33.7496 37.4097 34.2673 38.2154 34.9399 38.2589C35.6577 38.3054 36.2497 37.5102 36.2497 36.5217V17.3225C36.2497 17.0492 36.1042 16.8185 35.9094 16.7836C33.5631 16.3629 22.4977 14.376 19.8387 13.8989C19.0696 13.7652 18.5904 12.6817 18.7926 11.7174C18.9512 10.9029 19.507 10.3841 20.07 10.438C20.1261 10.4426 37.9404 13.6409 37.9277 13.6386C38.2605 13.6981 38.5341 13.9947 38.6656 14.3967C38.7574 14.6778 38.9914 14.8066 39.1923 14.6755C39.5286 14.4562 39.8204 14.1675 39.953 13.5141C40.1238 12.6675 39.8152 11.7898 39.2468 11.4478Z" fill="#C2A57B"/>
                            <path d="M18.5072 29.1345L8.04401 22.8267C7.78603 22.6711 7.49805 22.9343 7.49805 23.3254V29.5649C7.49805 35.416 12.989 39.9997 19.9987 39.9997C27.0084 39.9997 32.4994 35.416 32.4994 29.5649V23.3254C32.4994 22.9343 32.2114 22.6712 31.9534 22.8267L21.4894 29.1345C20.5394 29.709 19.4582 29.7086 18.5072 29.1345Z" fill="#C2A57B"/>
                        </svg>
                        <span>{tutorialSectionTopHeading}</span>
                    </div>

                    <Equalizer>
                    {tutorialSectionTopArticles && tutorialSectionTopArticles.map(article => {
                        return (
                            <Link to={article.uri} className={`${sectionCssClass}__body-top-list-item-wrap column small-12 medium-4 large-4`}>
                                <div className={`${sectionCssClass}__body-top-list-item`}>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M98.1169 28.6197C97.8407 28.4528 91.1069 24.3944 51.2394 0.358697C50.4464 -0.119566 49.5479 -0.119566 48.7549 0.358697L1.87745 28.6197C-0.637913 30.133 -0.613693 35.1004 1.87745 36.598C10.9842 42.0874 25.8719 51.0638 48.7549 64.8589C49.5432 65.3345 50.4417 65.3402 51.2394 64.8589C53.4124 63.5489 83.0206 45.6988 84.374 44.8833V91.1827C84.374 93.5245 85.6682 95.5389 87.3497 95.6476C89.1443 95.7639 90.6243 93.7759 90.6243 91.3047V43.3064C90.6243 42.6232 90.2606 42.0463 89.7735 41.9591C83.9077 40.9075 56.2444 35.9401 49.5968 34.7474C47.674 34.4132 46.4759 31.7045 46.9814 29.2936C47.3779 27.2574 48.7674 25.9604 50.1749 26.0952C50.3152 26.1066 94.8511 34.1023 94.8193 34.0966C95.6513 34.2455 96.3354 34.9868 96.6639 35.992C96.8936 36.6947 97.4784 37.0167 97.9808 36.689C98.8216 36.1406 99.5509 35.4189 99.8826 33.7854C100.31 31.6689 99.5381 29.4746 98.1169 28.6197Z" fill="#C2A57B"/>
                                        <path d="M46.268 72.8372L20.11 57.0676C19.4651 56.6788 18.7451 57.3366 18.7451 58.3144V73.9133C18.7451 88.5411 32.4724 100 49.9968 100C67.5211 100 81.2484 88.5411 81.2484 73.9133V58.3144C81.2484 57.3366 80.5284 56.679 79.8835 57.0676L53.7235 72.8372C51.3484 74.2737 48.6455 74.2726 46.268 72.8372Z" fill="#C2A57B"/>
                                    </svg>
                                    <h6>{article.title}</h6>
                                </div>
                            </Link>
                        )
                    })}
                    <Link to={'/blog'} className={`column small-12 btn btn-center`}>View All</Link>
                    </Equalizer>

                </div>

                <div className={`${sectionCssClass}__body-bottom row`}>

                    <div className={`${sectionCssClass}__body-bottom-heading column small-12`}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.6562 0H21.25C19.9555 0 18.9062 1.0493 18.9062 2.34375V12.7867L27.2134 21.0938H37.6562C38.9507 21.0938 40 20.0445 40 18.75V2.34375C40 1.0493 38.9507 0 37.6562 0ZM24.9272 7.19281C24.28 7.19281 23.7553 6.66813 23.7553 6.02094C23.7553 5.37375 24.28 4.84906 24.9272 4.84906C25.5744 4.84906 26.0991 5.37375 26.0991 6.02094C26.0991 6.66813 25.5744 7.19281 24.9272 7.19281ZM29.4531 11.7188C28.8059 11.7188 28.2812 11.1941 28.2812 10.5469C28.2812 9.89969 28.8059 9.375 29.4531 9.375C30.1003 9.375 30.625 9.89969 30.625 10.5469C30.625 11.1941 30.1003 11.7188 29.4531 11.7188ZM33.9786 16.2442C33.3314 16.2442 32.8067 15.7195 32.8067 15.0723C32.8067 14.4252 33.3314 13.9005 33.9786 13.9005C34.6258 13.9005 35.1505 14.4252 35.1505 15.0723C35.1505 15.7195 34.6258 16.2442 33.9786 16.2442Z" fill="#C2A57B"/>
                            <path d="M27.203 24.3988L15.602 12.7978C14.6867 11.8825 13.2027 11.8825 12.2875 12.7978L0.686484 24.3988C-0.228828 25.3141 -0.228828 26.798 0.686484 27.7133L12.2874 39.3142C13.2027 40.2295 14.6867 40.2295 15.602 39.3142L27.2029 27.7133C28.1183 26.798 28.1183 25.3141 27.203 24.3988ZM8.97289 27.7134C8.51523 28.171 7.77328 28.171 7.31562 27.7134C6.85797 27.2557 6.85797 26.5138 7.31562 26.0561C7.77328 25.5984 8.51523 25.5984 8.97289 26.0561C9.43055 26.5137 9.43055 27.2557 8.97289 27.7134ZM10.6302 24.3988C10.1725 23.9411 10.1725 23.1991 10.6302 22.7415C11.0878 22.2838 11.8298 22.2838 12.2874 22.7415C12.7451 23.1991 12.7451 23.9411 12.2874 24.3988C11.8298 24.8564 11.0878 24.8564 10.6302 24.3988ZM13.9447 32.6852C13.487 33.1428 12.7451 33.1428 12.2874 32.6852C11.8298 32.2275 11.8298 31.4855 12.2874 31.0279C12.7451 30.5702 13.487 30.5702 13.9447 31.0279C14.4023 31.4855 14.4023 32.2276 13.9447 32.6852ZM13.9447 21.0842C13.487 20.6266 13.487 19.8846 13.9447 19.427C14.4023 18.9693 15.1443 18.9693 15.602 19.427C16.0596 19.8846 16.0596 20.6266 15.602 21.0842C15.1444 21.5419 14.4023 21.5419 13.9447 21.0842ZM17.2593 29.3706C16.8016 29.8283 16.0597 29.8283 15.602 29.3706C15.1444 28.913 15.1444 28.171 15.602 27.7134C16.0597 27.2557 16.8016 27.2557 17.2593 27.7134C17.717 28.171 17.717 28.913 17.2593 29.3706ZM20.5738 26.0561C20.1162 26.5138 19.3742 26.5138 18.9166 26.0561C18.4589 25.5984 18.4589 24.8565 18.9166 24.3988C19.3742 23.9412 20.1162 23.9412 20.5738 24.3988C21.0315 24.8564 21.0315 25.5984 20.5738 26.0561Z" fill="#C2A57B"/>
                        </svg>
                        <span>{tutorialSectionBottomHeading}</span>
                    </div>
                    
                    <Equalizer>
                    {tutorialSectionBottomCategories && tutorialSectionBottomCategories.map(category => {
                        return (
                            <Link to={category.uri} className={`${sectionCssClass}__body-bottom-list-item-wrap column small-12 medium-4 large-4`}>
                                <div className={`${sectionCssClass}__body-bottom-list-item`}>
                                    {category.tax_post_categories.categoryImage && <img src={category.tax_post_categories.categoryImage.mediaItemUrl} alt=""/>}
                                    <h6>{category.name}</h6>
                                </div>
                            </Link>
                        )
                    })}
                    <Link to={'/category'} className={`column small-12 btn btn-center`}>View All</Link>
                    </Equalizer>

                </div>

            </div>

        );
    }

    const BonusSection = () => {
        
        const bonusSectionCssClass = 'bonus-section';
        const bonusSectionHeading = page.tmpl_review_archive_page.bonusesSectionHeading;
        const bonusesSectionRecommData = page.tmpl_review_archive_page.bonusesShowRecomended;
        const bonusesSectionLatestData = page.tmpl_review_archive_page.bonusesShowLatest;
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


    const FAQSection = () => {

        const sectionCssClass = 'faq';
        const { faqHeading, faqList } = opt_site_settings;

        return (
            <div className={`${sectionCssClass} row`}>

                <div className={`${sectionCssClass}__heading column small-12`}>
                    <h2>{faqHeading}</h2>
                </div>

                {faqList.length > 0 && faqList.map( (item, i) => {
                    return <FAQPanel className={sectionCssClass} item={item} index={i} />
                })}

            </div>
        );
    }


    const PostsSection = () => {
        const posts = data.wpgraphql.posts.nodes;
        const postsSectionCssClass = 'posts-section';
        const heading = 'News and Gaming Tips';

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
                                    {Parser(post.excerpt)}
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

    const TextSection = () => {
        const { textSectionContent } = pageTemplateData
        const sectionCssClass = 'text-content';
        return (
            <div className={`${sectionCssClass} row`}>
                <div className="column small-12">
                    {Parser(textSectionContent ? textSectionContent : '')}
                </div>
            </div>
        );
    }
    

    return (
        <Layout>
            <HeadingSection />
            <CasinosTabSection />
            <WhyUsSection />
            <GeoRatingSection />
            <BeforePlayingSection />
            <CountryImportanceSection />
            <TutorialSection />
            <BonusSection />
            <FAQSection />
            <PostsSection />
            <TextSection />

        </Layout>
    )
}
