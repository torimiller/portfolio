import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-wrapper">
                <h1>Contact Page</h1>
                <p>Are you looking for a full stack developer? I'd love to chat. 
                    Send me a message at (email here) and let's connect.</p>
            </div>
        </div>  
    )
}

export default connect(null)(Contact);