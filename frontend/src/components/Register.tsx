import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Registered user:', userCredential.user);
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={register}>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email required'></input>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password required'></input>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;
