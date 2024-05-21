import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import '../style.css'

//import uuid v4
import { v4 as uuid } from 'uuid';
import {
    MDBRow,
    MDBCol,
    MDBInput,}
  from 'mdb-react-ui-kit';


function AddProducts(){
    const navigate=useNavigate();
    const[ProductName,setProductName]=useState([])
    const[Lfee,setLfee]=useState([])
    const[PDesc,setPDesc]=useState([])
    const[PImg,setPImg]=useState()
    const[PIMAGE,setPIMAGE]=useState()
    const[CHECKIMAGE,setCHECKIMAGE]=useState(true)

    
    
   
    
    const [inputFields, setInputFields] = useState([{
        Module:'',
        Price:0,
        MDESC:'',
    } ]);
 
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            Module:'',
            Price:0,
            MDESC:'',

        } ])
      
    }
   
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
   }

  
  

   const savePImg=(e)=>{
    setPImg(e.target.files[0])
    setPIMAGE(URL.createObjectURL(e.target.files[0]))
    }

  
 
   

  


    const handleSubmit=(e)=>{
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("image", PImg);
        formdata.append("PName", ProductName);
        
        axios.post("http://localhost:3311/newproduct",{PName:ProductName,Lfee:Lfee,PDesc:PDesc})
        .then(res=>{

            axios.get("http://localhost:3311/getproduct/"+ProductName)
            .then(res=>{ const PID1=res.data[0].PIID
                let length=inputFields.length
        
        
        for(let i=0;i<length;i++){
        axios.post("http://localhost:3311/newmodule",{Module:inputFields[i].Module,Price:Number(inputFields[i].Price),MDESC:inputFields[i].MDESC,MUID:PID1})
        .then(res=>{navigate('/Sidebar')})
        .catch(err=>console.log(err))
        } }).catch(err=>console.log(err))

        axios.post('http://localhost:3311/uploadPImg',formdata).then(res=>{ }).catch(err=>console.log(err))
        
            })
            .catch(err=>console.log(err))

        

         }
   

   

    
    
   
    
    

    

    

    

   
    

     return(
        
    
        <div className='d-flex justify-content-center align-items-center ProductPage vh-100'>
            <div  className='p-3 rounded w-80 border loginForm'><h1 align="center"><u> ADD PRODUCT FORM</u></h1>  
            <div style={{padding:"10px"}}></div> 
             <MDBRow>
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
                                <td  class="table-borderedW"> <input type="text" onChange={(evnt)=>setProductName(evnt.target.value)} value={ProductName} name="ProductName" className="form-control"  placeholder="ProductName" /></td>
                                <td  class="table-borderedW">
                                {PIMAGE? <MDBRow><img src={PIMAGE} /> </MDBRow>:
             <MDBRow><input type="file" onChange={savePImg}/>
             </MDBRow>}
                                </td>
                                <td  class="table-borderedW"> <input type="text" onChange={(evnt)=>setLfee(evnt.target.value)} value={Lfee} name="Lfee" className="form-control"  placeholder="License Fee" /></td>
                                <td  class="table-borderedW">
                                <input type="text" onChange={(evnt)=>setPDesc(evnt.target.value)} value={PDesc} name="PDesc" className="form-control"  placeholder="Product Description" />
                                </td>
                            </tr>
                            </tbody>
            </table>
           
           
             
           


            
                
        
            </MDBRow>
                <div style={{padding:"10px"}}></div> 
                <table  class="table table-borderedW table-hover" >
                <thead>
                        <tr>
                            <th  class="table-borderedW"style={{color:"white"}}><h6>Module</h6></th>
                            <th class="table-borderedW" style={{color:"white"}}><h6>Price</h6></th>
                            <th class="table-borderedW" style={{color:"white"}}><h6>Description</h6></th>
    
                            
                        </tr>
                </thead>
                        <tbody>
               

                 { 
                      inputFields.map((data, index)=>{
                          const {Module,Price,MDESC}= data;
                          return(
                            <tr  key={index}>
                               
                   
                    
                    <td class="table-borderedW"> <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={Module} name="Module" className="form-control"  placeholder="Module" /></td>
                    
                    
                    
                  
                    <td class="table-borderedW"><input type="number" onChange={(evnt)=>handleChange(index, evnt)} value={Price} name="Price" className="form-control" placeholder="Price" /></td>
                    
                   

                    <td class="table-borderedW"><input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={MDESC} name="MDESC" className="form-control" placeholder="DESCRIPTION" /></td>
                   </tr>
                  
                          )
                      })
                  }
     
                
                </tbody>
                </table>
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                <div style={{padding:"10px"}}></div> 
                  
                
                <form onSubmit={handleSubmit}>
                <button type="submit" className='btn btn-success w-100 rounded-0'>SUBMIT</button>
               
                </form>
            </div>
            </div>
           
        
    )
            
             
                
         

    
}
export default AddProducts;