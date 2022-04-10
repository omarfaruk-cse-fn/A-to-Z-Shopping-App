import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }
    const handleCreatUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Password did not match')
            return
        }
        if (password < 6) {
            setError("Password mast be 6 or more then 6 character ")
            return
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h3 className='form-title'>Sign Up</h3>
                    <form onSubmit={handleCreatUser}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>
                            {error}
                        </p>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;