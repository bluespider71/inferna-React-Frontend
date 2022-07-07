import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showSnackBar } from '../../store/slices/snackbar.slice';
import { signinUser, setIsDone, generateOTP } from '../../store/slices/user.slice';
import "./login.css";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';

const defaultFormInput = {
    email: '',
    password: '',
    phone: '',
};

const LoginPage = (props) => {
    // const dispatch = useDispatch();
    const [containerClass, setContainerClass] = useState("");
    const public_url = process.env.PUBLIC_URL;

    const signUpHandler = (e) => {
        e.preventDefault();
        setContainerClass("right-panel-active");
    }

    const signInHandler = (e) => {
        console.log("signInHandler")
        e.preventDefault();
        setContainerClass("");
    }

    // const navigate = useNavigate();

    // const [formInput, setFormInput] = useState(defaultFormInput);

    // const { isApiDone, isOtpVerified, id } = useSelector((state) => state.user);

    // const snackbarObject = {
    //     type: '',
    //     message: '',
    //     open: false,
    // };

    // useEffect(() => {
    //     localStorage.removeItem('token'); // clears the current token if user comes to signin page
    // }, []);

    // useEffect(() => {
    //     if (isOtpVerified === false && isApiDone === true) {
    //         dispatchSnackBar('success', 'Otp successfully Sent to your Register Mobile Number', true);
    //         dispatch(setIsDone({ isApiDone: false }));
    //         dispatch(generateOTP());

    //         navigate('/verify');
    //     } else if (isOtpVerified) {
    //         navigate('/queue');
    //     }
    // }, [id]);

    // const handleInputChange = (name, value) => {
    //     setFormInput({
    //         ...formInput,
    //         [name]: value,
    //     });
    // };

    // const dispatchSnackBar = (type, message, open) => {
    //     snackbarObject.type = type;
    //     snackbarObject.message = message;
    //     snackbarObject.open = open;

    //     dispatch(showSnackBar(snackbarObject));
    // };

    // const handleLogin = (e) => {
    //     e.stopPropagation();
    //     const signinDataObject = {
    //         email: formInput.email,
    //         password: formInput.password,
    //     };

    //     if (signinDataObject.email === '' || signinDataObject.password === '') {
    //         dispatchSnackBar('error', 'Please fill in all the fields', true);
    //     } else {
    //         dispatch(signinUser(signinDataObject));
    //     }
    // };

    return (
        <>
            <div className={containerClass + " container"}>
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
                            <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
                            <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link to="#">Forgot your password?</Link>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <img className="logo-fimg" src={`${public_url}/logo.png`} alt='logo' />
                            <h1>Hey, Bro!</h1>
                            <p>Welcome to inferna. Prepare to start a rewarding adventure!</p>
                            <button className="ghost" onClick={signInHandler}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img className="logo-fimg" src={`${public_url}/logo.png`} alt='logo' />
                            <h1>INFERNA</h1>
                            <p>The gamified social media...</p>
                            <button className="ghost" onClick={signUpHandler}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <b> Follow us on </b>
                <div className="icons">
                    <Link to="https://www.instagram.com/inferna.io/" target="_blank" className="social"><i
                        className="fab fa-instagram"></i></Link>
                    <Link to="https://twitter.com/astroinferna" target="_blank" className="social"><i
                        className="fab fa-twitter-square"></i></Link>
                    <Link to="https://linkedin.com/company/astroinferna/" target="_blank" className="social"><i
                        className="fab fa-linkedin"></i></Link>
                    <Link to="https://www.instagram.com/inferna.io/" target="_blank" className="social"><i
                        className="fab fa-telegram"></i></Link>
                    <Link to="https://twitter.com/astroinferna" target="_blank" className="social"><i className="fab fa-discord"></i></Link>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
