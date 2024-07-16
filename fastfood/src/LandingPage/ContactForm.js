// Import necessary packages
import React, { useState } from 'react';
import '../Css/ContactForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ContactForm component
const ContactForm = () => {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', formData);
  };

  const alertmsg = (event) =>{
    if(window.confirm("Are you sure logout")){
        sessionStorage.clear();
        
    }
  }

  const addRecord =(event) =>{
    event.preventDefault();
    axios.post(`http://localhost:8888/userContact/`,formData).then((res) => {
        window.alert(" Your Query is send sucessfully  ")
        nav('/landingpage')
    }).catch((error) => {})
}



  return (

    <div>
       <nav className="navbar navbar-expand-md bg-light p-3 shadow-sm">
      <div className="container-fluid">
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-3">
          <b > Welcome  {sessionStorage.getItem("user")} </b>
            <a href="landingpage" className="nav-link text-dark text-decoration-none">Home</a>
            <a href="about" className="nav-link text-dark text-decoration-none">About Us</a>
            <a href="MenuContainer" className="nav-link text-dark text-decoration-none">Menu</a>
            <a href="contact" className="nav-link text-dark text-decoration-none">Contact</a>
            {!!sessionStorage.getItem("user") 
        ?
            <a onClick={alertmsg} href="logincomp" className="btn btn-danger" >Signout</a>:
            <a href="logincomp" className="btn btn-warning text-white">Signin</a>
}
          </div>
        </div>
      </div>
    </nav>




    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <h3>LET'S TALK ABOUT WHAT WE CAN MAKE, BUILD, SCALE TOGETHER</h3>
        <p className="contact-detail">
          <i className="fas fa-phone-alt"></i> +91 044 965 9700
        </p>
        <p className="contact-detail">
          <i className="fas fa-envelope"></i> fastfood@gmail.com
        </p>
        <p className="contact-detail">
          <i className="fas fa-map-marker-alt"></i> 55,sipcot ,south madras
          <br />
          Navalur
          <br />
          Chennai
        </p>
        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-skype"></i>
        </div>
      </div>

      <form className="contact-form" onSubmit={addRecord}>
        <div className="form-group">
          <label>Select Subject *</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
          </select>
        </div>

        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

      

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
