import React from 'react';
import useService from '../../hooks/useService';

const Manage = () => {
    const [services, setServices] = useService()
    const deleteService = id => {
        const proceed = window.confirm("are your sure you want to delete ?")
        if (proceed) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div>
            <h1>All services:</h1>
            <br />
            {services.map(service => <h2
                key={service._id}
            >
                {service.name} <button onClick={() => deleteService(service._id)}>X</button>
            </h2>)}

        </div>
    );
};

export default Manage;