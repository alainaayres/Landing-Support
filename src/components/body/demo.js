import React from 'react';
import './demo.css';
import "../../assets/css/theme-colors/default.css";
import "../../assets/css/theme-skins/dark.css";
import "../../assets/css/blocks.css";
import "../../assets/css/style.css";
import "../../assets/css/app.css";
import "../../assets/css/custom.css";
import '../../assets/plugins/bootstrap/css/bootstrap.min.css'
import '../../assets/plugins/bootstrap/css/bootstrap.css';
import '../../assets/plugins/animate.css'
import '../../assets/plugins/line-icons/line-icons.css'
import '../../assets/plugins/font-awesome/css/font-awesome.min.css'
import '../../assets/plugins/fancybox/source/jquery.fancybox.css'
import '../../assets/plugins/layer-slider/layerslider/css/layerslider.css'
import {Helmet} from 'react-helmet'; 

//email plugin is a script from klaviyo

function Demo() {
    return (
        <div style={{ marginTop: 120, marginBottom: 180 }} >
            <link rel="stylesheet" href="assets/css/theme-colors/default.css" id="style_color" />
            <link rel="stylesheet" href="assets/css/theme-skins/dark.css"/>
            <link rel="stylesheet" href="assets/css/blocks.css"/>
            <link rel="stylesheet" href="assets/css/style.css"/>
            <link rel="stylesheet" href="assets/css/app.css"/>
            <link rel="stylesheet" href="assets/css/custom.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
            <link rel="stylesheet" href="../../assets/plugins/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" href="../../assets/plugins/bootstrap/css/bootstrap.css" />
            <link rel="stylesheet" href="../../assets/plugins/animate.css" />
            <link rel="stylesheet" href="../../assets/plugins/line-icons/line-icons.css" />
            <link rel="stylesheet" href="../../assets/plugins/font-awesome/css/font-awesome.min.css" />
            <link rel="stylesheet" href="../../assets/plugins/fancybox/source/jquery.fancybox.css" />
        
            <Helmet>
            <script type="text/javascript" async src={"https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TPaD2m"}></script>
            </Helmet>
        <div className='container' style={{ marginTop: '-20px' }}>
            <div className="bg-color-light" id="tab3" >
            <div className="container content-sm" >
                <div className='demo-hold'>
                <div className="row" style={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="col-md-6">
                        <h2 className="title-v2" style={{ fontWeight: 'bold', fontSize: '24px' }}>Request a Demo</h2>
                        <h4 style={{ textAlign: 'left' }} >Prism Software can focus on customized solutions based on your organization's needs.</h4>  

                    </div>
                    <div className="col-md-6">
                 

                        <div className="klaviyo-form-SgkCvU"></div>
                        
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
