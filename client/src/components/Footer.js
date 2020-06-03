import React from 'react';
import { connect } from 'react-redux';

const Footer = () => {
    return (
        <div className="footer">
        <h1>Footer</h1>
        <ul>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
        </ul>
        </div>
    )
}

export default connect(null)(Footer);