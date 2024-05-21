import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import CryptoJS from "crypto-js";
import '../style.css'


function Home(){
    //store the recent values 
    const[data,setData]=useState([])
    
    //fetch values
    useEffect(()=>{
        axios.get('http://localhost:3311/homeAdmin')
        .then(res=>
            {console.log(res.data);
            setData(res.data)}
        )
        //console.log(res.data))
        .catch(err=>console.log(err));
    },[])

    const handleDelete = async (ID) => { try { await axios.delete('http://localhost:3311/delete/'+ID) 
    window.location.reload()}catch(err) {console.log(err);}}

  

  

    
    const emailsend=(ID,Name,Email)=>{
    axios.put('http://localhost:3311/Emailsent/'+ID)
    .then(res=>{
        window.location.reload();
        alert("email sent");
        axios.post('http://localhost:3311/emailsend',{ID:ID,Name:Name,Email:Email}).then(res=>{
            
        }).catch(err=>console.log(err));
    //console.log(res.data);
    
}).catch(err=>console.log(err));
    
  }
  






    

    

    return (

        

        <div className='d-flex vh-100 bg-black justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded w-500'> 
                <h1 id="box" style={{color:"white"}}><strong>CLIENT LIST</strong></h1>
                <Link to="/Create" className='btn btn-success'>Create</Link>
                <table  class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Mobile</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>View Bill</th>
                            <th>License Key</th>
                            <th>Email Send</th>
                            <th>Activity</th>
                            <th>Delete Account</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student,index)=>{
                            return <tr key={index}>
                                <td>{student.ContactPerson}</td>
                                <td>{student.Email}</td>
                                <td>{student.GroupID}</td>
                                <td>{student.MobileNumber}</td>
                                <td>{student.Country}</td>
                                <td>{student.Status}</td>
                                <td>
                                <Link to={`/edit/${student.GroupID}`} id='button1' className='btn btn-secondary me-2'>Edit</Link>{' '}
                                 </td>
                                <td>
                                <Link to={`/TotalBill/${student.GroupID}`} id='button1'className='btn btn-secondary me-2'>View Bill</Link>{' '}
                                </td>
                                <td>
                                {student.Lkey===null?<div id='button1' className='btn btn-secondary me-2'>Encypyt</div>:<Link to={`/Encrypt/${student.GroupID}`} id='button1' className='btn btn-secondary me-2'>Decrypted</Link>}{' '}
                                </td>
                                <td>
                                <button className='btn btn-secondary me-2' id='button1' onClick={ e => emailsend(student.GroupID,student.ContactPerson,student.Email)} >{ student.Emailsent===null?<h6 style={{ color: 'red' }} id='button1'>NOT SENT</h6>
								:<h6  id='button1'>SENT</h6>}</button>{' '}
                                </td>
                                <td>
                                    {student.ACTIVITY}
                                </td>
                                <td>
                                <button id='button1' className='btn btn-danger ms-2'  onClick={ e => handleDelete(student.GroupID)} >Delete</button>{' '}
                                 </td>
                                

                                    
                                    
                                    

                                    
                                    

                                     
                                     
                                    
                            

                            
                            </tr>
                        })}
                    </tbody>
                    <Link to='/Sidebar' className='btn btn-primary me-2'>Back</Link>
                </table>
            </div>
            
        </div>

    )
}

export default Home;