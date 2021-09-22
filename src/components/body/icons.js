import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './icons.css';
import { FontAwesomeIcon, View } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle, faCopy, faVideo, faInfo, faEnvelope, faDesktop } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import MediaQuery from 'react-responsive';
import bootstrap from 'bootstrap';


function Icons() {

        return (
            <div className='container-fluid' >
            <MediaQuery minDeviceWidth={300} maxDeviceWidth={599}>
                    <div className='card-cont' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div className='row' style={{ justifyContent: 'center' }}>
                            <div className='container-2'>
                            <div className='column'>
                                <a href={"mailto:support@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>
                                    <div className='fas fa-layers fa-fw' style={{ marginLeft: -54, marginTop: 50 }} >
                                        <FontAwesomeIcon className='circle' icon={faCircle} style={{ fontSize: '5.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='search' icon={faEnvelope} style={{ zIndex:99, fontSize: '2.6rem', color: '#fff', marginLeft: 14 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 40, marginLeft: '-60px', fontSize: 16 }}>Request<br/>Support</span>
                                </a>
                            </div>
                            <div className='column'>
                                <a href="https://get.teamviewer.com/prismsoftware" target="_blank" style={{ textDecoration: 'none' }} >
                                    <div className=' fas fa-layers fa-fw' style={{ marginLeft: 18, marginTop: 50 }} >
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faDesktop} style={{ zIndex:99, fontSize: '2.6rem', color: 'white', marginLeft: 13 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 40, marginRight: '-17px', fontSize: 16 }}>Get Remote<br/>Support</span>
                                </a>
                            </div>
                            
                        </div>
                        <div className='row' style={{ justifyContent: 'center' }}>
                            <div className='container-2'>
                                <div className='column'>
                                    <a href="https://www.prismsupport.com/documentation/Content/A_IntroTopics/Video-Library.htm" target="_blank" style={{ textDecoration: 'none' }} >
                                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: -20, marginTop: 60 }} >
                                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faVideo} style={{ zIndex:99, fontSize: '2.6rem', color: 'white', marginLeft: 13 }}></FontAwesomeIcon>
                                        </div>
                                        <span style={{ paddingTop: 40, marginLeft: '-50px', fontSize: 16, paddingBottom: 10 }}>Product<br/>Training Videos</span>
                                    </a>
                                </div>
                                <div className='column'>
                                <a href="https://prismsupport.com/documentation" target="_blank" style={{ textDecoration: 'none' }} >
                                    <div className=' fas fa-layers fa-fw' style={{ marginLeft: 30, marginTop: 60 }} >
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5.5rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCopy} style={{ zIndex:99, fontSize: '2.6rem', color: 'white', marginLeft: 16.6 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 40, marginRight: '-2px', fontSize: 16 }}>Product<br/>Documentation</span>
                                </a>
                                </div>
                                
                                {/*<div className='column'>
                                <a>
                                    <div className=' fas fa-layers fa-fw' style={{ marginLeft: 53, marginTop: 50 }} >
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '4.2rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faInfo} style={{ zIndex:99, fontSize: '2rem', color: 'white', marginLeft: 18 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 40, marginLeft: '17px', marginRight: '50px', fontSize: 14, paddingBottom: 10 }}>Technical<br/>Knowledge Base</span>
                                </a>
                            </div>*/}
                            </div>
                        </div>
                        </div>
                    </div>
                </MediaQuery>
            
                <MediaQuery minDeviceWidth={600} maxDeviceWidth={906}>
                    <div className='card-cont' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div className='row' style={{ justifyContent: 'center' }}>
                            <div className='container-2'>
                            <div className='column'>
                                <a href={"mailto:support@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>
                                    <div className='fas fa-layers fa-fw' style={{ marginLeft: 10, marginTop: 100 }} >
                                        <FontAwesomeIcon className='circle' icon={faCircle} style={{ fontSize: '6rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='search' icon={faEnvelope} style={{ zIndex:99, fontSize: '2.8rem', color: '#fff', marginLeft: 16 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 50, marginLeft: '-30px', fontSize: 18 }}>Request Support</span>
                                </a>
                            </div>
                            <div className='column'>
                                <a href="https://get.teamviewer.com/prismsoftware" target="_blank" style={{ textDecoration: 'none' }} >
                                    <div className=' fas fa-layers fa-fw' style={{ marginLeft: 54, marginTop: 100 }} >
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faDesktop} style={{ zIndex:99, fontSize: '2.8rem', color: 'white', marginLeft: 14.5 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 50, marginRight: '-10px', fontSize: 18 }}>Get Remote Support</span>
                                </a>
                            </div>
                            
                        </div>
                        <div className='row' style={{ justifyContent: 'center' }}>
                            <div className='container-2'>
                                <div className='column'>
                                    <a href="https://www.prismsupport.com/documentation/Content/A_IntroTopics/Video-Library.htm" target="_blank" style={{ textDecoration: 'none' }} >
                                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: -25, marginTop: 100 }} >
                                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6rem', color: '#158cc3' }}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faVideo} style={{ zIndex:99, fontSize: '2.8rem', color: 'white', marginLeft: 14 }}></FontAwesomeIcon>
                                        </div>
                                        <span style={{ paddingTop: 50, marginLeft: '-63px', fontSize: 18, paddingBottom: 15 }}>Product<br />Training Videos</span>
                                    </a>
                                </div>
                                <div className='column'>
                                <a href="https://prismsupport.com/documentation" target="_blank" style={{ textDecoration: 'none' }} >
                                    <div className=' fas fa-layers fa-fw' style={{ marginLeft: 35, marginTop: 100 }} >
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faCopy} style={{ zIndex:99, fontSize: '2.8rem', color: 'white', marginLeft: 18 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 50, marginRight: '-24px', fontSize: 18 }}>Product<br />Documentation</span>
                                </a>
                                </div>
                                
                                {/*<div className='column'>
                                <a>
                                    <div className=' fas fa-layers fa-fw' style={{ marginLeft: 53, marginTop: 100 }} >
                                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faInfo} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 21 }}></FontAwesomeIcon>
                                    </div>
                                    <span style={{ paddingTop: 50, marginLeft: '17px', marginRight: '50px', fontSize: 16, paddingBottom: 15 }}>Technical<br/>Knowledge Base</span>
                                </a>
                            </div>*/}
                            </div>
                        </div>
                        </div>
                    </div>
                </MediaQuery>
                
                <MediaQuery minDeviceWidth={906} maxDeviceWidth={960}>
                        <div className='card-cont' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div className='container-2'>
                    <a href={"mailto:support@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>
                        <div className='fas fa-layers fa-fw' style={{ marginLeft: -36, marginTop: 100 }} >
                            <FontAwesomeIcon className='circle' icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon className='search' icon={faEnvelope} style={{ zIndex:99, fontSize: '2.5rem', color: '#fff', marginLeft: 12 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginLeft: '-50px', fontSize: 20 }}>Request<br/>Support</span>
                    </a>
                    </div>
                    <div className='container-2'>
                    <a href="https://get.teamviewer.com/prismsoftware" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: 32, marginTop: 100 }} >
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faDesktop} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 11 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginLeft: '0px', fontSize: 20 }}>Get Remote<br/>Support</span>
                    </a>
                    </div>
                    <div className='container-2'>
                    <a href="https://prismsupport.com/documentation" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: 25, marginTop: 100 }} >
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCopy} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 15 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginLeft: '-22px', fontSize: 20 }}>Product<br/>Documentation</span>
                    </a>
                    </div>
                    <div className='container-2'>
                    <a href="https://www.prismsupport.com/documentation/Content/A_IntroTopics/Video-Library.htm" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: -3, marginTop: 100 }} >
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faVideo} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 12 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginLeft: '-50px', fontSize: 20, paddingBottom: 20 }}>Product<br/>Training Videos</span>
                    </a>
                    </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={961}>
                    <div className='card-cont' style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div className='container-2'>
                    <a href={"mailto:support@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>
                        <div className='fas fa-layers fa-fw' style={{ marginLeft: -13.5, marginTop: 100 }} >
                            <FontAwesomeIcon className='circle' icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon className='search' icon={faEnvelope} style={{ zIndex:99, fontSize: '2.5rem', color: '#fff', marginLeft: 12 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginLeft: '-26px', fontSize: 20 }}>Request<br/>Support</span>
                    </a>
                    </div>
                    <div className='container-2'>
                    <a href="https://get.teamviewer.com/prismsoftware" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: 30, marginTop: 100 }} >
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faDesktop} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 11 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginRight: '-28px', fontSize: 20 }}>Get Remote<br/>Support</span>
                    </a>
                    </div>
                    <div className='container-2'>
                    <a href="https://prismsupport.com/documentation" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: 48, marginTop: 100 }} >
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faCopy} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 15 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginRight: '-30px', fontSize: 20 }}>Product<br/>Documentation</span>
                    </a>
                    </div>
                    <div className='container-2'>
                    <a href="https://www.prismsupport.com/documentation/Content/A_IntroTopics/Video-Library.htm" target="_blank" style={{ textDecoration: 'none' }} >
                        <div className=' fas fa-layers fa-fw' style={{ marginLeft: 20, marginTop: 100 }} >
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '5rem', color: '#158cc3' }}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faVideo} style={{ zIndex:99, fontSize: '2.5rem', color: 'white', marginLeft: 12 }}></FontAwesomeIcon>
                        </div>
                        <span style={{ paddingTop: 50, marginLeft: '-25px', fontSize: 20 }}>Product<br/>Training Videos</span>
                    </a>
                    </div>
                    </div>
                </MediaQuery>
            </div>
        )

}

export default Icons;
