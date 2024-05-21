import {Link} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import '../style.css'

function EmailPasswordPage(){

    const [values,setValues]=useState({
        email:''
    })
    const navigate=useNavigate();
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put("http://localhost:3311/forgotpassword",values).then(res=>
            {console.log(res);
             navigate('/PasswordReset');}).catch(err=>console.log(err))}
    
    
    return (
        <div  className='d-flex justify-content-center align-items-center vh-100 PasswordPage1 '>
            <div className='p-3 rounded w-25 border loginForm'><h2>PASSWORD RESET</h2>  
            <form  id = "your_form" onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Enter Email</strong></label>
                    <input type="email" name="email" onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Receive Token</button>
                
            </form>
        </div>
        </div>
    );
}

export default EmailPasswordPage;