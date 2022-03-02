import React from 'react';

const Login = () => {
    return (
        <div className='form-container'>
            <form className='form-container-2'>
                <h1>Log In</h1>

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

                <div className='sign-up-container'>
                    <button className='sign-up'>Log in</button>
                </div>
                <p className='sign-up-bottom-text'>
                    <a href="/">
                        Don't have an account? Sign-up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;