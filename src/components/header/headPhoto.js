import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './headPhoto.css'
import gradient from '../whitegradient.jpg';

function HeadPhoto() {
    return (
      
    <div className='header'>
     <div className='container-fluid' style={{ maxHeight:'300px', position:'relative', fontSize:'4vw', marginBottom: '7vw' }} >
       <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/blocks.css"} />
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=cyrillic,latin" />
       <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/custom.css"} />
       <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/app.css"} />
           <img src={gradient} className='img-fluid' alt="Responsive image" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            <div className='centered container' style={{ alignContent: 'center' }} > 
               <h1>Browse our resources</h1>
               <h3>Take advantage of all the resources that Prism has to offer to maximize <br /> the value of your Prism Software solutions</h3>
            </div>
      </div>
    </div>

    );
};

export default HeadPhoto;
