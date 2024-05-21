import React,{useEffect,useState} from 'react';
import axios from "axios"
import {useParams,useNavigate} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBSelect,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import '../style.css'
  
  function EditEmployee(){
    const navigate=useNavigate();
    const [values, setValues] = useState({email: '', password: '',GroupID:'',GroupCode:'',GroupDesc:'',ContactPerson:'',Designation:'',MobileNumber:'',Users:'',Country:" ",Address:"",Postal:"",City:"",CL:""})
   
    
     console.log(values.CL)
    
    //store ID 
    const{ID}=useParams();
    //to fetch values after redering of page 
    useEffect(()=>{
        axios.get('http://localhost:3311/read/'+ID)
        .then(res=>{console.log(res)
        setValues({...values,email:res.data[0].Email,password:res.data[0].Password,GroupID:res.data[0].GroupID,GroupCode:res.data[0].GroupCode,GroupDesc:res.data[0].GroupDesc,ContactPerson:res.data[0].ContactPerson,Designation:res.data[0].Designation,MobileNumber:res.data[0].MobileNumber,Users:res.data[0].Users,Country:res.data[0].Country,Address:res.data[0].Address,Postal:res.data[0].Postal,City:res.data[0].City,CL:res.data[0].CL})
    })
        .catch(err=>console.log(err))
        

    },[])

    // to implement axios request
    const handleUpdate=(event)=>{
        event.preventDefault(); 
        axios.put('http://localhost:3311/edit/'+ID,values)
        .then(res=>{
          navigate('/sidebarEmployee/'+ID)
            console.log(res);
           
            

        }).catch(err=>console.log(err))
    }

    return(

      <div className='d-flex justify-content-center align-items-center ProductPage vh-100'>
      <div  className='p-3 rounded w-60 border loginForm'><h1 align="center"><u>EDIT DETAILS</u></h1> 
      <div style={{padding:"10px"}}></div> 
      <table class="table table-borderedW table-hover">
          <thead>
              <tr>
                  <th  class="table-borderedW" style={{color:"white"}}>Name</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Mobile Number</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Email</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Password</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Designation</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='Name' size='lg' id='form6' type='text' name="ContactPerson" onChange={e=>setValues({...values,ContactPerson:e.target.value})} value={values.ContactPerson}/>
                
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='MobileNumber' size='lg' id='form6' type='text' name="MobileNumber"  onChange={e=>setValues({...values,MobileNumber:e.target.value})} value={values.MobileNumber}/>
                
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4'name="email"  onChange={e=>setValues({...values,email:e.target.value})} value={values.email} labelClass='text-indigo' label='Email' size='lg' id='form7' type='text'/>
                              
               
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4'name="password" onChange={e=>setValues({...values,password:e.target.value})} value={values.password} labelClass='text-indigo' label='Password' size='lg' id='form7' type='password'/>
                
              </td>
              
              <td  class="table-borderedW">
              <input wrapperClass='mb-4'name="Designation" onChange={e=>setValues({...values,Designation:e.target.value})} value={values.Designation} labelClass='text-indigo' label='Designation' size='lg' id='form7' type='text'/>
                
              </td>
              </tr>
          </tbody>
      </table>
      <div style={{padding:"10px"}}></div> 
     

      <table class="table table-borderedW table-hover">
          <thead>
              <tr>
                  <th  class="table-borderedW" style={{color:"white"}}> Country</th>
                  <th  class="table-borderedW" style={{color:"white"}}>City</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Address</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Postal</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4'name="Country"  onChange={e=>setValues({...values,Country:e.target.value})} value={values.Country} labelClass='text-indigo' label='Country' size='lg' id='form7' type='text'/>
          
         
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='City' size='lg' id='form6' type='text' name="City"  onChange={e=>setValues({...values,City:e.target.value})} value={values.City}/>
                
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='Address' size='lg' id='form6' type='text' name="Address"  onChange={e=>setValues({...values,Address:e.target.value})} value={values.Address}/>
    
              </td>

              <td  class="table-borderedW">
              <input wrapperClass='mb-4'name="Postal"  onChange={e=>setValues({...values,Postal:e.target.value})} value={values.Postal} labelClass='text-indigo' label='Postal' size='lg' id='form7' type='text'/>
               
              </td>
              </tr>
          </tbody>
      </table>
      <div style={{padding:"10px"}}></div> 
      <table class="table table-borderedW table-hover">
          <thead>
              <tr>
                  <th  class="table-borderedW" style={{color:"white"}}> GroupID</th>
                  <th  class="table-borderedW" style={{color:"white"}}>GroupDesc</th>
                  <th  class="table-borderedW" style={{color:"white"}}>GroupCode</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Users</th>
                  <th  class="table-borderedW" style={{color:"white"}}>Conccurant License</th>

              </tr>
          </thead>
          <tbody>
              <tr>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='GroupID' size='lg' id='form6' type='text' name="GroupID"  onChange={e=>setValues({...values,GroupID:e.target.value})} value={values.GroupID}/>
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='GroupDesc' size='lg' id='form6' type='text' name="GroupDesc"  onChange={e=>setValues({...values,GroupDesc:e.target.value})} value={values.GroupDesc}/>
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4'name="GroupCode" onChange={e=>setValues({...values,GroupCode:e.target.value})} value={values.GroupCode} labelClass='text-indigo' label='GroupCode' size='lg' id='form7' type='text'/>
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='Users' size='lg' id='form6' type='text' name="Users"  onChange={e=>setValues({...values,Users:e.target.value})} value={values.Users}/>
              </td>
              <td  class="table-borderedW">
              <input wrapperClass='mb-4' labelClass='text-indigo' label='Conccurant License' size='lg' id='form6' type='text' name="CL"  onChange={e=>setValues({...values,CL:e.target.value})} value={values.CL}/>
              </td>
              
              </tr>
          </tbody>
      </table>

     
      <form onSubmit={handleUpdate}>
          <button type="submit" className='btn btn-success w-100 rounded-0'>SUBMIT</button>
          </form>

              

  </div>
  </div>
    )

  }

  export default EditEmployee;