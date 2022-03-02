import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className='form-container'>
            <form className='form-container-2'>
                <h1>Sign Up</h1>
                <div className='input-container'>
                    <label className='title'>Username</label>
                    <div>
                        <input className='username' type="text" placeholder='JohnDoe1234' required />
                    </div>
                </div>
                <div className='input-container'>
                    <label className='title'>Email</label>
                    <div>
                        <input className='email' type="email" placeholder='john.doe_1234@gmail.com' required />
                    </div>
                </div>
                <div className='input-container'>
                    <label className='title'>Password</label>
                    <div>
                        <input className='password' type="password" placeholder='Aa123456' required />
                    </div>
                </div>
                <div className='input-container'>
                    <label className='title'>Confirm Password</label>
                    <div>
                        <input className='confirm-password' type="password" placeholder='Aa123456' required />
                    </div>
                </div>
                <div className='sign-up-container'>
                    <button className='sign-up'>Sign up</button>
                </div>
                <p className='sign-up-bottom-text'>
                    <a href="/">
                        Already have an account? Login
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Signup;