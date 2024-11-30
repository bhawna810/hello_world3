import React, { useEffect, useState } from 'react'
// import { login } from '../assets';
import { Logo } from '../assets';
import {LoginInput} from '../components';
import {} from "../components/index";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../config/firebase.config';
import { validateTokenFunc } from '../api/index'
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, getUserInfo } from '../context/actions/userActions';

const Login = () => {

    const [isSignup , setIsSignUp] = useState(true);
    const [emailVal , setEmailVal ] = useState('');
    const [passwordVal , setpasswordVal ] = useState('');
    const [ confirmPasswordVal , setconfirmPasswordVal ] = useState('');

    // const usr = useSelector(getUserInfo);
    const user = useSelector(state => state.payload)

    useEffect(() => {
      if(user){
          // navigate('/');
          console.log("userhdwehjdb" , user)
      }
      // usr = useSelector(state => state.getUserInfo)
    }, [user]);

    const navigate = useNavigate();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const dispatch = useDispatch();

    const setInputValue1Func = (val) => {
      setEmailVal(val);
       console.log("inputValue1" ,emailVal);
    }

    const setInputValue2Func = (val) => {
      setpasswordVal(val);
      console.log("inputValue2" , passwordVal);
    }

    const setInputValue3Func = (val) => {
      setconfirmPasswordVal(val);
      console.log("inputValue3" ,confirmPasswordVal);
    }

    const isSignupToggle = () =>{
      setIsSignUp(!isSignup);
    }

    const signUpFunc = () => {
      
      createUserWithEmailAndPassword(auth , emailVal, passwordVal)
      .then((result) => {

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            user.getIdToken().then((idToken) => {

              validateTokenFunc(idToken).then((data) => {

                 navigate("/")

                 console.log("ID Token:", data);

                 const userData = {
                  name: data.name,
                  email: data.email,
                  picture: data.picture,
                  uid: data.uid,
                };
            
                 // Dispatch the data to Redux
                 dispatch(setUserInfo(userData));
                 console.log("Hellllllllllllllllllllllllll ");
              })
              // You can send this token to your backend for further validation or requests
            });
          } else {
            // No user is signed in
            console.log("User is not signed in");
          }
        });
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error.code, error.message);
      });
        
    }

    const signInFunc = () => {
      signInWithEmailAndPassword(auth,  emailVal, passwordVal)
      .then((result) => {

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            user.getIdToken().then((idToken) => {

              validateTokenFunc(idToken).then((data) => {

                 navigate("/")

                 console.log("ID Token:", data);

                 const userData = {
                  name: data.name,
                  email: data.email,
                  picture: data.picture,
                  uid: data.uid,
                };
            
                 // Dispatch the data to Redux
                 dispatch(setUserInfo(userData));
                 console.log("Hellllllllllllllllllllllllll ");
              })
              // You can send this token to your backend for further validation or requests
            });
          } else {
            // No user is signed in
            console.log("User is not signed in");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

    const loginFunc = () => {
      isSignup ? signUpFunc(): signInFunc() ;
    }

    const signInGoogleFunc = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
        
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            user.getIdToken().then((idToken) => {

              validateTokenFunc(idToken).then((data) => {

                 navigate("/")

                 console.log("ID Token:", data);

                 const userData = {
                  name: data.name,
                  email: data.email,
                  picture: data.picture,
                  uid: data.uid,
                };
            
                 // Dispatch the data to Redux
                 dispatch(setUserInfo(userData));
                 console.log("Hellllllllllllllllllllllllll ");
              })
              // You can send this token to your backend for further validation or requests
            });
          } else {
            // No user is signed in
            console.log("User is not signed in");
          }
        });
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error.code, error.message);
      });
    }

    function moveToHomePage(){
      console.log("inside the function ");
      navigate('/');
     }

  return (
    <div className='main_div' 
    style={{maxHeight: '100%'}}
    >
          <div className='second_div'>
            <div className='third_div'>
               
                <img src={Logo} className='logo' alt='company logo'  style={{ marginLeft: '30px' , cursor: 'pointer' }} onClick={moveToHomePage} />
                <span>City</span>
                <h2 className='heading1'>Welcome Back</h2>
                {isSignup ? <p className='para1'> Sign Up with following </p>  : <p className='para1'>Sign In with the following</p> }

                <div className='fourth_div'>
                  <LoginInput 
                    //value = {inputValue1}
                    onClickFunc = {setInputValue1Func}
                    placeholder={'Email Here'}
                    icon = {<FaEnvelope/>} 
                    inputValue={emailVal} 
                    className ='logininput1'
                    //onClick = {setInputValue1}
                  />
                  <LoginInput 
                    placeholder={'password Here'} 
                    icon = {<FaEnvelope/>} 
                    inputValue={passwordVal} 
                    className ='logininput2'
                    onClickFunc = {setInputValue2Func}
                  />

                  {isSignup ?
                    <LoginInput 
                       placeholder={'Confirm password Here'}
                       icon = {<FaEnvelope/>} 
                       inputValue={confirmPasswordVal} 
                       className ='logininput2'
                       onClickFunc = {setInputValue3Func}
                    /> :
                   null }
                   <button onClick={loginFunc}>Login</button>
                  {isSignup ? 
                    <div>
                      <p>Already have an account: </p>
                      <p > Sign-in here</p>
                    </div> :
                    <div>
                       <p>Doesn't have an account:</p>
                       <p >Create one</p> 
                    </div> }
                    {isSignup ? 
                        <button onClick={isSignupToggle}>Sign In</button>
                       :
                       <button onClick={isSignupToggle}>Sign Up</button>
                    }
                  <button onClick={signInGoogleFunc}><FaEnvelope></FaEnvelope>Signin with Google</button>
                </div>
            </div>   
         </div>
    </div>
  )
}

export default Login