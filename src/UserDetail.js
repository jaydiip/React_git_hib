import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserDetail = () => {
  const navigate = useNavigate();
  const userObj = JSON.parse(localStorage.getItem('data'))
  return (
    <div className='container'>
        <div className="alert alert-primary" role="alert">
          welcome {userObj.name ? userObj.name : 'user'}
        </div>
        <div className='container'>
        <ul className="list-group">
        <li className="list-group-item">name: {userObj.name}</li>
        <li className="list-group-item">My Repos: {userObj.repos_url}</li>
        { userObj.company !== null && <li className="list-group-item">Company: { userObj.company}</li>}
        <li className="list-group-item">Total Followers: {userObj.followers}</li>
{     userObj.email !== null &&   <li className="list-group-item">Email: {userObj.email }</li>
}        <li className="list-group-item">My location: {userObj.location != null && userObj.location}</li>

      </ul>
        </div>
        <div className='container'>
          <button className='btn btn-primary' onClick={()=>{
            navigate('/')
          }} style={{justifyContent:'center', display:'flex', alignItems:'center'}}>logout</button>
        </div>
        </div>
  
  )
}

export default UserDetail