import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Link} from 'react-router-dom';
import {useNavigate,useParams} from 'react-router-dom';
import '../style.css'

function ViewUsers(){
    const[data,setData]=useState([])
    const[LOG,setLOG]=useState([])
    const[count,setCount]=useState([])
    const[total,setTotal]=useState([])
    const{ID}=useParams();
    //fetch values
    useEffect(()=>{
        axios.get('http://localhost:3311/viewusers/'+ID)
        .then(res=>
            { setCount(res.data.length);
            setData(res.data)}
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

        axios.get('http://localhost:3311/GETLOGIN/'+ID)
        .then(res=>
            { setLOG(res.data.length);
            }
        )
        //console.log(res.data))
        .catch(err=>console.log(err));




    },[])

    

    const handleDelete = async (Email) => { try { await axios.delete('http://localhost:3311/deleteUser/'+Email) 
    window.location.reload()}catch(err) {console.log(err);}}

    


    return(
        <div className='d-flex vh-100 bg-black justify-content-center align-items-center ProductPage'>
        <div className='bg-white p-3 rounded w-500'> 
            <h2  id="boxusers" style={{color:"white"}}><strong>USERS LIST</strong></h2>
            <h2>Maximum Number of Users : {total}</h2>
            <h2>Current Number of Users : {count}</h2>
            <h2>LOGGED IN USERS : {LOG}</h2>
            {count>=total?<h4 style={{ color: 'red' }}>EXCEEDED NUMBER OF USERS</h4>
								:<h4 style={{ color: 'green' }}>CAN CREATE ACCOUNT</h4>}
            {count>=total?<h4 style={{ color: 'red' }}>CANT CREATE</h4>
								:<Link to={`/createuser/${ID}`} className='btn btn-success'>Create</Link>}
            
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Designation</th>
                        <th>User Activity</th>
                        <th>Delete User</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((student,index)=>{
                        return <tr key={index}>
                            <td>{student.Name}</td>
                            <td>{student.Email}</td>
                            <td>{student.Mobile}</td>
                            <td>{student.Designation}</td>
                            <td>{student.ACTIVITY}</td>
                            <td>
                                
                                
                                
                                
                                <button  className='btn btn-danger ms-2'  onClick={ e => handleDelete(student.Email)} >Delete</button>{' '}
                                
                                
                                
                                
                        
                                
                            </td>
                        </tr>
                        
                    })}
                </tbody>
                
                
            </table>
            <Link to={`/SidebarEmployee/${ID}`} className='btn btn-primary me-2'>Back</Link>
        </div>
        
    </div>


    );


}

export default ViewUsers;