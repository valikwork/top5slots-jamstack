import React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function PageNotFound() {
    return (
        <Layout>
            <div className='row'>
                <div className='column small-12'>
                    <h1 style={{ color: '#373D45' }}>Sorry, page was not found</h1>
                    <h4>proceed to <Link to={'/'}>Home</Link></h4>
                </div>
            </div>
        </Layout>
    )
}