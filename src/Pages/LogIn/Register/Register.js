import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    if (user) {

    }
    const handleSubmit = async (event) => {

        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        console.log(name)
        await updateProfile({ displayName: name });
        navigate('/')
    }
    return (
        <>
            <div className='form-container'>
                <h1 className='text-center text-primary my-3'>please Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="
                name" id="name" placeholder='your name' />
                    <input type="email" name="email" id="" placeholder='email' required />
                    <input type="password" name="password" id="" placeholder='password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Aceept terms and conditions</label>
                    <input disabled={!agree} className='bg-primary text-white border-0 mt-3' type="submit" value='REGISTER' />
                </form>
                <p className='my-3'>Already have an account? <Link to='/login' className='text-danger'>Log in</Link></p>
            </div>
            <div className='w-50 mx-auto'>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Register;