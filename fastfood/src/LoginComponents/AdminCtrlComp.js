import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/AdminCtrlComp.css';

const AdminCtrlComp = () => {
    const [itemData, setItemData] = useState([]);

    const [contactData,setContactData] = useState([]);

    useEffect(() => {
        fetchData();
        fetchContactData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8888/users')
            .then((res) => {
                setItemData(res.data);
            })
            .catch((error) => {
                console.error('There was an error fetching data!', error);
            });
    };

    const fetchContactData = () => {
        axios.get('http://localhost:8888/userContact')
            .then((res) => {
                setContactData(res.data);
            })
            .catch((error) => {
                console.error('There was an error fetching data!', error);
            });
    };




    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://localhost:8888/users/${id}`)
                .then(() => {
                    fetchData(); // Refresh data after deletion
                })
                .catch((error) => {
                    console.error('There was an error deleting the user!', error);
                });
        }
    };

    const handleUserContactDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://localhost:8888/userContact/${id}`)
                .then(() => {
                    fetchData(); // Refresh data after deletion
                })
                .catch((error) => {
                    console.error('There was an error deleting the user!', error);
                });
        }
    };

    return (
        <div className="admin-container">
            {sessionStorage.getItem("user") == "admin@gmail.com"
        ?
            <div>
                <h4>User Data Information</h4>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>MailID</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itemData.map((val, index) => (
                        <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.userName}</td>
                            <td>{val.userContact}</td>
                            <td>{val.userId}</td>
                            <td>{val.userPass}</td>
                            <td>
                                <Link to={`/UserUpdate/${val.id}`}>
                                    <IconButton aria-label="edit" size="small">
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </Link>
                                <IconButton
                                    aria-label="delete"
                                    size="small"
                                    onClick={() => handleDelete(val.id)}
                                >
                                    <Delete fontSize="small" />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br></br>
            <hr></hr>
            <br></br>
            <h3>Contact Page Information </h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Subject</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>MailID</th>
                        <th>Password</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contactData.map((val, index) => (
                        <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.subject}</td>
                            <td>{val.name}</td>
                            <td>{val.phone}</td>
                            <td>{val.email}</td>
                            <td>{val.message}</td>
                            <td>
                                <Link to={`/UserUpdate/${val.id}`}>
                                    <IconButton aria-label="edit" size="small">
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </Link>
                                <IconButton
                                    aria-label="delete"
                                    size="small"
                                    onClick={() => handleUserContactDelete(val.id)}
                                >
                                    <Delete fontSize="small" />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>




            </div> : <p></p>
}


        </div>
    );
};

export default AdminCtrlComp;
