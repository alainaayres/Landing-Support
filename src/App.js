import React, { Component } from 'react';
import Header from './components/header/Header.js';
import HeadPhoto from './components/header/headPhoto.js';
import Icons from './components/body/icons.js';
import Demo from './components/body/demo.js';
import Footer from './components/footer/footer.js';
import Contacts from './components/body/contacts.js';
import { useMediaQuery } from 'react-responsive';
import BigScreen from './components/BigScreen.js';
import Desktop from './components/Desktop.js';
import Laptop from './components/Laptop.js';
import Tablet from './components/Tablet.js';
import Mobile from './components/Mobile.js';

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
      <div >
       <Header />
       <HeadPhoto />
       <Icons />
       <Contacts />
       <Demo />
       <Footer />
      </div>
    )
}

export default App

