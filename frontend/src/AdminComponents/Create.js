import React,{useState,useEffect} from 'react';
import axios from "axios"
import {useNavigate} from 'react-router-dom';
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
  import { v4 as uuid } from 'uuid';



function Create() {

    const [values, setValues] = useState({email: '', password: '',GroupID:'',GroupCode:'',GroupDesc:'',ContactPerson:'',Designation:'',MobileNumber:'',Users:'',Country:" ",Address:"",City:"",Postal:"",RegisterDate:""})
    const[Products,setProducts]=useState([])
    const[Modules,setModules]=useState([])
    const [inputFields, setInputFields] = useState([{Module:''}]);
    const [ProductSelected, setProductSelected] = useState();
    const [PName, setPName] = useState();
    const [Time, setTime] = useState();
    const [GroupID, setGroupID] = useState();
    const [ModuleSelected, setModuleSelected] = useState();
    const [PID, setPID] = useState();
    
    const navigate=useNavigate();



    const handleSubmit = (event) => { event.preventDefault(); 
      
        
      
   


     axios.post('http://localhost:3311/add', values) //url-path which we sending request (sending request to web server)
     .then(res => { console.log(res);})
     .catch(err => console.log(err));

     axios.post("http://localhost:3311/registerproduct",{GroupID:GroupID,PName:ProductSelected,Time:Time})
     .then(res=>{})
     .catch(err=>console.log(err))

     inputFields.map((data,index)=>{
         let MGROUPID=uuid()
         axios.post("http://localhost:3311/registermodules",{MGROUPID:MGROUPID,GROUPID:GroupID,Module:data.Module})
     .then(res=>{navigate('/Sidebar')})
     .catch(err=>console.log(err))

     })


     
    }
  
   
    useEffect(()=>{
     
      
    
      axios.get("http://localhost:3311/getproduct")
      .then(res=> {setProducts(res.data)
      })
      .catch(err=>console.log(err))
      axios.get("http://localhost:3311/getproductPID/"+ProductSelected)
      .then(res=> {setPID(res.data[0].PIID);console.log(res.data)
      })
      .catch(err=>console.log(err))


      
  
      axios.get("http://localhost:3311/getmodules/"+PID)
      .then(res=> {setModules(res.data)})
      .catch(err=>console.log(err))
  
      
     
  
  },[Products])

  const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
   }

   const AddNew=()=>{
    setInputFields([...inputFields, {
        Module:'',
    } ])

    }

  
console.log(inputFields)
 







    return(
      <div className='d-flex justify-content-center align-items-center ProductPage vh-100'>
            <div  className='p-3 rounded w-60 border loginForm'><h1 align="center"><u> CREATE CLIENT FORM</u></h1> 
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
                    <input wrapperClass='mb-4'name="email" onChange={e=>setValues({...values,email:e.target.value})} value={values.email} labelClass='text-indigo' label='Email' size='lg' id='form7' type='text'/>
                     
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
                    
                    </tr>
                </tbody>
            </table>

            <table class="table table-borderedW table-hover">
                <thead>
                    <tr>
                        <th  class="table-borderedW" style={{color:"white"}}> GroupID</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Time</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Product</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Module</th>
                        
    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='GroupID' size='lg' id='form6' type='text' name="GroupID" onChange={(evnt)=>setGroupID(evnt.target.value)} value={GroupID}/></td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='Time' size='lg' id='form6' type='text' name="Time" onChange={(evnt)=>setTime(evnt.target.value)} value={Time}/>
                    </td>
                    <td  class="table-borderedW">
                    <select value={ProductSelected}   name="Product"  onChange={(evnt)=>setProductSelected(evnt.target.value)} >
                      <option >select Product</option>
                        {Products?.map((data,index)=>
                        {return(<option value={data.PID2} >{data.PNAME}</option>)})}
                         </select> 
                         
                         <div style={{padding:"10px"}}></div>
                         
                        
                    </td>
                    <td  class="table-borderedW">
                    { 
                      inputFields.map((data, index)=>{
                          
                          return(
                            <div className="row my-3" key={index}>
                    
                    
        
                      <select value={ModuleSelected} name="Module" onChange={(evnt)=>handleChange(index, evnt)} >
                      <option >select Module</option>
                      {Modules?.map((data,index)=>
                        {return(<option value={data.MNAME}>{data.MNAME}</option>)})}
                      </select> 
                      </div>
                    
                    
                   
                          )})
                  }
                  
                   <button className="btn btn-outline-success " onClick={AddNew}>Add New</button>
                    </td>
                    
                    
                    </tr>
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <button type="submit" className='btn btn-success w-100 rounded-0'>SUBMIT</button>
                </form>

                    

        </div>
        </div>


      
    )
}

export default Create;