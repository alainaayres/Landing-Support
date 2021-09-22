<MediaQuery maxDeviceWidth={992} style={{ justifyContent: 'left' }}>
<div className='container-fluid'>
                <div className="navbar-brand" style={{ justifyContent:'left' }}>
                    <a href="https://www.prismsoftware.com/">
                        <img className="shrink-logo" src={logo} alt="Prism Software" title="Logo" />
                        </a>
                    </div>

               
                  <nav id="navbar" className="navigation" role="navigation" style={{ justifyContent: 'left' }}>
                    <input id="toggle1" type="checkbox" />
                      <label className="hamburger1" for="toggle1">
                          <div className="top"></div>
                          <div className="meat"></div>
                          <div className="bottom"></div>
                      </label>
                    
                  <div className="menu1" style={{ justifyItems: 'left' }}>
                    <div className='navbar-collapse navbar-responsive-collapse collapse in' aria-expanded='true'>
                      <div className='menu-container'>
                        <ul className='nav navbar-nav'> 
                          <li className='dropdown mega-menu-fullwidth'>
                            <a className=" text-uppercase link1 dropdown-toggle" href data-toggle="dropdown" style={{ textAlign: 'left' }}>Products</a>
                              <ul className="dropdown-menu" style={{ width: '70%', left: '8%', right: '8%' }}>
                                  <li >
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
                            {/*<hr class="solid"/>*/}
                            <li className='dropdown'>
                            <a className="text-uppercase link1" href data-toggle="dropdown" style={{ textAlign: 'left', appearance: 'none', border: 'none' }}>Support</a>
                              <ul className="dropdown-menu" >
                                  <li>
                                    <div className="dropdown disable-icons" >
                                      <div className="dropdown-list" >
                                        <ul className=" list-unstyled equal-height-list" style={{ display: 'none' }}>
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
                            {/*<hr class="solid"/>*/}
                            <li className="dropdown">
                                <a href className="text-uppercase link1 dropdown-toggle" data-toggle="dropdown" style={{ cursor: 'pointer' }}>
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

                            {/*<hr class="solid"/>*/}
                            <a className="dropdown-toggle" href="https://prismsoftware.com/contact-us/" target="_blank">
                                  <button type="submit" className="text-uppercase btn-u btn-u-blue" style={{padding: '0px 5px 0px 5px'}}>Schedule a Demo </button>
                            </a>

                            </ul>
                            </div>
                            </div>

                            </div>

                        </nav>

         
              
            </div>
                </MediaQuery>