import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import complaintsBgImage from '../assets/images/complaints-bg.png';

export default function ComplainFormSection(props) {

    const data = useStaticQuery(graphql`
    query {
        wpgraphql {
            siteSettings {
                opt_site_settings {
                    complaintsFormText
                    submitComplaintButtonText
                    complaintGravityFormId
                }
            }
        }
    }
    `)

    const { complaintsFormText, submitComplaintButtonText, complaintGravityFormId } = data.wpgraphql.siteSettings.opt_site_settings

    return(
        <div className="submit-complain-wrap" style={{ backgroundImage: `url(${complaintsBgImage})` }}>
            <div className="submit-complain wrapper">
                <div className="complains-text-box">
                    {complaintsFormText && <p>{complaintsFormText}</p> }
                    <button className="btn btn-center">{submitComplaintButtonText ? submitComplaintButtonText : 'Submit Complaint'}</button>
                </div>
            </div>
        </div>
    )
}
