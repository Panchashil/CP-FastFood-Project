import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/RegistrationComp.css'; // Import the CSS file

const RegistrationComp = () => {
    const nav = useNavigate();
    const [itemData, setItemData] = useState({
        userName: "",
        userContact: "",
        userId: "",
        userPass: ""
    });

    const [errors, setErrors] = useState({
        userName: "",
        userContact: "",
        userId: "",
        userPass: ""
    });

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setItemData({ ...itemData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validateField = (name, value) => {
        if (!value) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: `Please enter ${name.replace('user', '').toLowerCase()}`
            }));
        } else {
            if (name === 'userId' && !validateEmail(value)) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: 'Please enter a valid email address'
                }));
            }
            if (name === 'userPass' && !validatePassword(value)) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [name]: 'Password must be at least 6 characters long'
                }));
            }
        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    const addRecord = (event) => {
        event.preventDefault();
        let formIsValid = true;
        Object.keys(itemData).forEach(key => {
            if (!itemData[key]) {
                validateField(key, itemData[key]);
                formIsValid = false;
            }
        });
        if (formIsValid) {
            axios.post(`http://localhost:8888/users/`, itemData)
                .then((res) => {
                    window.alert(`${itemData.userName} Your Account Are Successfully Created`);
                    nav('/');
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={addRecord}>
                <label className='form-label'>Enter User Name:</label>
                <input type='text' name='userName' onChange={inputChangeHandler} onBlur={handleBlur} value={itemData.userName} className='form-control' />
                {errors.userName && <div className='error-message'>{errors.userName}</div>}
             
                <label className='form-label'>Enter Contact Number:</label>
                <input type='text' name='userContact' onChange={inputChangeHandler} onBlur={handleBlur} value={itemData.userContact} className='form-control' />
                {errors.userContact && <div className='error-message'>{errors.userContact}</div>}
            
                <label className='form-label'>Enter Email Id:</label>
                <input type='text' name='userId' onChange={inputChangeHandler} onBlur={handleBlur} value={itemData.userId} className='form-control' />
                {errors.userId && <div className='error-message'>{errors.userId}</div>}

                <label className='form-label'>Enter Password:</label>
                <input type='password' name='userPass' onChange={inputChangeHandler} onBlur={handleBlur} value={itemData.userPass} className='form-control' />
                {errors.userPass && <div className='error-message'>{errors.userPass}</div>}

                <Button variant='outlined' className='btn' type="submit">Create Account</Button>
            </form>
        </div>
    );
};

export default RegistrationComp;
