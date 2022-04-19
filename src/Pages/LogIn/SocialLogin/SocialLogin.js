import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle, useSignInWithMicrosoft } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (user || user1) {
        navigate('/')
    }
    let errorElement;
    if (error || error1) {

        errorElement = <div className='text-danger'>
            <p>
                {error?.message || error1?.message}
            </p>
        </div>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="w-50 bg-primary">
                </div>
                <p className='my-3'>OR</p>
                <div style={{ height: "1px" }} className="w-50 bg-primary">
                </div>

            </div>
            <div>
                {errorElement}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info d-flex align-items-center mb-3 w-100 justify-content-center'><img style={{ width: "30px" }} src={google} alt="" /><span className='ms-3'>Continue with google</span></button>
                <button className='btn btn-info d-flex align-items-center mb-3 w-100 justify-content-center'><img style={{ width: "30px" }} src={facebook} alt="" /><span className='ms-3'>Continue with facebook</span></button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info d-flex align-items-center mb-3 w-100 justify-content-center'><img style={{ width: "30px" }} src={github} alt="" /><span className='ms-3'>Continue with github</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;