import React, { Component } from 'react';
import Hamburger from './hamburger.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'
import '../../assets/plugins/bootstrap/css/bootstrap.css'
import '../../assets/css/style.css'
import '../../assets/css/app.css'
import '../../assets/css/headers/header-v6.css'
import '../../assets/css/footers/footer-v6.css'
import '../../assets/plugins/animate.css'
import '../../assets/plugins/line-icons/line-icons.css'
import '../../assets/plugins/font-awesome/css/font-awesome.min.css'
import '../../assets/plugins/fancybox/source/jquery.fancybox.css'
import '../../assets/plugins/layer-slider/layerslider/css/layerslider.css'
import '../../assets/plugins/youtube-player/css/YTPlayer.css'
import '../../assets/css/theme-colors/default.css'
import '../../assets/css/theme-skins/dark.css'
import '../../assets/css/blocks.css'
import '../../assets/css/custom.css'
import './hamburger.css';
import logo from '../prism_logo.png'
import {Helmet} from 'react-helmet';

/*breadcrumb v3 max height265
exclude technical knowledge based
madcap*/

export class Header extends Component {
    render() {
        return (

  <div>
      <Helmet>
        <title>Prism Software | Enterprise Content Management</title>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="keywords" content="Prism Software, document management, ecm, workflow, enterprise content management, document imaging, capture, records management, data capture" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="All-Inclusive Enterprise Content Management means automating and managing work processes, documents, and data. Prism Software helps you replace manual processes and creates a customizable solution to streamline your organization's business processes." />
        <meta name="author" content="Prism Software" />
        <meta name="robots" content="follow, index" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* Favicon */}
        <link rel="shortcut icon" href={logo} />
        {/* Canon */}
        <link rel="canonical" href="https://prismsoftware.com/" />
        {/* Web Fonts */}
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=cyrillic,latin" />
        {/* CSS Global Compulsory */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
        <link rel="stylesheet" href="../../assets/plugins/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../../assets/plugins/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="../../assets/css/style.css" />
  
        <link rel="stylesheet" href="../../assets/css/app.css" />
        {/* CSS Header and Footer */}
        <link rel="stylesheet" href="../../assets/css/headers/header-v6.css" />
        <link rel="stylesheet" href="../../assets/css/footers/footer-v6.css" />
        {/* CSS Implementing Plugins */}
        <link rel="stylesheet" href="../../assets/plugins/animate.css" />
        <link rel="stylesheet" href="../../assets/plugins/line-icons/line-icons.css" />
        {/*<link rel="stylesheet" href="assets/plugins/line-icons-pro/styles.css">*/}
        <link rel="stylesheet" href="../../assets/plugins/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../../assets/plugins/fancybox/source/jquery.fancybox.css" />

        {/*<link rel="stylesheet" href="assets/plugins/master-slider/masterslider/style/masterslider.css">*/}
        {/*<link rel='stylesheet' href="assets/plugins/master-slider/masterslider/skins/black-2/style.css">*/}
        {/* CSS Pages Style */}
        <link rel="stylesheet" href="../../assets/plugins/layer-slider/layerslider/css/layerslider.css" />
        <link rel="stylesheet" href="../../assets/plugins/youtube-player/css/YTPlayer.css" />
        {/* CSS Theme */}
        <link rel="stylesheet" href="../../assets/css/theme-colors/default.css" id="style_color" />
        <link rel="stylesheet" href="../../assets/css/theme-skins/dark.css" />
        <link rel="stylesheet" href="../../assets/css/blocks.css" />
        {/* CSS Customization */}
        <link rel="stylesheet" href="../../assets/css/custom.css" />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
       
        <noscript>
          &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWRGN3T" height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        <script type="text/javascript" src="assets/plugins/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="assets/plugins/jquery/jquery-migrate.min.js"></script>
        <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

        <script type="text/javascript" src="assets/plugins/back-to-top.js"></script>
        <script type="text/javascript" src="assets/plugins/smoothScroll.js"></script>
        <script type="text/javascript" src="assets/plugins/jquery.parallax.js"></script>
        

        <script type="text/javascript" src="assets/plugins/counter/waypoints.min.js"></script>
        <script type="text/javascript" src="assets/plugins/counter/jquery.counterup.min.js"></script>
        <script type="text/javascript" src="assets/plugins/fancybox/source/jquery.fancybox.pack.js"></script> 

        <script src="assets/plugins/wow-animations/js/wow.min.js"></script>

        <script type="text/javascript" src="assets/js/custom.js"></script>

        <script type="text/javascript" src="assets/js/app.js"></script>
        <script type="text/javascript" src="assets/js/plugins/fancy-box.js"></script> 

        <script type="text/javascript" src="assets/js/plugins/style-switcher.js"></script>
          <script src="assets/plugins/respond.js"></script>
      
        <script src="assets/plugins/html5shiv.js"></script>
        <script src="assets/plugins/placeholder-IE-fixes.js"></script>
        </Helmet>
        {/* End Google Tag Manager (noscript) */}
        <div className='header-v6'>
          {/*=== Header v6 ===*/}
          <div>
            {/* Navbar */}
            <nav className="navbar mega-menu" role="navigation" >
              <div className="container">  
                {/* Brand and toggle get grouped for better mobile display */}
            
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse navbar-responsive-collapse">
                {/* Navbar Brand */}
                  <div className="menu-container">
                      
                          <nav id="navbar" className="navigation" role="navigation">
                              <input id="toggle1" type="checkbox" />
                              <label className="hamburger1" for="toggle1">
                              <div className="top"></div>
                              <div className="meat"></div>
                              <div className="bottom"></div>
                              </label>
                          
                              <nav className="menu1">
                              <a className="link1" href="">Our Models</a>
                              <a className="link1" href="">Specialties</a>
                              <a className="link1" href="">About</a>
                              <a className="link1" href="">Blog</a>
                              <a className="lin1 kbutton-nav" href="">Contact</a>
                              </nav>
                          </nav>
               

                      <div className="navbar-brand">
                        <a href="https://www.prismsoftware.com/">
                          <img className="shrink-logo" src={logo} alt="Prism Software" title="Logo" />
                        </a>
                      </div>
                  {/* End Navbar Brand */}
                    <ul className="nav navbar-nav" >
                      {/* Products */}
                      <li className="dropdown">
                        <a href className="dropdown-toggle" target data-toggle="dropdown" >
                          Products
                        </a>
                        <ul className="first dropdown-menu" style={{ width: '70%', left: '8%', right: '8%' }}>
                          <li>
                            <div className="mega-menu-content disable-icons">
                              <div className="container">
                                <div className="row equal-height">
                                  <div className="col-md-4 equal-height-in">
                                    <ul className="list-unstyled equal-height-list">
                                      <li>
                                        <h3>Enterprise Content Management (ECM)</h3>
                                      </li>
                                      {/* ECM */}
                                      <li><a href="https://www.prismsoftware.com/products/ecm/" target="_blank">DocRecord</a>
                                      </li>
                                      {/* End ECM */}
                                      <br />
                                      <li>
                                        <h3>Desktop Document Processing &amp; Workflow</h3>
                                      </li>
                                      {/* WorkPath family */}
                                      <li>
                                        <a href="https://www.prismsoftware.com/products/prism-workpath/" target="_blank">
                                          Prism WorkPath</a>
                                      </li>
                                      <br />
                                      <li>
                                        <h3>Smartphone Forms with eSignature</h3>
                                      </li>
                                      <li>
                                        <a href="https://www.prismsoftware.com/products/smartphone-forms/" target="_blank">Smartphone Forms
                                        </a>
                                      </li>
                                      {/* End WorkPath family*/}
                                    </ul>
                                  </div>
                                  <div className="col-md-4 equal-height-in">
                                    <ul className="list-unstyled equal-height-list">
                                      <li>
                                        <h3>Automated Data Capture &amp; Extraction</h3>
                                      </li>
                                      <li>
                                        <a href="https://www.prismsoftware.com/products/prism-capture/" target="_blank">Prism
                                          Capture</a></li>
                                      <br />
                                      <li>
                                        <h3>Automated Processing of Scanned Documents</h3>
                                      </li>
                                      <li>
                                        <a href="https://www.prismsoftware.com/products/scanpath/" target="_blank">ScanPath</a>
                                      </li>
                                      <br />
                                      <li>
                                        <h3>Automated Business Communications</h3>
                                      </li>
                                      <li>
                                        <a href="https://www.prismsoftware.com/products/docform/" target="_blank">DocForm</a> 
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-md-4 equal-height-in">
                                    <ul className="list-unstyled equal-height-list">
                                      <li>
                                        <h3>eForms &amp; Data Collection</h3>
                                      </li>
                                      <li>
                                        <a href="https://www.prismsoftware.com/products/electronic-forms/" target="_blank">eForms</a>
                                      </li>
                                      <br />
                                      <li>
                                        <h3>MFP Security &amp; Breach Alerts</h3>
                                      </li>
                                      <li><a href="https://www.prismsoftware.com/products/bizhub-secure-alert/" target="_blank">bizhub
                                          SECURE Alert</a>
                                      </li>
                                      <br />
                                      
                                      {/* End Smartphone Forms */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      {/* End Products */}
                      {/* Support */}
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle>
                          Support
                        </a>
                         <ul className="dropdown-menu">
                          <li>
                            <div className="dropdown disable-icons">
                              <div className="dropdown-list">
                                <ul className=" list-unstyled equal-height-list">
                                  <li><a href="http://support.prismsoftware.com"> Support</a></li>
                                  <br />
                                  <li className><a href="https://prismsupport.com/documentation" target="_blank">Product Documentation</a></li>
                                  <br />
                                  <li className><a href="https://www.prismsupport.com/documentation/Content/A_IntroTopics/Video-Library.htm" target="_blank">Product Training Videos</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      {/* End Support */}
                      {/* Company */}
                      {/* <li class="dropdown">
                                    <a href="https://www.prismsoftware.com/about/" class="dropdown-toggle"
                                        data-toggle="">
                                        Company
                                    </a>
                                </li> */}
                      {/* End Company */}
                      {/* Company */}
                      <li className="dropdown">
                        <a href className="dropdown-toggle" data-toggle="dropdown">
                          About
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="dropdown disable-icons">
                              <div className="dropdown-list">
                                <ul className=" list-unstyled equal-height-list">
                                  <li><a href="https://prismsoftware.com/about/" target="_blank"> Company</a></li>
                                  <br />
                                  <li className><a href="https://prismsoftware.com/news/" target="_blank">News</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      {/* End Company */}
                      {/* Demo */}
                      <li className="dropdown">
                        <a className="dropdown-toggle" href="https://prismsoftware.com/contact-us/" target="_blank">
                          <button type="submit" className="text-uppercase btn-u btn-u-blue" style={{padding: '0px 5px 0px 5px'}}>Schedule a Demo </button>
                        </a>
                      </li>
                      {/* End Demo */}
                    </ul>
                  </div>
                </div>
                {/*/navbar-collapse*/}
              </div>
            </nav>
            {/* End Navbar */}
          </div>
          {/*=== End Header v6 ===*/}
        </div>

  </div>

        );
    };
};

export default Header
