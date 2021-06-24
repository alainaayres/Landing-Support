import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import photo from '../2.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../assets/img/sliders/slider-img5-1.jpg';
import img2 from '../../assets/img/sliders/slider-img1-2.jpg';
import '../../assets/css/style.css'
import '../../assets/css/app.css'
import '../../assets/css/blocks.css'
import '../../assets/css/custom.css'
import './headPhoto.css'
import laughing from '../laughing.jpg';
import glasses from '../glasses.jpg';

function HeadPhoto() {
    return (
      
    <div className='header'>
     <div className='container-fluid' style={{ maxHeight:'300px', position:'relative', fontSize:'4vw' }} >
       <link rel="stylesheet" href="../assets/css/blocks.css" />
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=cyrillic,latin" />
       <link rel="stylesheet" href="../assets/css/custom.css" />
       <link rel="stylesheet" href="../assets/css/app.css" />
           <img src={glasses} className='img-fluid' alt="Responsive image" style={{ maxHeight:'300px', width:'100%', objectFit: 'cover' }} />
            <div className='centered' > 
               <h1>Browse our resources</h1>
               <h2>Take advantage of all the resources that Prism has to offer to maximize the value <br /> of your Prism Software solutions</h2>
            </div>
      </div>
    </div>

    );
};

export default HeadPhoto;
