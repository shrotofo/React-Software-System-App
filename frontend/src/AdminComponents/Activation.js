import '../style.css'
import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Link} from 'react-router-dom';
import CryptoJS from "crypto-js";

function Activation(){

     //store the recent values 
     const[data,setData]=useState([])

     const[data1,setData1]=useState([])
    
     //fetch values
     useEffect(()=>{
         axios.get('http://localhost:3311/Activeacc')
         .then(res=>
             {
             setData(res.data)}
         )
         //console.log(res.data))
         .catch(err=>console.log(err));

         axios.get('http://localhost:3311/Deactiveacc')
         .then(res=>
             {
             setData1(res.data)}
         )
         //console.log(res.data))
         .catch(err=>console.log(err));
     },[])

     const deactivate = async (ID) => { try { await axios.put('http://localhost:3311/deactivate/'+ID) 
    window.location.reload()}catch(err) {console.log(err);}}

    const handleLkey=  (ID) => { 
        axios.get('http://localhost:3311/read/'+ID).then(res=>
        {
      console.log(res.data[0])
      console.log(res.data[0].GroupID+ res.data[0].Email +res.data[0].GroupCode +res.data[0].Country + res.data[0].GroupDesc+res.data[0].Product+res.data[0].MobileNumber)

      
      const data1 = CryptoJS.AES.encrypt(
      JSON.stringify(res.data[0].GroupID+ res.data[0].Email +res.data[0].GroupCode +res.data[0].Country 
       + res.data[0].GroupDesc+res.data[0].Product+res.data[0].MobileNumber),"XkhZG4fW2t2W").toString();


        console.log(data1);
        axios.put('http://localhost:3311/Lkey/'+ID,{Lkey:data1})
        .then(res=>{ axios.put('http://localhost:3311/activate/'+ID).then(res=>{window.location.reload()}).catch(err=>console.log(err));
          

        }).catch(err=>console.log(err));
      
      
      }).catch(err=>console.log(err));
  }

return(

    <div className=' vh-200 bg-black justify-content-center align-items-center '>
    <div className='bg-white p-3 rounded w-100'> 
        <h1 id="boxTable" style={{color:"white"}}><strong>ACTIVE CLIENT LIST</strong></h1>
        <table  class="table table-bordered table-hover" >
            <thead>
                <tr>
                    <th >Name</th>
                    <th>Email</th>
                    <th>ID</th>
                    <th>Mobile</th>
                    <th>Country</th>
                    <th>Deactivate</th>
                
                </tr>
            </thead>
            <tbody >
                {data.map((student,index)=>{
                    return <tr key={index}>
                        <td >{student.ContactPerson}</td>
                        <td>{student.Email}</td>
                        <td>{student.GroupID}</td>
                        <td>{student.MobileNumber}</td>
                        <td>{student.Country}</td>
                        <td>
                        <button className='btn btn-secondary me-2' id='button1' onClick={ e => deactivate(student.GroupID)} >DEACTIVATE</button>
                        </td></tr> })} </tbody> </table>
    </div>
    <div className='bg-white p-3 rounded w-500'> 
        <h1 id="boxTable" style={{color:"white"}}><strong>INACTIVE CLIENT LIST</strong></h1>
        <table  class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                    <th>Mobile</th>
                    <th>Country</th>
                    <th>Activate</th>
                
                </tr>
            </thead>
            <tbody>
                {data1.map((student,index)=>{
                    return <tr key={index}>
                        <td>{student.ContactPerson}</td>
                        <td>{student.Email}</td>
                        <td>{student.GroupID}</td>
                        <td>{student.MobileNumber}</td>
                        <td>{student.Country}</td>
                        <td>
                        <button className='btn btn-secondary me-2' id='button1' onClick={ e => handleLkey(student.GroupID)} >ACTIVATE</button>
                        </td></tr> })} </tbody> 
                        </table>
                        <Link to='/Sidebar' className='btn btn-primary me-2'>Back</Link>
    </div>
    
</div>

    




    );
}

export default Activation;