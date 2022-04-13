import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
    }
    return (
        <div className='form-container'>
            <h1 className='text-center my-3'>please log in</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='your name' />
                <input type="email" name="email" id="" placeholder='email' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input type="submit" value='SUBMIT' />
            </form>
            <p className='my-3'>Already have an account? <Link to='/login' className='text-danger'>Log in</Link></p>
        </div>
    );
};

export default Register;