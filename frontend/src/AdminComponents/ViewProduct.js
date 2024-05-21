import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import CryptoJS from "crypto-js";
import '../style.css'


function ViewProduct(){
    //store the recent values 
    const[data,setData]=useState([])
    const[mdata,setmData]=useState([])
    const[check,setCheck]=useState(true);
    
    //fetch values
    useEffect(()=>{
        axios.get('http://localhost:3311/pfetch')
        .then(res=>
            { setData(res.data)})
        .catch(err=>console.log(err));
        axios.get('http://localhost:3311/mfetch')
        .then(res=>
            {console.log(res.data,"MDATA");
            setmData(res.data)}
        )
        //console.log(res.data))
        .catch(err=>console.log(err));
    },[])

    const handleDelete = async (ID) => { try { await axios.delete('http://localhost:3311/deletePRODUCTMOD/'+ID) 
    window.location.reload()}catch(err) {console.log(err);}}

    

  

  

    
   
  
  





console.log(data,"ok")
    

    

    return (

        

        <div className='d-flex vh-500 bg-black justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded w-500'> 
                <h1 id="box" style={{color:"white"}}><strong>PRODUCT LIST</strong></h1>
                <Link to="/addProducts" className='btn btn-success'>Create Product</Link>
                <table  class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>LOGO</th>
                            <th>COST</th>
                            <th>DESC</th>
                            <th>Delete</th>
                            <th>Module</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student,index)=>{
                            return <tr key={index}>
                                <td>{student.PNAME}</td>
                                <td ><img src={"/images/"+student.PLOGO} style={{width:120,height:120}}/></td>
                                <td>{student.LCOST}</td>
                                <td>{student.PDESC}</td>

                                <td>
                                <button id='button1' className='btn btn-danger ms-2'  onClick={ e => handleDelete(student.PIID)} >Delete</button>{' '}
                                 </td>
                                 <td>
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <th>Name</th>
                                            <th>Cost</th>
                                            <th>Description</th>
                                        </thead>
                                        <tbody>
                                 {mdata.map((d,i)=>{
                                    if (d.PIID1===student.PIID){
                                       return  <tr>
                                            <td>{d.MNAME}</td>
                                            <td>{d.MCOST}</td>
                                            <td>{d.MDESC}</td>
                                        </tr>

                                        
                                            
                                        
                                    }
                                 })
                                 }</tbody>
                                 </table></td>
                                 
                                

                                    
                                    
                                    

                                    
                                    

                                    
                                     
                                    
                            

                            
                            </tr>
                        })}
                    </tbody>
                    <Link to='/Sidebar' className='btn btn-primary me-2'>Back</Link>
                </table>
            </div>
            
        </div>

    )
}

export default ViewProduct;