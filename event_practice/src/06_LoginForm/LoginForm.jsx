import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

        if (validateEmail(e.target.value)) {
            setEmailError('');
        } else {
            setEmailError('Invalid email address');
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

        if(validatePassword(e.target.value)){
            setPasswordError('');
        }else{
            setPasswordError('Password must be at least 8 characters, and include uppercase, lowercase, number, and special character.');
        }
    }

    const loginUser = (e) => {
        e.preventDefault();
        if (validateEmail(email) && validatePassword(password)) {
            alert('Welcome To Er.DPM Life!');
            setEmail("");
            setPassword("");
            setEmailError('');
            setPasswordError('');
        } else {
            alert('Please enter a valid email and password.');
        }
    }

    return (
        <>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/> 
                    <Form.Label className='text-danger'>{emailError}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                    <Form.Label className='text-danger'>{passwordError}</Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default LoginForm;