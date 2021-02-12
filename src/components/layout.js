import React, { useEffect } from "react"
import "../assets/css/style.css"
import Header from "./Header"
import Footer from "./Footer"


const Layout = props => {

  const { children, pageInfo } = props
  const { isFrontPage, contentType, title, uri } = pageInfo ? pageInfo : ""
  const mainClass = isFrontPage ? "homePage" : ""

  useEffect(() => {

  })

  return (
    <>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
