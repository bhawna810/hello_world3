import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUserInfo } from '../context/actions/userActions';
import { useNavigate } from 'react-router-dom'

const DBHeader = () => {

  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutfunc = () => {

    signOut(auth)
    .then(() => {
      dispatch(clearUserInfo()); // Clear user info from Redux
      navigate('/');
      console.log("User successfully logged out");
    })
    .catch((error) => {
      console.error("Error while logging out:", error);
    });

  }

  return (
    <div style={{height : 'auto'}}>
      welcome to city
      <button onClick={logoutfunc}>Logout</button>
    </div>
  )
}

export default DBHeader