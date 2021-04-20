import React, { useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../assets/css/foundation.min.css"
import "../assets/css/normalize.css"
import "../assets/style.scss"
import "../assets/css/media-screens.css"
import "../assets/css/plugins/font-awesome.min.css"
import "../assets/css/plugins/jquery.fancybox.min.css"

const Layout = props => {

  const { children, pageInfo, className } = props
  const { isFrontPage, contentType, title, uri } = pageInfo ? pageInfo : ""
  const mainClass = isFrontPage ? "homePage" : className

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
