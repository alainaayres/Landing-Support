import React from 'react';
import './icons.css';
import { FontAwesomeIcon, View } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle, faCopy, faVideo, faInfo, faEnvelope, faDesktop } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function Icons() {
    return (
        <div className='container-fluid' style={{ marginBottom: '80px' }}>
        <div className='card-cont' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className='container-2'>
            <a href={"mailto:support@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>
                <div className='fas fa-layers fa-fw' style={{ marginLeft: -13.5, marginTop: 100 }} >
                    <FontAwesomeIcon className='circle' icon={faCircle} style={{ fontSize: '4.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                    <FontAwesomeIcon className='search' icon={faEnvelope} style={{ zIndex:99, fontSize: '2rem', color: '#fff', marginLeft: 12 }}></FontAwesomeIcon>
                </div>
                <span style={{ paddingTop: 50, marginLeft: '-26px' }}>Request<br/>Support</span>
            </a>
            </div>
             <div className='container-2'>
             <a href="https://get.teamviewer.com/prismsoftware" target="_blank" style={{ textDecoration: 'none' }} >
                <div className=' fas fa-layers fa-fw' style={{ marginLeft: 27, marginTop: 100 }} >
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '4.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faDesktop} style={{ zIndex:99, fontSize: '2rem', color: 'white', marginLeft: 11.5 }}></FontAwesomeIcon>
                </div>
                <span style={{ paddingTop: 50, marginRight: '-35px' }}>Get Remote<br/>Support</span>
            </a>
            </div>
            <div className='container-2'>
            <a href="https://prismsupport.com/documentation" target="_blank" style={{ textDecoration: 'none' }} >
                <div className=' fas fa-layers fa-fw' style={{ marginLeft: 41, marginTop: 100 }} >
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '4.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faCopy} style={{ zIndex:99, fontSize: '2rem', color: 'white', marginLeft: 14 }}></FontAwesomeIcon>
                </div>
                <span style={{ paddingTop: 50, marginRight: '-30px' }}>Product<br/>Documentation</span>
            </a>
            </div>
            <div className='container-2'>
            <a href="https://www.prismsupport.com/documentation/Content/A_IntroTopics/Video-Library.htm" target="_blank" style={{ textDecoration: 'none' }} >
                <div className=' fas fa-layers fa-fw' style={{ marginLeft: 10, marginTop: 100 }} >
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '4.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faVideo} style={{ zIndex:99, fontSize: '2rem', color: 'white', marginLeft: 12 }}></FontAwesomeIcon>
                </div>
                <span style={{ paddingTop: 50, marginLeft: '-30px' }}>Product<br/>Training Videos</span>
            </a>
            </div>
            <div className='container-2'>
            <a>
                <div className=' fas fa-layers fa-fw' style={{ marginLeft: '-8px', marginTop: 100 }} >
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '4.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInfo} style={{ zIndex:99, fontSize: '2rem', color: 'white', marginLeft: 19.5 }}></FontAwesomeIcon>
                </div>
                <span style={{ paddingTop: 50, marginLeft: '-50px', marginRight: '50px' }}>Technical<br/>Knowledge Base</span>
            </a>
            </div>
            </div>
            
        </div>
    )
}

export default Icons
