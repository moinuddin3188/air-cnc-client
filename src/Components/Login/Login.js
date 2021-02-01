import React, { useContext, useEffect } from 'react';
import './Login.css';
import google from '../../images/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../Firebase/Firebase';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                setUserInfo({ ...userInfo, email: user.email, photo: user.photoURL, name: user.displayName });
                getToken();
                history.replace(from);
            }).catch(error => {
                
            });
    }

    const getToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // Send token to your backend via HTTPS
            Cookies.set('token', idToken)
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div className='login-container'>
            <div className='d-flex justify-content-center'>
                <div className='login'>
                    <h6 className='text-center mb-3'>Log in</h6>
                    <div
                        onClick={handleLogin}
                        className='google-login d-flex'
                    >
                        <div style={{ width: '50px' }} className='border-right pr-2'>
                            <img width="100%" src={google} alt="" />
                        </div>
                        <div className='d-flex align-items-center pl-2'>
                            <p>Login with google</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="bg w-100 mt-3 py-3 text-white"
                        style={{ borderRadius: '10px' }}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;