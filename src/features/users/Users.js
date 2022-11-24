import React,{useState, useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUserById } from './usersSlice'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const Users = () => {
  const [onLogin, setOnLogin ] = useState(false);
  const navigate = useNavigate();
    const[data, setData] = useState('')
    const[userData, setUserData] = useState([])
    const onDataChange = (e)=>{
        setData(e.target.value)
    }
    const fetchUserData = async(name)=>{
      await axios.get(`https://api.github.com/users/${name}`).then((response)=>{
        setUserData(response.data);
        console.log('succes', response.data);
        setOnLogin(false)
        if(response.status === 200){
          setOnLogin(false);
          navigate('/userDetail')
          localStorage.setItem('data', JSON.stringify(response.data ));
        }
      }).catch((error)=>{
        setOnLogin(true)
        console.log('error', error);
      })
    }

  return (
    <div className='container'>
      {onLogin === true && <div className='jumbotron'>
      <div className="alert alert-danger" role="alert">
        Your Account does'nt exist
      </div>

      </div>}
      <div className="form-group" my10>
    <input type="text" className="form-control" style={{marginTop:50}} value={data}  onChange={onDataChange}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your github credentials"/>
  </div>
  <div>
    <button onClick={()=>{
      fetchUserData(data)
      console.log('on login', onLogin);
    }} className='btn btn-primary'>Login</button>
  </div>
    </div>
  )
}

export default Users