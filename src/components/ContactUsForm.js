import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

export default function ContactUsForm({ formID }) {

    const CONTACT_MUTATION = gql`
        mutation CreateSubscriptionMutation($clientMutationId: String!, $name: String!, $email: String!, $message: String!, $form_id: String!){
            contactUs(input: {clientMutationId: $clientMutationId, name: $name, email: $email, message: $message, form_id: $form_id}) {
                success
                data
            }
        }
        `

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
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
                    clientMutationId: 'example123',
                    name: nameValue,
                    email: emailValue,
                    message: messageValue,
                    form_id: formID.toString()
                }
            })
        }
    }

    return (
        <Mutation mutation={CONTACT_MUTATION} >
        {(createSubmission, { loading, error, data }) => {

            if(data){
                return <p>Thanks for contacting us, {JSON.parse(data.contactUs.data).name}! We will get in touch with you shortly.</p>
            } 

            return (
                <>
                <form className="contact-us-form" onSubmit={(e) => handleSubmit(e, createSubmission)}  >
                    <label className="label-w-overlay" htmlFor="name">
                        <span className="overlay-label">Name</span>
                        <input type="text" name="name" placeholder="First Name Last Name" onChange={(e) => setNameValue(e.target.value)} id="name"/>
                    </label>
                    <input type="text" className={currentError ? 'bad' : ''} name="email" placeholder="Email Address" onChange={(e) => emailFieldChange(e.target.value)} id="email"/>
                    <textarea name="message" id="message" placeholder="Your Message" onChange={(e) => setMessageValue(e.target.value)}></textarea>
                    <input type="hidden" name="form_id" id="form_id" value={formID} />
                    <button type="submit">{loading ? 'Sending...' : 'Send'}</button>
                </form>
                
                <div className={currentError || loading || error || data ? 'open notif-box' : 'closed notif-box'}>
                    {currentError && <p>{currentError}</p>}
                    {error && (
                    <p>An unknown error has occured, please try again later...</p>
                    )}
                </div>
                </>
            )
        }}
        </Mutation>
    )
}
