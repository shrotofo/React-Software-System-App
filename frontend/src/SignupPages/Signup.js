import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Validation from '../LoginPages/LoginValidation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Signup.css';
import '../style.css'
import {
  MDBRow,
  MDBCol,
  MDBInput,}
from 'mdb-react-ui-kit';




function Signup(){
    const [values, setValues] = useState({email: '', password: '',GroupID:'',GroupCode:'',GroupDesc:'',ContactPerson:'',Designation:'',MobileNumber:'',Users:'',RegisterDate:'',Country:" ",City:"",Postal:"",Address:" ",Type:'Employee',CL:''})   
const navigate = useNavigate();    
//country dropdown
const getInitialState = () => {
    const value = "Afghanistan";
    return value;
  };
 const [value, setValue] = useState(getInitialState);
const handleChange = (e) => {
    setValue(e.target.value);
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))

  };

  

// type dropdown 
const getInitialState5 = () => {
  const value1 = "Admin";
  return value1;
};
const [value5, setValue5] = useState(getInitialState5);
const handleChange5 = (e) => {
  setValue5(e.target.value1);
  setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))

};

const [errors, setErrors] = useState({})    
const handleInput = (event) => { setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))}   

 const handleSubmit = (event) => { event.preventDefault(); 
const err = Validation(values); setErrors(err); 
 if(err.email === "" && err.password === ""&& err.GroupID === ""&& err.GroupCode === ""&& err.GroupDesc === ""&& err.ContactPerson === ""&& err.Designation=== ""&& err.MobileNumber === ""&& err.Users === ""&& err.RegisterDate === ""&& err.Country === "" ) { 
     axios.post('http://localhost:3311/signup', values) //url-path which we sending request (sending request to web server)
     .then(res => { navigate('/Product_Register'); }) 
     .catch(err => console.log(err));}}

     
    
       
    
    
    
    return (
      <div className='d-flex justify-content-center align-items-center ProductPage vh-100'>
            <div  className='p-3 rounded w-60 border loginForm'><h1 align="center"><u>  REGISTER FORM</u></h1> 
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
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='Name' size='lg' id='form6' type='text' name="ContactPerson"  onChange={handleInput}/>
                      {errors.ContactPerson && <span className='text-danger'> {errors.ContactPerson}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='MobileNumber' size='lg' id='form6' type='text' name="MobileNumber"  onChange={handleInput}/>
                      {errors.MobileNumber && <span className='text-danger'> {errors.MobileNumber}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4'name="email" className="text-color" onChange={handleInput} labelClass='text-indigo' label='Email' size='lg' id='form7' type='text'/>
                      {errors.email && <span className='text-danger'> {errors.email}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4'name="password" onChange={handleInput} labelClass='text-indigo' label='Password' size='lg' id='form7' type='password'/>
                      {errors.password && <span className='text-danger'> {errors.password}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4'name="Designation" onChange={handleInput} labelClass='text-indigo' label='Designation' size='lg' id='form7' type='text'/>
    
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
                        <th  class="table-borderedW" style={{color:"white"}}>RegisterDate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='GroupID' size='lg' id='form6' type='text' name="GroupID"  onChange={handleInput}/>
                      {errors.GroupID && <span className='text-danger'> {errors.GroupID}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='GroupDesc' size='lg' id='form6' type='text' name="GroupDesc"  onChange={handleInput}/>
                     {errors.GroupDesc && <span className='text-danger'> {errors.GroupDesc}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4'name="GroupCode" onChange={handleInput} labelClass='text-indigo' label='GroupCode' size='lg' id='form7' type='text'/>
                      {errors.GroupCode && <span className='text-danger'> {errors.GroupCode}</span>}
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='Users' size='lg' id='form6' type='text' name="Users"  onChange={handleInput}/>
                     {errors.Users && <span className='text-danger'> {errors.Users}</span>} 
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='RegisterDate' size='lg' id='form6' type='text' name="RegisterDate"  onChange={handleInput}/>
                  {errors.RegisterDate && <span className='text-danger'> {errors.RegisterDate}</span>} 
                    </td>
                    </tr>
                </tbody>
            </table>

            <table class="table table-borderedW table-hover">
                <thead>
                    <tr>
                        <th  class="table-borderedW" style={{color:"white"}}> Country</th>
                        <th  class="table-borderedW" style={{color:"white"}}>City</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Address</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Postal</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Conccurant License</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td  class="table-borderedW">
  
                
                <select value={value}  name="Country" onChange={handleChange}>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="	Algeria">Algeria</option>
                    <option value="	Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="	Argentina">Argentina</option>
                    <option value="	Armenia">Armenia</option>
                    <option value="	Australia">Australia</option>
                    <option value="	Austria">Austria</option>
                    <option value="	Bahamas">Bahamas</option>
                    <option value="	Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Russia">Russia</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Turkey">Turkey</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States of America">United States of America</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                </select>  
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='City' size='lg' id='form6' type='text' name="City"  onChange={handleInput}/>
                      
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='Address' size='lg' id='form6' type='text' name="Address"  onChange={handleInput}/>
                    </td>

                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4'name="Postal" onChange={handleInput} labelClass='text-indigo' label='Postal' size='lg' id='form7' type='text'/>
                     
                    </td>
                    <td  class="table-borderedW">
                    <input wrapperClass='mb-4' labelClass='text-indigo' label='Conccurant license' size='lg' id='form6' type='text' name="CL"  onChange={handleInput}/>
                    </td>
                    
                    </tr>
                </tbody>
            </table>
            <div style={{padding:"10px"}}></div> 
            <form onSubmit={handleSubmit}>
                <button type="submit" className='btn btn-success w-100 rounded-0'>SUBMIT</button>
                </form>

                    

        </div>
        </div>



    );

}
export default Signup;