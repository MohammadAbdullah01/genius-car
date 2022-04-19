import React, { Children } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const location = useLocation()
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user?.emailVerified) {
        return <div>
            <h1>Please verify your email before entering</h1>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;