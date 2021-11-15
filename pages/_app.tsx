import '../styles/globals.css'
import React, { Component } from 'react'

// main fuction that builds page with tailwind
// a "window" if you will into the page contents
function MyApp({ Component, pageProps }): JSX.Element {

  return <Component {...pageProps} />
}

export default MyApp
