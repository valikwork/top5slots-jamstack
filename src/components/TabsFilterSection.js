import React, { useEffect, useState } from 'react'
import TabsWithFilter from './TabsWithFilter'
import { Link } from "gatsby"
import shortid from 'shortid';
import RatingBox from './RatingBox'
import AvailableGamesAccordion from './AvailableGamesAccordion'
import PaymentMethodsAccordion from './PaymentMethodsAccordion'
import Parser from 'html-react-parser'

export default function TabsFilterSection({ categoriesIncludingAllCasinos }) {

    const initialResult = {
        popularFilters: [],
        forPlayersFrom: [],
        availableGames: [],
        gameProvider: [],
        paymentMethods: [],
        licensingAuthority: [],
        withdrawalLimit: [],
        currency: [],
        websiteLanguage: [],
        customerSupportLanguage: [],
        liveChatLanguage: []
    }

    const [filterSettings, setFilterSettings] = useState(initialResult)
    const [categReviewsToRender, setCategReviewsToRender] = useState(categoriesIncludingAllCasinos)

    const filtrationHandler = (filterSettings) => {

        const newCategReviews = [...categReviewsToRender];

        // for (const [key, valueArray] of Object.entries(filterSettings)) {
        //     console.log('key', key);
        //     console.log('valueArray', valueArray);
        //     if(key === 'withdrawalLimit'){

        //     } else {
        //         for (const item of newCategReviews) {
        //             console.log(item);
        //             if(item.hasOwnProperty('reviews')){
        //                 item.reviews.nodes = item.reviews.nodes.filter((casino) => {
        //                     if(casino.cpt_reviews[key] !== null){
        //                         casino.cpt_reviews[key].forEach((casinoKey) => {
        //                             if(valueArray.includes(casinoKey)){
        //                                 return casino
        //                             }
        //                         })
        //                     }
        //                 })
        //             }
        //         }
        //     }
        //     setCategReviewsToRender(newCategReviews)
        // }

        
    }

    useEffect(() => {
        filtrationHandler(filterSettings)
    }, [filterSettings])

    return (
        <div className="tabs-section filter-section">
            <TabsWithFilter setFilterSettings={setFilterSettings} filterSettings={filterSettings}>

                {categReviewsToRender.map(category => {
                    
                    const reviews = category.reviews.nodes;
                    
                    return (
                        <div total={reviews.length} label={category.name} key={shortid.generate()} image={category.tax_review_categories.termImage.mediaItemUrl}>
                            <div className="tab-content__wrapper row" >
                                <div className="column small-12">
                                    <div className="tab-content__reviews-wrap">
                                        {reviews && reviews.map( (review, i) => {

                                            const tabContentClass = "tab-content__review";
                                            const ideaBulletPoint = `<div class="idea-bullet"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.75 1.4165C6.82174 1.4165 5.9315 1.78525 5.27513 2.44163C4.61875 3.09801 4.25 3.98825 4.25 4.9165C4.25 6.8465 6.2225 7.385 6.3615 9.6665H9.138C9.277 7.385 11.25 6.8465 11.25 4.9165C11.25 3.98825 10.8813 3.09801 10.2249 2.44163C9.5685 1.78525 8.67826 1.4165 7.75 1.4165ZM7.75 14.083C8.697 14.083 8.9915 13.5695 9.0835 13.25H6.4165C6.5085 13.57 6.803 14.083 7.75 14.083ZM6.375 12.749H9.125V10.167H6.375V12.749Z" fill="white"/>
                                            </svg></div>`;

                                            return(
                                                <div key={shortid.generate()} className={`${tabContentClass}`}>
                                                    <div className={`${tabContentClass}--img`} style={{ backgroundColor: review.cpt_reviews.colorForBackground }}>
                                                        <div className={`${tabContentClass}--img__decor`}>
                                                            <svg width="49" height="71" viewBox="0 0 49 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M30.2683 50.3308C29.9801 51.0031 29.2007 51.314 28.5284 51.0258C28.361 50.9538 28.2099 50.8482 28.0853 50.7149L24.4511 46.8429L20.8175 50.7149C20.317 51.2485 19.4784 51.275 18.9449 50.7739C18.8122 50.6494 18.706 50.4982 18.6345 50.3308L16.5371 45.4519L13.853 46.8045V70.9984L23.4669 60.3168C23.9891 59.7735 24.8531 59.7557 25.3964 60.2778C25.4099 60.2903 25.4229 60.3038 25.4359 60.3168L35.0498 71V46.8072L32.3641 45.4519L30.2683 50.3308Z" fill="#C2A57B"/>
                                                                <path d="M37.6994 24.1094C37.6994 31.426 31.7679 37.3574 24.4514 37.3574C17.1353 37.3574 11.2039 31.426 11.2039 24.1094C11.2039 16.7928 17.1353 10.8619 24.4514 10.8619C31.7679 10.8619 37.6994 16.7928 37.6994 24.1094Z" fill="#C2A57B"/>
                                                                <path d="M42.5095 33.0212L47.0813 31.9482L44.2672 28.191C43.8296 27.6049 43.9498 26.775 44.5359 26.3368C44.5576 26.3206 44.5798 26.3049 44.6025 26.2902L48.5319 23.7134L44.6025 21.1366C43.991 20.7358 43.8198 19.9146 44.2207 19.3025C44.2358 19.2797 44.2515 19.2575 44.2678 19.2358L47.0802 15.4787L42.5111 14.4067C41.7988 14.2399 41.3568 13.527 41.5241 12.8147C41.5301 12.7876 41.5371 12.7611 41.5453 12.7351L42.8979 8.23743L38.2334 8.79266C37.507 8.87933 36.8478 8.3604 36.7611 7.634C36.7573 7.60583 36.7551 7.5782 36.7535 7.55003L36.4886 2.86011L32.3008 4.97052C31.647 5.29932 30.8507 5.03606 30.5219 4.38279C30.5095 4.35841 30.4981 4.3335 30.4873 4.30804L28.6325 0L25.4171 3.42184C24.9166 3.9554 24.078 3.98194 23.5445 3.48088C23.5244 3.46192 23.5049 3.44242 23.486 3.42184L20.2705 0L18.4158 4.31508C18.1281 4.98731 17.3497 5.29932 16.677 5.01169C16.6515 5.00085 16.6266 4.98948 16.6022 4.97702L12.4106 2.8574L12.1457 7.5457C12.1252 7.91134 11.9545 8.25152 11.6739 8.48661C11.3955 8.72387 11.0293 8.83383 10.6659 8.78833L6.00139 8.23364L7.36211 12.7313C7.57282 13.4317 7.17577 14.1705 6.47536 14.3812C6.44882 14.3894 6.42174 14.3964 6.39465 14.4029L1.82444 15.4744L4.63688 19.2315C5.0751 19.8176 4.95539 20.648 4.36983 21.0863C4.34762 21.1025 4.32595 21.1177 4.3032 21.1328L0.371094 23.7134L4.30049 26.2924C4.91206 26.6943 5.08269 27.5155 4.68076 28.1271C4.66613 28.1498 4.65042 28.1721 4.63417 28.1937L1.82173 31.9509L6.39249 33.0223C7.10426 33.1897 7.54628 33.9031 7.3789 34.6154C7.3724 34.6414 7.3659 34.6674 7.35777 34.6929L6.00518 39.1976L10.6696 38.6423C11.3966 38.5557 12.0558 39.0741 12.1425 39.801C12.1457 39.8286 12.1479 39.8568 12.1495 39.885L12.4144 44.5749L16.6076 42.4547C16.7923 42.3615 16.9966 42.3123 17.2035 42.3117C17.3584 42.3117 17.5117 42.3388 17.6569 42.393C18.0003 42.5176 18.2771 42.7792 18.4212 43.115L20.2759 47.4285L23.4908 44.0023C23.9919 43.4688 24.8304 43.4428 25.3634 43.9433C25.384 43.9622 25.4035 43.9823 25.4225 44.0023L28.6325 47.4269L30.4873 43.1134C30.7749 42.4406 31.5533 42.1286 32.2261 42.4163C32.2515 42.4271 32.2765 42.439 32.3008 42.4509L36.4935 44.5705L36.7584 39.8812C36.7995 39.1504 37.4247 38.5914 38.1554 38.6326C38.183 38.6342 38.2106 38.6364 38.2383 38.6396L42.9027 39.1948L41.5501 34.6907C41.34 33.9898 41.737 33.2509 42.438 33.0407C42.464 33.0332 42.4894 33.0261 42.516 33.0202L42.5095 33.0212ZM24.4512 40.0079C15.6716 40.0079 8.55436 32.8907 8.55436 24.111C8.55436 15.3308 15.6716 8.2136 24.4512 8.2136C33.2315 8.2136 40.3487 15.3308 40.3487 24.111C40.3395 32.8869 33.2277 39.9987 24.4512 40.0079Z" fill="#C2A57B"/>
                                                            </svg>
                                                            <span>{++i}</span>
                                                        </div>

                                                        <img src={review.featuredImage && review.featuredImage.node.mediaDetails.filteredSizes[0].sourceUrl} alt=""/>
                                                    </div>
                                                    <div className={`${tabContentClass}--text-block`}>
                                                        <div className={`${tabContentClass}--text-block-left`}>
                                                            <h6>{review.title}</h6>
                                                            <RatingBox reviewData={review} inline={true} />
                                                            <ul className="fact-pros-con">
                                                                { review.cpt_reviews.interestingFacts && (
                                                                    <li>{Parser(ideaBulletPoint)}{review.cpt_reviews.interestingFacts[0].text}</li>
                                                                )}
                                                                { review.cpt_reviews.pros && review.cpt_reviews.pros.map((pro, i) => {
                                                                    //2 Max
                                                                    if(i > 1) return null
                                                                    return <li><div className="pro-bullet">+</div>{pro.text}</li>
                                                                }) }
                                                                { review.cpt_reviews.cons && review.cpt_reviews.cons.map((con, i) => {
                                                                    //1 Max
                                                                    if(i > 0) return null
                                                                    return <li><div className="con-bullet">-</div>{con.text}</li>
                                                                }) }
                                                            </ul>

                                                            <div className="additional-info">
                                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.7561 0.655961H13.7308C13.6664 0.655961 13.6581 0.655961 13.5106 0.511629C13.3149 0.320289 12.9875 0 12.3895 0C11.7916 0 11.4642 0.320289 11.2685 0.511629C11.121 0.655961 11.1127 0.655961 11.0483 0.655961C10.984 0.655961 10.9757 0.655961 10.8282 0.511672C10.6326 0.320289 10.3052 0 9.70727 0C9.10936 0 8.78194 0.320289 8.5863 0.511672C8.43879 0.655961 8.43054 0.655961 8.36617 0.655961H7.36255L8.33824 2.78532H13.7301L14.7561 0.655961Z" fill="#C2A57B"/>
                                                                    <path d="M14.1099 16.8495L16.4261 12.9856C16.6836 12.556 17.0862 12.2368 17.5491 12.0759L17.6781 9.65397C16.7478 8.34643 15.4303 7.45316 13.8446 6.65497H8.18434C6.58629 7.45182 5.25817 8.34643 4.32227 9.66394L4.45079 12.0759C4.91369 12.2368 5.31626 12.556 5.57377 12.9856L7.88996 16.8495C8.43867 17.7073 8.6802 18.6978 8.60101 19.6885C9.36766 19.9461 10.1768 20.0805 10.9903 20.0805C11.8111 20.0805 12.6263 19.9439 13.3983 19.6821C13.3207 18.6935 13.5624 17.7055 14.1099 16.8495ZM11.5166 14.5524V15.2604H10.6172V14.5842C9.97936 14.546 9.36061 14.3737 8.97793 14.1378L9.46266 13.0406C9.88367 13.2894 10.445 13.4488 10.9361 13.4488C11.3635 13.4488 11.5165 13.3596 11.5165 13.2065C11.5165 12.6452 9.04806 13.098 9.04806 11.4332C9.04806 10.7125 9.57107 10.1065 10.6171 9.95978V9.26455H11.5165V9.94702C11.9885 9.99166 12.4478 10.1129 12.8113 10.317L12.3585 11.4077C11.9184 11.1844 11.5038 11.076 11.1147 11.076C10.6746 11.076 10.5342 11.2036 10.5342 11.3567C10.5342 11.8925 13.0027 11.4459 13.0027 13.0916C13.0028 13.7806 12.5052 14.3801 11.5166 14.5524Z" fill="#C2A57B"/>
                                                                    <path d="M8.82812 4.07477H13.212V5.36598H8.82812V4.07477Z" fill="#C2A57B"/>
                                                                    <path d="M6.8359 17.5135L6.82412 17.4945L4.50506 13.6257C4.25502 13.2086 3.71078 13.0789 3.29944 13.3384C2.90168 13.5893 2.77668 14.1116 3.01774 14.5154L5.21142 18.1903L4.10197 18.8466L1.92268 15.163C1.61992 14.6857 1.52543 14.1185 1.65679 13.5644C1.79085 12.9988 2.15823 12.5027 2.66471 12.2032C2.83607 12.102 3.01529 12.0269 3.19765 11.9758L2.96433 7.59691C2.92265 6.81453 2.27614 6.20154 1.49265 6.20154C0.680281 6.20154 0.0210977 6.85892 0.0189063 7.67133L0 14.6718L2.9315 19.7166L2.07247 21.9998H6.38365L7.15945 20.5016C7.52628 19.492 7.40906 18.4049 6.8359 17.5135Z" fill="#C2A57B"/>
                                                                    <path d="M21.9999 14.6719L21.9809 7.67151C21.9787 6.85914 21.3195 6.20172 20.5072 6.20172C19.7237 6.20172 19.0772 6.81471 19.0355 7.59709L18.8022 11.976C18.9845 12.027 19.1638 12.1021 19.3351 12.2034C19.8416 12.5028 20.209 12.9989 20.343 13.5645C20.4744 14.1187 20.3799 14.6859 20.0771 15.1632L17.8979 18.8468L16.7884 18.1905L18.9821 14.5156C19.2232 14.1118 19.0981 13.5895 18.7004 13.3385C18.2891 13.079 17.7448 13.2088 17.4948 13.6259L15.1757 17.4947L15.164 17.5137C14.5908 18.4051 14.4736 19.4921 14.8404 20.5018L15.6162 21.9999H19.9274L19.0684 19.7168L21.9999 14.6719Z" fill="#C2A57B"/>
                                                                </svg>
                                                                <div className="additional-info__box">
                                                                    {review.cpt_reviews.bonusText && <span className="bonusText">Bonus: {review.cpt_reviews.bonusText}</span>}
                                                                    {review.cpt_reviews.bonusSubtext && <span className="bonusSubtext">{review.cpt_reviews.bonusSubtext}</span> }
                                                                    {review.cpt_reviews.termsAndConditionsText && <span className="termsAndConditionsText">{review.cpt_reviews.termsAndConditionsText}</span> }
                                                                </div>
                                                            </div>

                                                            <div className="buttons">
                                                                <a href={review.cpt_reviews.affiliateLink} className="btn" >Visit Casino</a>
                                                                <Link to={review.uri} className="btn btn-reverse" >Read Review</Link>
                                                            </div>

                                                        </div>
                                                        <div className={`${tabContentClass}--text-block-right`}>

                                                            {review.cpt_reviews.languageOptions && (
                                                                <div className="language-opt">
                                                                    <span>Language options</span>
                                                                    <ul>
                                                                        {review.cpt_reviews.languageOptions.map(lang => {
                                                                            const text = lang.optionDescription;
                                                                            const langImageUrl = lang.language.tax_review_languages ? lang.language.tax_review_languages.languageIcon.mediaItemUrl : null;
                                                                            return (
                                                                            <li>
                                                                                {langImageUrl && <img src={langImageUrl}/>} 
                                                                                {text}
                                                                            </li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            )}

                                                            {review.cpt_reviews.availableGames && (
                                                                <div className="available-games">
                                                                    <AvailableGamesAccordion availableGames={review.cpt_reviews.availableGames} />
                                                                </div>
                                                            )}
                                                            
                                                            {review.cpt_reviews.paymentMethods && (
                                                                <div className="payment-methods">
                                                                    <PaymentMethodsAccordion paymentMethods={review.cpt_reviews.paymentMethods} />
                                                                </div>
                                                            )}
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            )
                                        })}

                                        <button label={category.name} className="btn btn-arrow btn-center btn-big" to={category.uri}>Show more casinos</button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    )
                })}

            </TabsWithFilter>
        </div>
    )
}
