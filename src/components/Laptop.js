import React from 'react';
import Footer from './footer/footer.js';
import Header from './header/Header.js';
import HeadPhoto from './header/headPhoto.js';
import Icons from './body/icons.js';
import Demo from './body/demo.js';
import Contacts from './body/contacts.js';
import './laptop.css';

const Laptop = () => {
    return (
        <div className='laptop'>
            <Header />
            <HeadPhoto />
            <Icons />
            <Contacts />
            <Demo />
            <Footer />
        </div>
    )
};

export default Laptop;