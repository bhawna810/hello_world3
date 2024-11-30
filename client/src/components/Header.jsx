import React, { useState } from 'react'
import { Avatar, Logo } from '../assets'
import { Link , useNavigate} from 'react-router-dom';
import header from "../assets/css/header.css"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Dashboard } from '../containers';
// import { useNavigate } from 'react-router-dom';


const Header = () => {

   const [dropdownVal , setDropdownVal ] = useState(false);
   const navigate = useNavigate();

   const user = useSelector(state => state.user);
   console.log("userlogin" , user);

   function toggledropDown(){
       setDropdownVal(prev => !prev);
   }
   
   function navigateToLoginFunc(){
     navigate('/login');
   }

   return (
    <div className='firstTopDiv' >
        <div className='alldivHorizAlign' >
           {/* First Section (Logo and City Text) */}
           <div className='alldivHorizAlign' >
              <img src={Logo} className='logo' alt='company logo' style={{ marginLeft: '30px'}}  />
              <p style={{ marginLeft: '10px' }}>City</p>
           </div>

           {/* Second Section (Navigation and Cart/Login) */}
           <div className='alldivHorizAlign' style={{ marginLeft: 'auto' }}>
           {/* Links Section */}
              <div  className='alldivHorizAlign' style={{ marginRight: '20px' }}>
                 <div  className='commonstylemenu' >
                    <Link className='commonlinkstyle' >Home</Link>
                 </div>
                 <div className='commonstylemenu' >
                    <Link className='commonlinkstyle' >Menu</Link>
                 </div>
                 <div className='commonstylemenu' >
                    <Link className='commonlinkstyle' >Services</Link>
                 </div>
                <div  className='commonstylemenu' >
                    <Link className='commonlinkstyle' >AboutUs</Link>
                </div>
              </div>

              {/* Cart and Login Section */}
              <div className='alldivHorizAlign'>

                <FaShoppingCart />
                {
                      user ? (
                      <div style={{position : 'relative' }}>
                          <img src={user?.picture ? user.picture : Avatar} alt="login" style={{  marginRight: '50px',cursor: 'pointer', height : '30px'}} onClick={toggledropDown} />
                      </div>
                   ) : (
                     <button style={{ marginRight: "30px", height: "30px", width: "60px" , cursor: 'pointer' }} onClick={navigateToLoginFunc}>Login</button>
                   )
                }
              </div> 

              {/* Conditionally render the dropdown menu */}
      {dropdownVal && (
        <div
          style={{
            position: 'absolute',
            top: '100%', // Position dropdown below the image
            right: '100px', // Align to the right side of the image
            // marginTop: '7px',
            padding: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 1,
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li
              style={{ padding: '8px 0', cursor: 'pointer',  height: 'auto' }}
              onClick={() => navigate('/dashboard/dbhome')}
            >
              Dashboards
            </li>
            <li
              style={{ padding: '8px 0', cursor: 'pointer', height: 'auto' }}
              onClick={() => console.log('Go to Profile')}
            >
              Profile
            </li>
            <li
              style={{ padding: '8px 0', cursor: 'pointer' , height: 'auto' }}
              onClick={() => console.log('Logout')}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
            </div>
        </div>
    </div>
  )
}

export default Header