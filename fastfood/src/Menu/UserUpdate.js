import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Css/UserUpdate.css';

const UserUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        id: "",
        userName: "",
        userContact: "",
        mailid: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
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
        let error = "";
        if (!value) {
            error = `Please enter ${name === 'mailid' ? 'email' : name}`;
        } else {
            if (name === 'mailid' && !validateEmail(value)) {
                error = 'Please enter a valid email address';
            }
            if (name === 'password' && !validatePassword(value)) {
                error = 'Password must be at least 6 characters long';
            }
        }
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(userData).forEach((key) => {
            validateField(key, userData[key]);
        });
        return newErrors;
    };

    const updateUser = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(errors).some((key) => errors[key])) {
            return;
        }

        axios.put(`http://localhost:8888/users/${id}`, userData).then(() => {
            window.alert("Record edited successfully");
            navigate('/AdminCtrlComp');
        }).catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        axios.get(`http://localhost:8888/users/${id}`).then((res) => {
            setUserData(res.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [id]);

    return (
        <div className="registration-container">
            <div className="form-container">
                <form onSubmit={updateUser}>
                    <label className="form-label">No:</label>
                    <input
                        type="text"
                        name="id"
                        onChange={inputChangeHandler}
                        onBlur={handleBlur}
                        value={userData.id}
                        className={`form-control ${errors.id ? 'is-invalid' : ''}`}
                    />
                    {errors.id && <div className="invalid-feedback">{errors.id}</div>}
                    
                    <label className="form-label">Enter Name:</label>
                    <input
                        type="text"
                        name="userName"
                        onChange={inputChangeHandler}
                        onBlur={handleBlur}
                        value={userData.userName}
                        className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                    />
                    {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                    
                    <label className="form-label">Enter Contact:</label>
                    <input
                        type="text"
                        name="userContact"
                        onChange={inputChangeHandler}
                        onBlur={handleBlur}
                        value={userData.userContact}
                        className={`form-control ${errors.userContact ? 'is-invalid' : ''}`}
                    />
                    {errors.userContact && <div className="invalid-feedback">{errors.userContact}</div>}
                    
                    <label className="form-label">Enter Email ID:</label>
                    <input
                        type="email"
                        name="mailid"
                        onChange={inputChangeHandler}
                        onBlur={handleBlur}
                        value={userData.mailid}
                        className={`form-control ${errors.mailid ? 'is-invalid' : ''}`}
                    />
                    {errors.mailid && <div className="invalid-feedback">{errors.mailid}</div>}
                    
                    <label className="form-label">Enter Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={inputChangeHandler}
                        onBlur={handleBlur}
                        value={userData.password}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    
                    <button type="submit" className="btn btn-outline-primary">Update</button>
                </form>
            </div>
            <div className="error-messages">
                {Object.values(errors).map((error, index) => (
                    error && <div key={index} className="error-message">{error}</div>
                ))}
            </div>
        </div>
    );
};

export default UserUpdate;
