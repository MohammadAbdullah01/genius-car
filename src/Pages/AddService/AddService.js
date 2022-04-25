import { jsonEval } from '@firebase/util';
import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/service', {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(service => console.log(service))
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex flex-column'>
                    <input className='mb-2' placeholder='service name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='description' {...register("description")} />
                    <input type="number" className='mb-2' placeholder='price' {...register("price")} />
                    <input type="text" className='mb-2' placeholder='photo url' {...register("img")} />
                    <input type="submit" placeholder='add service' />
                </div>
            </form>
        </div >
    );
};

export default AddService;