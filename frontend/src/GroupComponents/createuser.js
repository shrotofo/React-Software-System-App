import React,{useState} from 'react';
import axios from "axios"
import {useNavigate,useParams} from 'react-router-dom';
import '../style.css'
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


function CreateUser(){
    const{ID}=useParams();
    const [values, setValues] = useState({email: '', password: '',Name:'',Designation:'',MobileNumber:''})
    

    
    const navigate=useNavigate();


    const handleSubmit = (event) => { 
        event.preventDefault(); 
        

                    axios.post('http://localhost:3311/createuser/'+ID, values) //url-path which we sending request (sending request to web server)
                    .then(res => { console.log(res);
                       navigate('/sidebarEmployee/'+ID)}) 
                    .catch(err => console.log(err));
                
            }
        
        
      
   


    
    

    return(
        <section className="h-1000 h-custom gradient-custom-3 bg-black ">
        <form action="" onSubmit={handleSubmit}>
            
            <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
              <div className="col-6">
                <div className="card card-registration card-registration-1" >
                  <div className="card-body p-0">
                    <div className="row g-0">
                    <div className="col-lg-12 bg-white justify-content-center align-items-center text-indigo">
                    <div className="p-5">
                    <h3 className="fw-normal mb-5" >General Infomation</h3>
                                <MDBRow>
                                <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-4'name="Name" onChange={e=>setValues({...values,Name:e.target.value})} value={values.Name} labelClass='text-indigo' label='Name' size='lg' id='form7' type='text'/>
                                
                                </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-4'name="Email" onChange={e=>setValues({...values,email:e.target.value})} value={values.email} labelClass='text-indigo' label='Email' size='lg' id='form7' type='text'/>
                                
                                </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-4'name="password" onChange={e=>setValues({...values,password:e.target.value})} value={values.password} labelClass='text-indigo' label='Password' size='lg' id='form7' type='password'/>
                                
                                </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-4'name="Designation" onChange={e=>setValues({...values,Designation:e.target.value})} value={values.Designation} labelClass='text-indigo' label='Designation' size='lg' id='form7' type='text'/>
                                
                                </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-4'name="MobileNumber" onChange={e=>setValues({...values,MobileNumber:e.target.value})} value={values.MobileNumber} labelClass='text-indigo' label='Mobile Number' size='lg' id='form7' type='text'/>
                                
                                </MDBCol>
                                </MDBRow>
                                <button type="submit" className="btn btn-dark btn-lg" 
                            data-mdb-ripple-color="dark">CREATE</button>
                                </div>
                      </div>

                      </div>
                  </div>
                </div>
              </div>
            </div>
        
          </form>
        </section>
    );
}

export default CreateUser;