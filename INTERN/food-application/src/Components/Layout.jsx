import React from 'react'
import Footer from './Footer'
import Home from './Home'


const Layout = ({children}) => {
  return (
    <>
        <Home/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout