import React, {useState} from 'react'
import {SESSION_URL} from '../constants'

const loginPage = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(SESSION_URL)
        fetch(SESSION_URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        })
    }

    const handleChange = (e) => {
        debugger
    }

    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md align-self-center'>
                    <form onSubmit={submitHandler} >
                       <div className='form-group'>
                           <label htmlFor='username'>Username</label>
                           <input type='text' id='username' onChange={handleChange} className='form-control' placeholder='Please enter username' />
                       </div>
                       <div className='form-group'>
                           <label htmlFor='password'>Password</label>
                           <input type='password' id='password' onChange={handleChange} className='form-control' placeholder='Password' />
                       </div>
                        <button type='submit'className='btn btn-primary' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default loginPage
