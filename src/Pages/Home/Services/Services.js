import React, { useEffect, useState } from 'react';
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:5000/service")
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    const [services, setServices] = useService()
    return (
        <div id='services'>
            <h1 className='text-center text-primary my-3'>services</h1>
            <div className="services">
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;