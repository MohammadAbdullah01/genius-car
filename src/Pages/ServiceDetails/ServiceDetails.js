import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const navigate = useNavigate()
    const { serviceId } = useParams()
    const proceed = () => {
        navigate("/checkout")
    }
    return (
        <div>
            <h1>service id {serviceId}</h1>
            <div className='text-center'>

                <Button onClick={proceed}>Checkout Proceed</Button>
            </div>
        </div>
    );
};

export default ServiceDetails;