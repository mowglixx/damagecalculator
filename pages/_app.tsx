import '../styles/globals.css'
import Nav from '../components/Nav'
import React, { Component } from 'react'
import Footer from '../components/Footer'

// main fuction that builds page with tailwind
// a "window" if you will into the page contents
export const MyApp = ({ Component, pageProps }): JSX.Element => {

  return <>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
