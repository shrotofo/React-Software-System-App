import React,{useEffect,useState} from 'react';
import axios from "axios"
import {useParams,useNavigate} from 'react-router-dom';
import '../style.css'
import {
    MDBRow,
    MDBCol,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
  
  function Edit(){
    const navigate=useNavigate();
    const [values, setValues] = useState({email: '', password: '',GroupID:'',GroupCode:'',GroupDesc:'',ContactPerson:'',Designation:'',MobileNumber:'',Users:'',Country:" ",Address:"",Postal:"",City:""})
    const [values1, setValues1] = useState({ Company: '',Product1:'',Product2:'',Product3:'',Product4:'',Modules1:'',Modules2:'',Modules3:'',Modules4:'',Time1:" ",Time2:"",Time3:"",Time4:""})
    

    
    //store ID 
    const{ID}=useParams();
    //to fetch values after redering of page 
    useEffect(()=>{
        axios.get('http://localhost:3311/read/'+ID)
        .then(res=>{console.log(res)
        setValues({...values,email:res.data[0].Email,password:res.data[0].Password,GroupID:res.data[0].GroupID,GroupCode:res.data[0].GroupCode,GroupDesc:res.data[0].GroupDesc,ContactPerson:res.data[0].ContactPerson,Designation:res.data[0].Designation,MobileNumber:res.data[0].MobileNumber,Users:res.data[0].Users,Country:res.data[0].Country,Address:res.data[0].Address,Postal:res.data[0].Postal,City:res.data[0].City})
    })
        .catch(err=>console.log(err))
        axios.get('http://localhost:3311/readp/'+ID)
        .then(res=>{console.log(res)
        setValues1({...values1,Company:res.data[0].Company,Product1:res.data[0].Product1,Product2:res.data[0].Product2,Product3:res.data[0].Product3,Product4:res.data[0].Product4,Modules1:res.data[0].Modules1,Modules2:res.data[0].Modules2,Modules3:res.data[0].Modules3,Modules4:res.data[0].Modules4,Time1:res.data[0].Time1,Time2:res.data[0].Time2,Time3:res.data[0].Time3,Time4:res.data[0].Time4})
    })
        .catch(err=>console.log(err))

    },[])

    // to implement axios request
    const handleUpdate=(event)=>{
        event.preventDefault(); 
        axios.put('http://localhost:3311/edit/'+ID,values)
        .then(res=>{
            console.log(res);
           
            axios.put('http://localhost:3311/editp/'+ID,values1)
            .then(res=>{
            console.log(res);
           
            navigate('/sidebarEmployee/'+ID);

        }).catch(err=>console.log(err))

        }).catch(err=>console.log(err))
    }

    return(

        <section className="h-1000 h-custom gradient-custom-3 bg-black">
        <form action="" onSubmit={handleUpdate}>
            <div className="container py-7 h-200">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card card-registration card-registration-1" >
                  <div className="card-body p-0">
                    <div className="row g-0">
        
                      <div className="col-lg-6 bg-white text-indigo">
                        <div className="p-5">
                          <h3 className="fw-normal mb-5" >General Infomation</h3>
                          
                          <MDBRow>
        
        <MDBCol md='5'>
          <MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='Name' size='lg' id='form6' type='text' name="ContactPerson" onChange={e=>setValues({...values,ContactPerson:e.target.value})} value={values.ContactPerson}/>

        </MDBCol>

        <MDBCol md='7'>
          <MDBInput wrapperClass='mb-4'name="email"  onChange={e=>setValues({...values,email:e.target.value})} value={values.email} labelClass='text-indigo' label='Email' size='lg' id='form7' type='text'/>
          
        </MDBCol>
        </MDBRow>

      <MDBRow>
        <MDBCol md='7'>
          <MDBInput wrapperClass='mb-4'name="password" onChange={e=>setValues({...values,password:e.target.value})} value={values.password} labelClass='text-indigo' label='Password' size='lg' id='form7' type='password'/>
         
        </MDBCol>

      </MDBRow>


      <MDBRow>

        <MDBCol md='5'>
          <MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='MobileNumber' size='lg' id='form6' type='text' name="MobileNumber"  onChange={e=>setValues({...values,MobileNumber:e.target.value})} value={values.MobileNumber}/>
         
        </MDBCol>

        <MDBCol md='7'>
          <MDBInput wrapperClass='mb-4'name="Designation" onChange={e=>setValues({...values,Designation:e.target.value})} value={values.Designation} labelClass='text-indigo' label='Designation' size='lg' id='form7' type='text'/>

        </MDBCol>
        </MDBRow>

        <MDBRow>

<MDBCol md='12'>
<MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='Address' size='lg' id='form6' type='text' name="Address"  onChange={e=>setValues({...values,Address:e.target.value})} value={values.Address}/>

</MDBCol>
</MDBRow>

<MDBRow>

        <MDBCol md='5'>
          <MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='City' size='lg' id='form6' type='text' name="City"  onChange={e=>setValues({...values,City:e.target.value})} value={values.City}/>
          
        </MDBCol>

        <MDBCol md='7'>
          <MDBInput wrapperClass='mb-4'name="Postal"  onChange={e=>setValues({...values,Postal:e.target.value})} value={values.Postal} labelClass='text-indigo' label='Postal' size='lg' id='form7' type='text'/>
         
        </MDBCol>
        </MDBRow>




        


       





  

 



        
                     
        
          
        
                      
                      </div>
                      </div>
        
        
                      <div className="col-lg-6 bg-white text-indigo">
                        <div className="p-5">
                          <h3 className="fw-normal mb-5">Product Purchase Details</h3>
        
                
        
                           
        
        
        
                          

                          <MDBRow>
        
        <MDBCol md='12' >
        
        <MDBInput wrapperClass='mb-4'name="Country"  onChange={e=>setValues({...values,Country:e.target.value})} value={values.Country} labelClass='text-indigo' label='Country' size='lg' id='form7' type='text'/>
    </MDBCol>

   </MDBRow>
                        <MDBRow>
        
                        <MDBCol md='12'>
                        <MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='Users' size='lg' id='form6' type='text' name="Users"  onChange={e=>setValues({...values,Users:e.target.value})} value={values.Users}/>

                         </MDBCol>
                         </MDBRow>

                         <MDBRow>
        
        <MDBCol md='5'>
          <MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='GroupID' size='lg' id='form6' type='text' name="GroupID"  onChange={e=>setValues({...values,GroupID:e.target.value})} value={values.GroupID}/>

        </MDBCol>

        <MDBCol md='7'>
          <MDBInput wrapperClass='mb-4'name="GroupCode" onChange={e=>setValues({...values,GroupCode:e.target.value})} value={values.GroupCode} labelClass='text-indigo' label='GroupCode' size='lg' id='form7' type='text'/>
          
        </MDBCol>
        </MDBRow>

        <MDBRow>
        <MDBCol md='12'>
        <MDBInput wrapperClass='mb-4' labelClass='text-indigo' label='GroupDesc' size='lg' id='form6' type='text' name="GroupDesc"  onChange={e=>setValues({...values,GroupDesc:e.target.value})} value={values.GroupDesc}/>
        </MDBCol> 
        </MDBRow>
        
                          
                          
        
        
              
        
                          
                         
                            
                        
                        
                           
                     
        
                      
        
                          
        
        
                        
                         <button type="submit" className="btn btn-dark btn-lg" 
                            data-mdb-ripple-color="dark">Next</button>
        
                            
        
                        
        
                        </div>
                      </div>
        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        </section>
    )

  }

  export default Edit;