import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    //const navigate = useNavigate()

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddress = event => {
        setAddress(event.target.value)
    }
    const handlePhoneNumber = event => {
        setPhone(event.target.value)
    }
    const handleCreatUser = event => {
        event.preventDefault()
        const shipping = { name, email, address, phone }
        console.log(shipping)
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h3 className='form-title'>Shipping information</h3>
                    <form onSubmit={handleCreatUser}>
                        <div className='input-group'>
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleNameBlur} type="text" name="name" id="" required />

                        </div>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" name="email" id="" required />

                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddress} type="text" name="address" id="" required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="phone">Phone Number</label>
                            <input onBlur={handlePhoneNumber} type="text" name="phone-number" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>
                            {error}
                        </p>
                        <input className='form-submit' type="submit" value="Add Shipping" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Shipment;