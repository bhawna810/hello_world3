import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DBNewItem from './DBNewItem';
import DBHome from './DBHome';
import DBItems from './DBItems';

const DBRightSection = () => {
  return (
    <div>
         <Routes>
           <Route path='/newItem' element={<DBNewItem/>}></Route>
           <Route path='/dbhome' element={<DBHome/>}></Route> 
           <Route path='/items' element={<DBItems/>}></Route> 
        </Routes>
        {/* jnjednjjk3nedjke3njdnedikejie */}
    </div>
  )
}

export default DBRightSection