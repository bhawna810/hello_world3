import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Main } from './containers';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/*' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        {/* <Route path='/dashboard' element = {<Dashboard/>}></Route> */}
        <Route path='/dashboard/*' element={<Dashboard />}>
        {/* Nested route under /dashboard */}
        {/* <Route path='dbnewItem' element={<DBRightSection />} /> */}
      </Route>
      </Routes>

    </div>
  )
}

export default App;