import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <h3>Are you sure want to delete this item?</h3>
        <div>
            <button className='btn btn-primary' style={{marginTop:'30px', marginRight:'20px'}}>yes</button>
            <button className='btn btn-primary'>No</button>
        </div>
    </div>
  )
}

export default Modal