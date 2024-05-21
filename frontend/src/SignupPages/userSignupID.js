import React,{useState} from 'react';
import axios from "axios"
import {useNavigate,useParams} from 'react-router-dom';
import '../style.css'


function UserSignupID(){
    const [values, setValues] = useState({GroupID:''})
    
    

    
    const navigate=useNavigate();


    const handleSubmit = (event) => { event.preventDefault(); 
        axios.post("http://localhost:3311/IDExist",values) //sending request to web server
            .then(res=>{
                //console.log(res);
                //console.log(errors);
                if(res.data==='Success' ){
                    //navigate('/')
                    navigate('/userSignup/'+values.GroupID);
                
                } 
            
                if(res.data==='failed'){
                    alert("ID doesnt exist")
                }
            }
            )
            .catch(err=>console.log(err));

            }
            return(
                <div className='d-flex vh-100 UserPage justify-content-center align-items-center'> 
                <div  className='p-3 rounded w-25 border loginForm'><h2> enter GROUPID</h2> 
        
            <form onSubmit={handleSubmit}  >
        
        
        
        
        
       

        <div className='mb-2'>
            <label htmlFor=""><strong>GroupID</strong></label>
            <input type="GroupID" name="GroupID" onChange={e=>setValues({GroupID:e.target.value})} value={values.GroupID} className='form-control rounded-0' />
        </div>

       
        
        <button type="submit" className='btn btn-success w-100 rounded-0'  >Create</button>
        </form>
        </div>
        </div>
            );

}

export default UserSignupID;
