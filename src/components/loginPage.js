import React, {useState} from 'react'
import {SESSION_URL} from '../constants'

function Login (props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            username,
            password
        }
        // console.log(data)
        // console.log(SESSION_URL)
        fetch(SESSION_URL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleChange = (e) => {
        switch (e.currentTarget.id) {
            case 'username':
                setUsername(e.currentTarget.value)
            break;
            case 'password':
                setPassword(e.currentTarget.value)
            break;
        
            default:
                break;
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'> Photos here</div>
                <div className='col-3'>
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
            </div>
        </div>
    )
}

export default Login
