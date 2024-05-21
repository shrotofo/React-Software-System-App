import './Signup.css';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

function SidebarUser(){
    const{EMAIL}=useParams();
    

    const[student,setStudent]=useState([])
    const navigate=useNavigate();

    
    useEffect(()=>{
        axios.get('http://localhost:3311/readuser/'+EMAIL)
        .then(res=>{
            console.log(res.data)
            console.log(EMAIL)
    
        setStudent(res.data[0]);
    })
        .catch(err=>console.log(err))

    },[])
    useEffect(()=>{
        axios.put('http://localhost:3311/LOGINuser/'+EMAIL)
        .then(res=>{
    })
        .catch(err=>console.log(err))


    },[1])
     const LOGOUT=()=>{
        axios.put('http://localhost:3311/LOGOUTuser/'+EMAIL)
        .then(res=>
            { console.log(res)
            navigate('/UserLogin')}
        )
        //console.log(res.data))
        .catch(err=>console.log(err));
     }
   


    return(
        <div className='d-flex justify-content-center align-items-center loginPage vh-100'>
            <div  className='p-3 rounded w-80 border loginForm'><h1 align="center">Welcome {student.Name}  </h1>  
            
                <div className='mb-3'>
                    <button onClick={LOGOUT}>LOGOUT</button>
                    
                    


                    
                </div>
                
        </div>
        </div>



    );




}

export default SidebarUser;