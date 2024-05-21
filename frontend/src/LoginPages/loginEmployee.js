
import {Link} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import '../style.css'
function LoginEmployee(){
    const[LOG,setLOG]=useState()
    

   
    
    const [values,setValues]=useState({
        email:'',
        password:"",
        GroupID:""
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
            axios.post("http://localhost:3311/loginEmployee",values) //sending request to web server
        
            .then(res=>{
               
                if(res.data==='Success'){
                    axios.get('http://localhost:3311/getLOGIN')
        .then(res=>{
            
			const len=res.data.length
            if (len<2){
                navigate('/SidebarEmployee/'+values.GroupID);}
            else{
                alert("exceeded")
            }
          })
        .catch(err=>console.log(err))
                    
                    
                
                } 
                
            
                if(res.data==='failed'){
                    alert("account doesnt exist")
                }
            }
            )
            .catch(err=>console.log(err));

        }
    }
   
    useEffect(()=>{
        axios.get('http://localhost:3311/getLOGIN')
        .then(res=>{
            console.log(res.data,"ABC")
			setLOG(res.data.length)
          
    })
        .catch(err=>console.log(err))
    })
    
       
    //taskkill /f /im node.exe
    
    
    return (
        <div  className='d-flex justify-content-center align-items-center vh-100 GroupPage '>
            <div className='p-3 rounded w-25 border loginForm'><h2>CLIENT LOGIN ---LOGGED USERS {LOG}</h2>  
            <form  id = "your_form" onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" name="email" onChange={handleInput}  className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" name="password" onChange={handleInput} className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="GroupID"><strong>GroupID</strong></label>
                    <input type="GroupID" name="GroupID" onChange={handleInput} className='form-control rounded-0' />
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                <Link to="/EmailPasswordPage" >Forget Password? Click here</Link>
                
            </form>
        </div>
        </div>
    );
}

export default LoginEmployee;