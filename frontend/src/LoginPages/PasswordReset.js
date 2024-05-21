import {Link} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import '../style.css'

function PasswordReset(){

    const [values,setValues]=useState({
        email:'',
        PToken:'',
        Password:''
    })
    const navigate=useNavigate();
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put("http://localhost:3311/resetpassword",values).then(res=>{
            axios.post("http://localhost:3311/checkToken",values).then(res=>{
                if(res.data==='Success')
                {navigate('/loginEmployee');} 
                else{ alert("Invalid Token");}
            }).catch(err=> {console.log(err)})
    }).catch(err=> {console.log(err)})
    }
    
    
    return (
        <div  className='d-flex justify-content-center align-items-center vh-100 PasswordPage '>
            <div className='p-3 rounded w-25 border loginForm'><h2>PASSWORD RESET</h2>  
            <form  id = "your_form" onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Enter Email</strong></label>
                    <input type="email" name="email" onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Password"><strong>Enter New Password</strong></label>
                    <input type="Password" name="Password" onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Email"><strong>Enter Token sent in Email</strong></label>
                    <input type="PToken" name="PToken" onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Reset Password</button>
                
            </form>
        </div>
        </div>
    );
}

export default PasswordReset;