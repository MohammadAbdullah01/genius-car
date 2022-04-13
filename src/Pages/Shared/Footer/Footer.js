import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='my-5'>
            <p className='text-center'> <small>all rights reserved. {year}</small></p>
        </div>
    );
};

export default Footer;