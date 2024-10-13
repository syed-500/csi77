import React from 'react'
Window.React = React;
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Root
