import React from 'react'
import Users from './features/users/Users'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetail from './UserDetail';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}/>
          <Route path='userDetail' element={<UserDetail />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App