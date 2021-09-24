import React from 'react';
import './contacts.css';
import bootstrap from 'bootstrap';
import MediaQuery from 'react-responsive';

function Contacts() {
    return (
        <div>
        <div className='container' style={{ marginTop: '40px' }} >
            <div className='row' >
            <div className='col'>
                <div className='card'  style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    <h3>Corporate Sales Support</h3>
                        <p>+1 (949) 855-3100</p>
                        <p>
                        <a href={"mailto:sales@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>sales@prismsoftware.com</a>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                        Weekly Hours of Operation<br/>
                        Monday - Friday 7am - 5pm
                        </p>
                </div>
            </div>
            <div className='col'>
                <div className='card' style={{ fontFamily: 'Open Sans, sans-serif' }}>
          
                    <h3>Technical Support</h3>
                        <p>+1 (949) 855-3100 Ext. 1</p>
                        <p>
                        <a href={"mailto:support@prismsoftware.com"} target="_blank" style={{ textDecoration: 'none' }}>support@prismsoftware.com</a>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                        Tech Support Hours<br/>
                        Monday - Friday 6am - 5pm
                        </p>
      
                </div>
            </div>
            </div>

             
            </div>
            
        </div>
    )
}

export default Contacts
