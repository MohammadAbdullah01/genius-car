import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service
    const navigate = useNavigate()
    const handleNavigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={() => handleNavigateToServiceDetails(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;