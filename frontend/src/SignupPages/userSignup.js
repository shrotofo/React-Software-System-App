import React,{useState,useEffect} from 'react';
import axios from "axios"
import {useNavigate,useParams,Link} from 'react-router-dom';
import '../style.css'


function UserSignup(){
    const{ID}=useParams();
    const[count,setCount]=useState([])
    const[total,setTotal]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3311/viewusers/'+ID)
        .then(res=>
            { setCount(res.data.length);}
        )
        //console.log(res.data))
        .catch(err=>console.log(err));

        axios.get('http://localhost:3311/checkusers/'+ID)
        .then(res=>
            { setTotal(res.data[0].Users);
            }
        )
        //console.log(res.data))
        .catch(err=>console.log(err));




    },[])
    const [values, setValues] = useState({email: '', password: '',Name:'',Designation:'',MobileNumber:''})
    

    
    const navigate=useNavigate();


    const handleSubmit = (event) => { event.preventDefault(); 
        

                    axios.post('http://localhost:3311/createuser/'+ID, values) //url-path which we sending request (sending request to web server)
                    .then(res => { console.log(res);
                       navigate('/')}) 
                    .catch(err => console.log(err));
                
            }
            return(
                <div className='d-flex vh-100 UserPage justify-content-center align-items-center'> 
                <div  className='p-3 rounded w-25 border loginForm'><h2> USER SIGNUP</h2> 
                
        
            <form onSubmit={handleSubmit}  >
                <h2>max number of users: {total}</h2>
                <h2>current users: {count}</h2>
        <div className='mb-2'>
            <label htmlFor=""><strong>Email</strong></label>
            <input type="email" name="email" onChange={e=>setValues({...values,email:e.target.value})} value={values.email} className='form-control rounded-0'/>
        </div>
        <div className='mb-2'>
            <label htmlFor=""><strong>Password</strong></label>
            <input type="password" name="password" onChange={e=>setValues({...values,password:e.target.value})} value={values.password} className='form-control rounded-0' />
        </div>
        
        
        
        <div className='mb-2'>
            <label htmlFor=""><strong>Name</strong></label>
            <input type="Name" name="Name" onChange={e=>setValues({...values,Name:e.target.value})} value={values.Name} className='form-control rounded-0' />
        </div>

        <div className='mb-2'>
            <label htmlFor=""><strong>Designation</strong></label>
            <input type="Designation" name="Designation" onChange={e=>setValues({...values,Designation:e.target.value})} value={values.Designation} className='form-control rounded-0' />
        </div>
        <div className='mb-2'>
            <label htmlFor=""><strong>MobileNumber</strong></label>
            <input type="MobileNumber" name="MobileNumber" onChange={e=>setValues({...values,MobileNumber:e.target.value})} value={values.MobileNumber} className='form-control rounded-0' />
        </div>
        {count>=total?<h4 style={{ color: 'red' }}>EXCEEDED NUMBER OF USERS</h4>
								:<h4 style={{ color: 'green' }}>CAN CREATE ACCOUNT</h4>}

        {count>=total?<h4 style={{ color: 'red' }}>CANT CREATE</h4>
								:<button type="submit" className='btn btn-success w-100 rounded-0'  >Create</button>}

<Link to ="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>BACK</Link>
        
        
        </form>
        </div>
        </div>
            );

}

export default UserSignup;
