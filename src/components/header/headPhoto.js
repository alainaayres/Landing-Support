import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MediaQuery from 'react-responsive';
import './headPhoto.css'
import gradient from '../whitegradient.jpg';

function HeadPhoto() {
    return (
      
    <div className='header'>
     <div className='container-fluid' style={{ maxHeight:'300px', position:'relative', fontSize:'4vw', marginBottom: '5vw' }} >
       <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/blocks.css"} />
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=cyrillic,latin" />
       <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/custom.css"} />
       <link rel="stylesheet" href={process.env.PUBLIC_URL + "/assets/css/app.css"} />
           <MediaQuery minDeviceWidth={600} >
       
            <img src={gradient} className='img-fluid' alt="Responsive image" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            <div className='centered container'> 
               <h1 style={{ textAlign: 'center', verticalAlign: 'middle' }}>Browse our resources</h1>
               <h3 style={{ textAlign: 'center', verticalAlign: 'middle' }}>Take advantage of all the resources that Prism has to offer to maximize <br /> the value of your Prism Software solutions</h3>
            </div>
          
         </MediaQuery>

         <MediaQuery minDeviceWidth={300} maxDeviceWidth={599}>
         
            <img src={gradient} className='img-fluid' alt="Responsive image" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
            <div className='centered container'> 
               <h1 style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '22px' }}>Browse our resources</h1>
               <h3 style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '14px', marginLeft: '10px', marginRight: '10px' }}>Take advantage of all the resources that Prism has to offer to maximize the value of your Prism Software solutions</h3>
            </div>
     
         </MediaQuery>
      </div>
    </div>

    );
};

export default HeadPhoto;
