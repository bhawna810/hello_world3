import React from 'react'
import { Logo } from '../assets'
import { useNavigate } from 'react-router-dom'

const DBLeftSection = () => {

    const navigate = useNavigate();
    
    function moveToHomePage(){
      console.log("inside the function ");
      navigate('/');
     }

  return (
    <div>
         <div className='alldivHorizAlign' style={{height : 'auto'}} >
              <img src={Logo} className='logo' alt='company logo' style={{ marginLeft: '30px' , cursor: 'pointer' }} onClick={moveToHomePage} />
              <p style={{ marginLeft: '10px' }}>City</p>
         </div>
         <div>
            <ul>
            <li
              style={{ padding: '8px 0', cursor: 'pointer',  height: 'auto' }}
              onClick={() =>navigate('/dashboard/dbhome')}
            >
              Home
            </li>
            <li
              style={{ padding: '8px 0', cursor: 'pointer', height: 'auto' }}
              onClick={() => navigate('/dashboard/items')}
            >
              Items
            </li>
            <li
              style={{ padding: '8px 0', cursor: 'pointer', height: 'auto' }}
              onClick={() => navigate('/dashboard/newItem')}
            >
              Add New Items
            </li>
            <li
              style={{ padding: '8px 0', cursor: 'pointer' , height: 'auto' }}
              onClick={() => console.log('Logout 2')}
            >
              Logout
            </li>
            </ul>
         </div>
    </div>
  )
}

export default DBLeftSection