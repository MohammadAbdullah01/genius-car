import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <Col sm={12} md={6} lg={4}>
            < div className='mx-auto w-100'>
                <img src={img} alt="" />
                <h2>{name}</h2>
            </div >
        </Col >
    );
};

export default Expert;