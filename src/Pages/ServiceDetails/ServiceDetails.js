import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const navigate = useNavigate()
    const proceed = () => {
        navigate("/checkout")
    }
    return (
        <div>
            <h1>you booked {service.name}</h1>
            <div className='text-center'>

                <Button onClick={proceed}>Checkout Proceed</Button>
            </div>
        </div>
    );
};

export default ServiceDetails;