import {Link} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import '../style.css'


function UserLogin(){


    const url = window.location.href;
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
    console.log(values.GroupID[0],"ID")

    const handleSubmit=(event)=>{
        
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email==="" && errors.password===""){
            axios.post("http://localhost:3311/loginUser",values) //sending request to web server through POST Request
            .then(res=>{
                 if(res.data==='Success' ){
                    axios.get("http://localhost:3311/getCL/"+values.GroupID[0])
                    .then(res=>{
                        console.log(res.data,"1st");
                        let CL=res.data[0].CL
                        axios.get("http://localhost:3311/getCLLEN/"+values.GroupID[0])
                        .then(res=>{
                           console.log(res.data,"2nd")
                            if(CL<=res.data.length){
                                console.log("In")
                                alert("cant login as number of users have exceeded concurrant license number , "+CL)
                            }
                            else{
                                navigate('/SidebarUser/'+values.email); //if successfully found user,login in 
    
                            }
                            
                        }).catch(err=>console.log(err));

                       

                    }).catch(err=>console.log(err));
                    
                } 
                if(res.data==='failed'){
                    alert("Account does not exist") 
                }
            }).catch(err=>console.log(err));
        }
    }
  useEffect(()=>{
    axios.get("http://localhost:3311/getCL/"+values.GroupID[0])
                    .then(res=>{
                        console.log(res.data,"1st");
                    }).catch(err=>console.log(err));

                    axios.get("http://localhost:3311/getCLLEN/"+values.GroupID[0])
                    .then(res=>{
                        console.log(res.data,"2st");
                    }).catch(err=>console.log(err));

  },[values.GroupID[0]])
   
   
    
    return(
        <div  className='d-flex justify-content-center align-items-center vh-100 UserPage '>
            <div className='p-3 rounded w-30 border loginForm '><h2>USER LOGIN</h2>  
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

export default UserLogin;