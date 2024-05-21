import '../Signup.css';
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';




function Lkey() {

    const{ID}=useParams();

    const[student,setStudent]=useState([])
    const navigate=useNavigate();

    
    useEffect(()=>{
        axios.get('http://localhost:3311/read/'+ID)
        .then(res=>{
            console.log(res)
            console.log(res.data)
        setStudent(res.data[0]);
    })
        .catch(err=>console.log(err))

    },[])

    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate(`/SidebarEmployee/${ID}`)
    }


    return(
        <div className='d-flex justify-content-center align-items-center loginPage vh-100'>
            <div  className='p-3 rounded w-80 border loginForm'><h1 align="center"><u> LICENSE KEY</u></h1>  
            <form  id = "your_form" onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <h3>{student.Lkey}</h3>
                    


                    
                </div>
                
                <button type="submit" className='btn btn-success w-100 rounded-0'> Go Back Home Page</button>
                
            </form>
        </div>
        </div>



    );






}

export default Lkey;

