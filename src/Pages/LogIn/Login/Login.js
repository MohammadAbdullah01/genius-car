import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signInWithPopup } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef("");
    const passwordRef = useRef("");
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    if (error) {

        errorElement = <div className='text-danger'>
            <p>
                {error?.message}
            </p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleSubmit = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        event.preventDefault()
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast("reset email sent!");
        } else {
            toast("please enter your email")
        }
    }
    return (
        <>

            <Helmet>
                <title>login - genius car service</title>
            </Helmet>
            <ToastContainer />
            <div className='container w-50 mx-auto'>
                <h1 className='text-primary text-center my-4'>please login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {errorElement}
                <p className='my-3'>New at Genius Car? <Link style={{ textDecoration: "none" }} to='/register' className='text-primary'>Register Now</Link></p>
                <p
                    onClick={
                        resetPassword
                    }
                    className='my-3'>Forgot Password? <span style={{ cursor: "pointer" }} className='text-primary'>Reset Password</span></p>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Login;