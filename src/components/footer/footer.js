import React from 'react';



function Footer() {
    return (
        <div stlye={{ marginTop: 50, dispaly: 'flex', position: 'relative' }}>
        <script type="text/babel" src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/babel" src="/assets/jquery/jquery.min.js"></script>
        <script type="text/babel" src="/assets/jquery/jquery-migrate.min.js"></script>
        <script type="text/babel" src="/assets/plugins/back-to-top.js"></script>
        <script type="text/babel" src="/assets/plugins/smoothScroll.js"></script>
        <script type="text/babel" src="/assets/waypoints.min.js"></script>
        <script type="text/babel" src="/assets/plugins/jquery.parallax.js"></script>
        <script type="text/babel" src="/assets/plugins/counter/jquery.counterup.min.js"></script>
        <script type="text/babel" src="assets/plugins/jquery/jquery.fancybox.pack.js"></script>
        <script type="text/babel" src="/assets/js/custom.js"></script>
        <script type="text/babel" src="/assets/js/app.js"></script>
        <script type="text/babel" src="/assets/plugins/wow-animations/js/wow.min.js"></script>
        <script type="text/babel" src="/assets/js/plugins/fancy-box.js"></script>
        <script type="text/babel" src="/assets/js/plugins/style-switcher.js"></script>
        <script type="text/babel" src="/assets/plugins/respond.js"></script>
        <script type="text/babel" src="/assets/plugins/html5shiv.js"></script>
        <script type="text/babel" src="/assets/plugins/placeholder-IE-fixes.js"></script>
        <link rel="stylesheet" href="/assets/css/footers/footer-v6.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/theme-colors/default.css" id="style_color" />
        <link rel="stylesheet" href="/assets/css/theme-skins/dark.css" />
        <link rel="stylesheet" href="/assets/css/blocks.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/app.css" />
        <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.css" />
        <link rel='stylesheet' type='text/css'
        href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin' />

    <div id="footer-v6" className="footer-v6">
        <div className="footer">
          <div className="container">
            <div className="row">
              {/* About Us */}
              <div className="col-md-4 sm-margin-bottom-40">
                <div className="heading-footer">
                  <h2>About Prism Software</h2>
                </div>
                <p>Prism Software provides a range of applications for the processing and managing of
                  documents
                  and data. These affordable applications enable all size organizations to greatly reduce
                  their costs and significantly increase their efficiencies. Prism’s applications are used
                  by
                  leading organizations worldwide.</p>
              </div>
              {/* End About Us */}
              {/* Contacts */}
              <div className="col-md-4">
                <div className="heading-footer">
                  <h2>Contact Us</h2>
                </div>
                <ul className="list-unstyled contacts">
                  <li>
                    <i className="radius-3x fa fa-map-marker" />
                    184 Technology Dr. Suite 201, Irvine, CA 92618
                  </li>
                  <li>
                    <i className="radius-3x fa fa-phone" />
                    (949) 855-3100
                  </li>
                  <li>
                    <i className="radius-3x fa fa-globe" />
                    <a href="mailto:sales@prismsoftware.com">sales@prismsoftware.com</a><br />
                    <a href="https://www.prismsoftware.com/" target="_blank">www.prismsoftware.com</a>
                  </li>
                </ul>
              </div>
              {/* End Contacts */}
              <div className="col-md-4">
                <div className="heading-footer">
                  <h2>Join our mailing list</h2>
                </div>
                <div className="klaviyo-form-WWg7Gi"></div>
              </div>
            </div>
          </div>
          {/*/container */}
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8 sm-margon-bottom-10">
                <ul className="list-inline terms-menu">
                  <li className="silver">Copyright © 2021 Prism Software, All Rights Reserved</li>
                  <li className="silver"><a href="privacy/">Privacy Policy</a></li>                            
                  <li className="silver"><a href="accessibility/">Accessibility</a></li>                            
                </ul>
              </div>
              <div className="col-md-4">
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Footer
