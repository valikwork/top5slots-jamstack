import React, { useState } from 'react'

export default function PaymentMethodsAccordion({ paymentMethods }) {
    
    const [isOpen, setOpen] = useState(false);

    const PaymentList = ({payment, i}) => {
        
        if(isOpen){
            return (
                <li>
                    {payment.featuredImage && <img src={payment.featuredImage.node.mediaItemUrl} alt={ payment.title } /> }
                </li>
            )
        } else {
            if(i > 3){
                return null
            } else {
                return (
                    <li>
                        {payment.featuredImage && <img src={payment.featuredImage.node.mediaItemUrl} alt={ payment.title } /> }
                    </li>
                )
            }
        }
    }

    return (
        <>
        <div className="payment-methods__heading">
            <span>Payment Methods ({paymentMethods.length})</span>
            {paymentMethods.length > 3 && <button onClick={() => setOpen(!isOpen)}> {isOpen ? 'Hide' : 'Show All'} </button>}
        </div>
        <ul>
        {paymentMethods.length && paymentMethods.map((payment, i) => {
            return <PaymentList payment={payment} i={i} />
        })}
        </ul>
        </>
    )
}
