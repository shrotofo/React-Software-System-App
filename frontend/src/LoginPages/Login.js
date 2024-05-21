import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import {useNavigate,useParams,useMousePosition} from 'react-router-dom';
import '../style.css'
import '../Signup.css';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBSelect,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  
  
function Login(){
    
    const [values,setValues]=useState({
        email:'',
        password:""
    })
    
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }


   


    const handleSubmit=(event)=>{
        event.preventDefault();
        
        

      


        setErrors(Validation(values));
        if (errors.email==="" && errors.password===""){
            axios.post("http://localhost:3311/loginAdmin",values) //sending request to web server
            .then(res=>{
                //console.log(res);
                //console.log(errors);
                if(res.data==='Success'){
                    //navigate('/')
                    navigate('/Sidebar');
                } else{
                    alert("no record");
                }
            })
            .catch(err=>console.log(err));

        }
    }
    
       
    //taskkill /f /im node.exe
    
    
    return (
        <div className='d-flex justify-content-center align-items-center loginPage vh-100'>
            <div  className='p-3 rounded w-25 border loginForm'><h2> ADMIN LOGIN</h2>  
            <form  id = "your_form" onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label className='text-edit' htmlFor="email"><strong>Email</strong></label>
                    <input type="email" name="email" onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" name="password" onChange={handleInput} className='form-control rounded-0' />
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                
            </form>
        </div>
        </div>
    );
}

export default Login;