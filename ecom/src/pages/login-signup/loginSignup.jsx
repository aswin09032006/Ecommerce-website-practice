import React, { useState } from 'react';
import './loginSignup.css';

const AuthForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleAuthMode = () => {
        setIsLoggedIn((prevMode) => !prevMode);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className='auth-page-container'>
            <div className='auth-container'>
                <div className="auth-header">
                    <h1>{isLoggedIn ? 'Welcome Back' : 'Create Your Account'}</h1>
                    <p>{isLoggedIn ? 'Enter your email and password to access your account' : 'Enter your details to create your account and get started'}</p>
                </div>
                <div className="auth-form">
                    <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                {!isLoggedIn && (
                                    <>
                                        <label className="form-label" htmlFor="firstname">First Name</label>
                                        <input className="form-input" type="text" id="firstname" name="firstname" required aria-label="First Name" />
                                        <label className="form-label" htmlFor="lastname">Last Name</label>
                                        <input className="form-input" type="text" id="lastname" name="lastname" required aria-label="Last Name" />
                                    </>
                                )}
                                <label className="form-label" htmlFor="userEmail">Email</label>
                                <input className="form-input" type="email" id="userEmail" name="email" required aria-label="Email" />
                                <label className="form-label" htmlFor="userPassword">Password</label>
                                <input className="form-input" type="password" id="userPassword" name="password" required aria-label="Password" />
                                <button type="submit">{isLoggedIn ? 'Sign In' : 'Sign Up'}</button>
                            </div>
                    </form>
                    <button onClick={toggleAuthMode} className="toggle-auth-mode" aria-label={isLoggedIn ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}>
                        {isLoggedIn ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
