import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import shortid from 'shortid';



export default function Footer(props) {
    const footerInfo = useStaticQuery(graphql`
        query {
            wpgraphql {
                themeFooterSettings {
                    opt_footer {

                        footerLogo {
                            mediaItemUrl
                        }

                        socialLinks {
                            link
                            logo {
                                mediaItemUrl
                            }
                        }

                        firstMenuHeading
                        firstMenuItems {
                            linkText
                            link {
                                ... on WPGraphQL_Post {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Page {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Review {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Bonus {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Payment_method {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game_provider {
                                    title
                                    uri
                                }
                            }
                            icon {
                                mediaItemUrl
                            }
                        }

                        secondMenuHeading
                        secondMenuItems {
                            linkText
                            link{
                                ... on WPGraphQL_Post {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Page {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Review {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Bonus {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Payment_method {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game_provider {
                                    title
                                    uri
                                }
                            }
                            icon {
                                mediaItemUrl
                            }
                        }

                        thirdMenuHeading
                        thirdMenuItems {
                            linkText
                            link{
                                ... on WPGraphQL_Post {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Page {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Review {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Bonus {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Payment_method {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game_provider {
                                    title
                                    uri
                                }
                            }
                            icon {
                                mediaItemUrl
                            }
                        }

                        forthMenuHeading
                        forthMenuItems {
                            linkText
                            link{
                                ... on WPGraphQL_Post {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Page {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Review {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Bonus {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Payment_method {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game {
                                    title
                                    uri
                                }
                                ... on WPGraphQL_Game_provider {
                                    title
                                    uri
                                }
                            }
                            icon {
                                mediaItemUrl
                            }
                        }

                        subscribeFormText
                        subscriptionFormId
                        supportIcons {
                            link
                            icon {
                                mediaItemUrl
                            }
                        }
                        copywriteText

                    }
                }
            }
        }
    `)

    const CONTACT_MUTATION = gql`
        mutation CreateSubscriptionMutation($clientMutationId: String!, $email: String!, $form_id: String!){
            createSubscription(input: {clientMutationId: $clientMutationId, email: $email, form_id: $form_id}) {
            success
            data
            }
        }
        `

    const info = footerInfo.wpgraphql.themeFooterSettings.opt_footer;
    const footerCSSClass = 'main-footer';

    const [emailValue, setEmailValue] = useState('')
    const [currentError, setCurrentError] = useState('')

    const handleValidation = () => {
        let formIsValid = true;

        if(emailValue !== ""){
            let lastAtPos = emailValue.lastIndexOf('@');
            let lastDotPos = emailValue.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emailValue.indexOf('@@') == -1 && lastDotPos > 2 && (emailValue.length - lastDotPos) > 2)) {
               formIsValid = false;
               setCurrentError("Email is not valid");
            }
        }

        return formIsValid
    }

    const emailFieldChange = (value) => {
        setEmailValue(value);
        if(currentError !== ''){
            setCurrentError('')
        }
    }

    const handleSubmit = (e, createSubmission) => {
        e.preventDefault();
        if(handleValidation()){
            createSubmission({
                variables: {
                    clientMutationId: 'example',
                    email: emailValue,
                    form_id: info.subscriptionFormId.toString()
                }
            })
        }
    }

    return (
        <footer className={footerCSSClass}>
            <div className={`row ${footerCSSClass}-wrap`}>
                <div className={`column small-12 ${footerCSSClass}__top`}>
                    {info.footerLogo.mediaItemUrl && (
                        <Link to={'/'}> <img src={info.footerLogo.mediaItemUrl} alt=""/> </Link>
                    )}

                    {info.socialLinks && (
                        <div className={`${footerCSSClass}__soc-link`}>
                            {info.socialLinks.map(socLink => {
                                return (
                                    <a key={shortid.generate()} href={socLink.link}><img src={socLink.logo.mediaItemUrl} alt=""/></a>
                                )
                            })}
                        </div>
                    )}
                </div>

                <div className={`column small-12 ${footerCSSClass}__middle`}>

                    {info.firstMenuItems && (
                        <div className={`${footerCSSClass}__middle-menu first-menu`}>
                            {info.firstMenuHeading && <h5>{info.firstMenuHeading}</h5>}
                            <ul>
                                {info.firstMenuItems.map(menuItem => {
                                    return (
                                        <li key={shortid.generate()}><Link to={menuItem.link.uri}><img src={menuItem.icon.mediaItemUrl} alt=""/><span>{ menuItem.linkText ? menuItem.linkText : menuItem.link.title }</span></Link></li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {info.secondMenuItems && (
                        <div className={`${footerCSSClass}__middle-menu second-menu`}>
                            {info.secondMenuHeading && <h5>{info.secondMenuHeading}</h5>}
                            <ul>
                                {info.secondMenuItems.map(menuItem => {
                                    return (
                                        <li key={shortid.generate()}><Link to={menuItem.link.uri}><img src={menuItem.icon.mediaItemUrl} alt=""/><span>{ menuItem.linkText ? menuItem.linkText : menuItem.link.title }</span></Link></li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {info.thirdMenuItems && (
                        <div className={`${footerCSSClass}__middle-menu third-menu`}>
                            {info.thirdMenuHeading && <h5>{info.thirdMenuHeading}</h5>}
                            <ul>
                                {info.thirdMenuItems.map(menuItem => {
                                    return (
                                        <li key={shortid.generate()}><Link to={menuItem.link.uri}><img src={menuItem.icon.mediaItemUrl} alt=""/> <span>{ menuItem.linkText ? menuItem.linkText : menuItem.link.title }</span></Link></li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {info.forthMenuItems && (
                        <div className={`${footerCSSClass}__middle-menu forth-menu`}>
                            {info.forthMenuHeading && <h5>{info.forthMenuHeading}</h5>}
                            <ul>
                                {info.forthMenuItems.map(menuItem => {
                                    return (
                                        <li key={shortid.generate()}><Link to={menuItem.link.uri}><img src={menuItem.icon.mediaItemUrl} alt=""/> <span>{ menuItem.linkText ? menuItem.linkText : menuItem.link.title }</span></Link></li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                </div>

                <div className={`column small-12 ${footerCSSClass}__bottom`}>
                    
                    <div className={`${footerCSSClass}__bottom-form`}>
                        { info.subscribeFormText && <h4>{info.subscribeFormText}</h4> }
                        <Mutation mutation={CONTACT_MUTATION}>
                        {(createSubmission, { loading, error, data }) => (
                            <>
                            <form onSubmit={(e) => handleSubmit(e, createSubmission)} >
                                <input type="text" className={currentError ? 'bad' : ''} name="email" placeholder="Insert your e-mail" onChange={(e) => emailFieldChange(e.target.value)} id="email"/>
                                <input type="hidden" name="form-id" id="form-id" value={info.subscriptionFormId} />
                                <button type="submit">Subscribe</button>
                            </form>
                            <div className={currentError || loading || error || data ? 'open notif-box' : 'closed notif-box'}>
                                {currentError && <p>{currentError}</p>}
                                {loading && <p>Loading...</p>}
                                {error && (
                                <p>An unknown error has occured, please try again later...</p>
                                )}
                                {data && <p>Thanks for contacting us! We will get in touch with you shortly.</p>}
                            </div>
                            </>
                        )}
                        </Mutation>
                        
                    </div>

                    <div className={`${footerCSSClass}__bottom-support`}>
                        { info.supportIcons && info.supportIcons.map(icon => {
                            if(icon.link){
                                return <a key={shortid.generate()} href={icon.link}><img src={icon.icon.mediaItemUrl} alt=""/></a>;
                            } else {
                                return <img key={shortid.generate()} src={icon.icon.mediaItemUrl} alt=""/>;
                            }
                        }) }
                    </div>

                    {info.copywriteText && (
                        <div className={`${footerCSSClass}__bottom-copywrite`}>
                            <p>{info.copywriteText}</p>
                        </div>
                    )}
                    

                </div>
            </div>
        </footer>
    )
}
