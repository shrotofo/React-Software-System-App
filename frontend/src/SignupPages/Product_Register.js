
import React,{useEffect, useState} from 'react';
import Validation from '../LoginPages/LoginValidation';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Signup.css';
import '../style.css'
import {
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { v4 as uuid } from 'uuid';



function Product_Register(){
    const navigate=useNavigate();
    const[Products,setProducts]=useState([])
    const[Modules,setModules]=useState([])
    const [inputFields, setInputFields] = useState([{Module:''}]);
    const [ProductSelected, setProductSelected] = useState();
    const [PName, setPName] = useState();
    const [Time, setTime] = useState();
    const [GroupID, setGroupID] = useState();
    const [ModuleSelected, setModuleSelected] = useState();
    const[Check,setCheck]=useState(true)
    const[DATA,setDATA]=useState()
    const[View,setView]=useState(true)
 
    
   
useEffect(()=>{
    
    axios.get("http://localhost:3311/getproduct")
    .then(res=> {setProducts(res.data)
    })
    .catch(err=>console.log(err))
    

    axios.get("http://localhost:3311/getmodules/"+ProductSelected)
    .then(res=> {setModules(res.data)})
    .catch(err=>console.log(err))

    let array1=[]
    for (var i = 0; i < inputFields.length; i++) {
       if (array1.includes(inputFields[i].Module)) {
         setCheck(false)
         break;
       }
       else{
           array1.push(inputFields[i].Module)
           setCheck(true)
       }
     }
     

    
   

},[Products])







   


    const handleSubmit=(e)=>{
        let name=''
        Products.map((data,index)=>{
            if (data.PIID===Number(ProductSelected)){
                setPName(data.PNAME);
                name=data.PNAME
                setDATA(data);
            }
           
        })
        if (Check){
        e.preventDefault();
        
      axios.post("http://localhost:3311/registerproduct",{GroupID:GroupID,PName:name,Time:Time})
        .then(res=>{})
        .catch(err=>console.log(err))

        inputFields.map((data,index)=>{
            axios.post("http://localhost:3311/registermodules",{GROUPID:GroupID,Module:data.Module})
        .then(res=>{navigate('/loginEmployee')})
        .catch(err=>console.log(err)) })
        }
        else{
            alert("Duplicate Modules,Please enter Again")
        }
    
}

       const AddNew=()=>{
        setInputFields([...inputFields, {
            Module:'',
        } ])

        }
        

        const handleChange = (index, evnt)=>{
    
            const { name, value } = evnt.target;
            const list = [...inputFields];
            list[index][name] = value;
            setInputFields(list);
           }

          
    
         
    

     
     const ConfirmProduct=()=>{
        
        Products.map((data,index)=>{
            console.log(ProductSelected)
            if (data.PIID===Number(ProductSelected)){
                
                setDATA(data);
            }
           
        })

     }

     console.log(DATA,"DATA")
     const ViewTable=()=>{
        setView(true);
     }
     console.log()
    
                
                
               


        
        

     return(
        <div className='d-flex justify-content-center align-items-center ProductPage vh-100'>
            <div  className='p-3 rounded w-60 border loginForm'><h1 align="center"><u> PRODUCT REGISTER FORM</u></h1> 
            <div style={{padding:"10px"}}></div> 
            <table class="table table-borderedW table-hover">
                <thead>
                    <tr>
                        <th  class="table-borderedW" style={{color:"white"}}>GroupID</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Time</th>
                        <th  class="table-borderedW" style={{color:"white"}}>Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td  class="table-borderedW"><input  type="text" name="GroupID" onChange={(evnt)=>setGroupID(evnt.target.value)} value={GroupID} className="form-control"  placeholder="GroupID" /></td>
                    <td  class="table-borderedW"><input  type="number" name="Time" className="form-control" onChange={(evnt)=>setTime(evnt.target.value)} value={Time}  placeholder="Time for Subscription" /></td>
                    <td  class="table-borderedW">
                    <select value={ProductSelected}   name="Product"  onChange={(evnt)=>setProductSelected(evnt.target.value)} >
                      <option >select Product</option>
                        {Products?.map((data,index)=>
                        {return(<option value={data.PIID} >{data.PNAME}--{data.PDESC}</option>)})}
                         </select> 
                    </td>
                    </tr>
                </tbody>
            </table>

                    
    
                <div style={{padding:"10px"}}></div>
                
                         {DATA===undefined?<button className="btn btn-outline-success " onClick={ConfirmProduct}>View Product</button>:
                         <table  class="table table-borderedW table-hover" >
                         <thead>
                                 <tr>
                                     <th  class="table-borderedW"style={{color:"white"}}><h6>Product Name</h6></th>
                                     <th class="table-borderedW" style={{color:"white"}}><h6>LOGO</h6></th>
                                     <th  class="table-borderedW"style={{color:"white"}}><h6>License Fee</h6></th>
                                     <th class="table-borderedW" style={{color:"white"}}><h6>Product Description</h6></th>
                               </tr>
                         </thead>
                                 <tbody>
                                     <tr>
                                        <td  class="table-borderedW"style={{color:"white"}}>{DATA.PNAME} </td>
                                        <td  class="table-borderedW"style={{color:"white"}}><img src={"/images/"+DATA.PLOGO} style={{width:60,height:60}}/> </td>
                                        <td  class="table-borderedW"style={{color:"white"}}>{DATA.LCOST} </td>
                                        <td  class="table-borderedW"style={{color:"white"}}>{DATA.PDESC} </td>
                                    </tr>
                                    </tbody>
                                    </table>
                         
                         }
                         
                
                
                <div style={{padding:"10px"}}></div>
               
                         
                         
                
                { 
                      inputFields.map((data, index)=>{
                        
                          return(
                            
                            
                           
                                   <MDBRow>
                                    <MDBCol mb="5">
                                    
                                    <select value={ModuleSelected} name="Module" onChange={(evnt)=>handleChange(index, evnt)} >
                              <option>select Module</option>
                                {Modules?.map((data,index)=>
                                    {return(<option value={data.MNAME}>{data.MNAME}--{data.MDESC}</option>
                                )})}  </select> <div style={{padding:"10px"}}></div>
                                </MDBCol>
                               </MDBRow>  )}) 
                  }
                  <div style={{padding:"10px"}}></div>
                 
                  
                  <button className="btn btn-outline-success " onClick={AddNew}>Add New Module</button>
                  <div style={{padding:"10px"}}></div>

                  
                  
                  

                      <form onSubmit={handleSubmit}>
                <button type="submit" className='btn btn-success w-100 rounded-0'>SUBMIT</button>
                </form>

                    

        </div>
        </div>

        
    
     )
             
                
         

    
}
export default Product_Register;