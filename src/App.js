import React, { Component } from 'react';
import Header from './components/header/Header.js';
import HeadPhoto from './components/header/headPhoto.js';
import Icons from './components/body/icons.js';
import Demo from './components/body/demo.js';
import Footer from './components/footer/footer.js';
import Contacts from './components/body/contacts.js';
import { useMediaQuery } from 'react-responsive';

export class App extends Component {
  render() {



    return (
      <div>
        <Header />
        <HeadPhoto />
        <Icons />
        <Contacts />
        <Demo />
        <Footer />
      </div>
    )
  }
}

export default App

