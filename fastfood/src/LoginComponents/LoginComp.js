import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/LoginComp.css'; // Import your CSS file
import { AppContext } from '../Menu/AppContext';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

const LoginComp = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { status,setStatus } = useContext(AppContext); // Assuming addToCart function is available in context

useEffect(()=>{
sessionStorage.clear()
setStatus(false)
},[])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let email = data.get('email');
        let password = data.get('password');

        if (!email) {
            setEmailError('Email is required');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }

        if (email && password) {
            axios.get("http://localhost:8888/users").then((res) => {
                let userData = res.data;
                const data = userData.filter((val) => val.userId === email && val.userPass === password);

                if (data.length > 0) {
                    navigate("/mydashboard");
                    sessionStorage.setItem("user", email);
                    console.log(data)
                    sessionStorage.setItem("userId",data[0].id)
                } else {
                    window.alert("Wrong credentials entered");
                    email = "";
                    password = "";
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    };
    const handleEmailBlur = (event) => {

        if (event.target.value.trim() === "") {
            setEmailError("Email is required")
            
        }
        if (!event.target.value.trim().match('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) {
            setEmailError("Email eg : abc@gmail.com ")
           
        }
        else {
            setEmailError('');
        }
    };

    const handlePasswordBlur = (event) => {
        if (!event.target.value.trim() === "") {
            setPasswordError('Password is required');
        }
        if (!event.target.value.trim().match('^(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*])[a-z0-9@#$%^&*]{5,15}$')) {
            setPasswordError("Password Must contain (a-z) (@#$%^&*) (0-9) min-5 max-15")
          
        }
        else {
            setPasswordError('');
        }
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" className="login-container">
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    className="login-paper"
                >
                    <Box
                        className="login-form"
                    >
                        <Avatar className="login-avatar">
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onBlur={handleEmailBlur}
                                error={!!emailError}
                                helperText={emailError}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onBlur={handlePasswordBlur}
                                error={!!passwordError}
                                helperText={passwordError}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {/* <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link> */}
                                </Grid>
                                <Grid item>
                                    <Link href="Registration" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default LoginComp;
