import React from 'react';
import './demo.css';

import {Helmet} from 'react-helmet'; 

//email plugin is a script from klaviyo

function Demo() {
    return (
        <div style={{ padding: '4vw', display: 'flex', justifyItems: 'center', position: 'relative' }} >
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/bootstrap/js/bootstrap.min.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/jquery/jquery.min.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/jquery/jquery-migrate.min.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/back-to-top.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/smoothScroll.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/waypoints.min.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/jquery.parallax.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/counter/jquery.counterup.min.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "assets/plugins/jquery/jquery.fancybox.pack.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/js/custom.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/js/app.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/wow-animations/js/wow.min.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/js/plugins/fancy-box.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/js/plugins/style-switcher.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/respond.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/html5shiv.js"}></script>
        <script type="text/jsx" src={process.env.PUBLIC_URL + "/assets/plugins/placeholder-IE-fixes.js"}></script>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/theme-colors/default.css"} id="style_color" />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/theme-skins/dark.css"}/>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/blocks.css"}/>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/style.css"}/>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/app.css"}/>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/custom.css"}/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/plugins/bootstrap/css/bootstrap.min.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/plugins/bootstrap/css/bootstrap.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/plugins/animate.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/plugins/line-icons/line-icons.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/plugins/font-awesome/css/font-awesome.min.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/plugins/fancybox/source/jquery.fancybox.css"} />
        
            <Helmet>
            <script type="text/javascript" async src={"https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TPaD2m"}></script>
            </Helmet>
        <div className='container' style={{ marginTop: '-20px', justifyContent: 'center', position: 'relative', display: 'flex' }}>
            <div className="gray bg-color-light" id="tab3" style={{ justifyContent: 'center' }} >
            <div className="container content-sm" style={{ justifyContent: 'center', width: '100%' }} >
                <div className='demo-hold' style={{ justifyContent: 'center' }}>
                <div className="row" style={{ justifyContent: 'center', padding: '5vw', marginTop: '4vw', marginBottom: '4vw' }}>
                    <div className="col-md-6" style={{ padding: '15px' }}>
                        <h2 >Request a Demo</h2>
                        <h4 style={{ textAlign: 'left', position: 'relative' }} >Prism Software can focus on customized solutions based on your organization's needs.</h4>  

                    </div>
                    <div className="col-md-6" >
                 

                        <div className="klaviyo-form-Uqi64F" stlye={{ width: '20%' }}></div>
                        
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Demo
