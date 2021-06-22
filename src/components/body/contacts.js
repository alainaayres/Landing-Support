import React from 'react';
import './contacts.css';
import bootstrap from 'bootstrap';

function Contacts() {
    return (
        <div className='container' >
            <div className='row' >
                <div className='col' >
                    <h1>Corporate Sales Support</h1>
                    <p>
                        Tel: +1 (949) 855-3100<br />
                        Email: sales@prismsoftware.com
                    </p>
                </div>
                <div className='col' >
                    <h1>Technical Support</h1>
                    <p>
                        Tel: +1 (949) 855-3100 Ext. 1<br />
                        Email: support@prismsoftware.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contacts
