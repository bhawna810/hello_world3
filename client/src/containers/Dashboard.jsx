import React from 'react'
import DBLeftSection from '../components/DBLeftSection'
import DBRightSection from '../components/DBRightSection'

const Dashboard = () => {
    console.log("inside the dashboad page");
  return (
    <div style={{display : 'flex'}}>
        <DBLeftSection/>
        <DBRightSection/>
    </div>
  )
}

export default Dashboard