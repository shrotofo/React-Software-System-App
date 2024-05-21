import React,{useState,useEffect} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
 
  MDBContainer,
  MDBRow,
  MDBCol,
 
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import './style.css'


const TotalBill=()=>{

    


    const{ID}=useParams();
    const[Details,setDetails]=useState()
    const[lfee,setLfee]=useState(0)
    const[Time,setTime]=useState(0)

   
    const[register,setRegister]=useState([])
    const[Total,setTotal]=useState({Total:0,SubTotal:0})




    const[Month,setMonth]=useState({Month:''})
    const[Date,setDate]=useState({Date:''})
    

    
    

    const navigate=useNavigate();

    
    useEffect(()=>{
      axios.get('http://localhost:3311/NewProductBilling/'+ID)
      .then(res=>{
        setDetails(res.data)
        
        setTime(res.data[0].Time)
        console.log(res.data,"data") }).catch(err=>console.log(err))

        axios.get('http://localhost:3311/FetchRegister/'+ID)
        .then(res=>{
          const Monthstr=res.data[0].RegisterDate.slice(5,7)
          const Datestr=res.data[0].RegisterDate.slice(8,10)
          
          setMonth({Month:Monthstr})
          setDate({Date:Datestr})
            setRegister(res.data[0]); })
     .catch(err=>console.log(err))

     let total=0;
      Details?.map((data,i)=>{
        total=total+data.MCOST
        setLfee(data.LCOST)})
        setTotal({Total:total,SubTotal:total+lfee})
        


    },[Total])
   


    
    let stars1 = []
    
      //setTime1({Time1:Time1.Time1-1})
      
      {Details?.map((data,index)=>{
       
        stars1.push(
        <tr>
        <th>{index+1}</th>
        <td>{data.MNAME}</td>
        <td>{data.MDESC}</td>
        <td>${data.MCOST}</td>

        </tr> )}

        )}
      
        console.log(Time,"Time")
        
      
          
  
    
    
   
  
   
   
  
    return (
      <div>
       <h1 align="center" style={{color:"white"}} id='boxBill'><u>Monthly Payment and Due Date</u></h1>
      <div>
      <MDBContainer className="py-5" >
     
      <MDBRow className="my-2 mx-1 justify-content-center">
      <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                <strong>{Month.Month==='01'?<h2> {Date.Date} January Payment</h2>:[Month.Month==='02'?<h2> {Date.Date} Febuary Payment</h2>:[Month.Month==='03'?<h2> {Date.Date} March Payment</h2>:[Month.Month==='04'?<h2> {Date.Date} April Payment</h2>:[Month.Month==='05'?<h2> {Date.Date} May Payment</h2>:[Month.Month==='06'?<h2> {Date.Date} June Payment</h2>:[Month.Month==='07'?<h2> {Date.Date} July Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} November Payment</h2>:<h2>{Date.Date} December {Date.Date}</h2>]]]]]]]]]]}</strong>
              </p>
            </MDBCol>
            
     
      <MDBTable striped  className='table-bordered' >
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Module Name</th>
                <th scope="col">Module Description</th>
                <th scope="col">Amount</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
        
        </MDBTableBody>
          </MDBTable>
      
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
               <strong class="float-end"><u>SubTotal</u>: ${Total.SubTotal}</strong>
              </p>
            </MDBCol>
         
          </MDBRow>
          
        

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong>{Month.Month==='01'?<h2> {Date.Date} February Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} March Payment </h2>:[Month.Month==='03'?<h2> {Date.Date} April Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='05'?<h2> {Date.Date} June Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} December Payment</h2>:<h2>{Date.Date} January Payment</h2>]]]]]]]]]]}</strong>
              </p>
            </MDBCol>
            {{Time}===1?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Module</th>
                <th scope="col">Module Description</th>
                <th scope="col">Amount</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {stars1}
        
        
        </MDBTableBody>
          </MDBTable>
          
          }
          </MDBRow>
       
          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} March Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} April Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} June Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} september Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} January Payment</h2>:<h2>{Date.Date} February Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<3?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}>
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
       
        </MDBTableBody>
          </MDBTable>
          
          }
          </MDBRow>
       

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
               <strong>{Month.Month==='01'?<h2> {Date.Date} April Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} May Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} June Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} February Payment</h2>:<h2>{Date.Date} March Payment</h2>]]]]]]]]]]}</strong>
              </p>
            </MDBCol>
            {Time<4?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
             <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
       
        </MDBTableBody>
          </MDBTable>}
          </MDBRow>

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} May Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} June Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} Feburary Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} March Payment</h2>:<h2>{Date.Date} April Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<5?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
        
        </MDBTableBody>
          </MDBTable>}
          </MDBRow>

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong>{Month.Month==='01'?<h2> {Date.Date} June Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} July Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} February Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} April Payment</h2>:<h2>{Date.Date} May Payment</h2>]]]]]]]]]]}</strong>
              </p>
            </MDBCol>
            {Time<6?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
       
        </MDBTableBody>
          </MDBTable>}
          </MDBRow>

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} July Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} August Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} Febuary Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} April Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} May Payment</h2>:<h2>{Date.Date} June Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<7?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
             <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
       
        </MDBTableBody>
          </MDBTable>
}
          </MDBRow>

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} August Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} September Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} October Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} February Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} April Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} June Payment</h2>:<h2>{Date.Date} July Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<8?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
      
        </MDBTableBody>
          </MDBTable>}
          </MDBRow>

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} September Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} October Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} November Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} February Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} April Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} June Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} July Payment</h2>:<h2>{Date.Date} August Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<9?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
       
        </MDBTableBody>
          </MDBTable>
}
          </MDBRow>
    

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} October Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} November Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} December Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} February Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} April Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} June Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} August Payment</h2>:<h2>{Date.Date} September Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<10?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
             <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
        
        </MDBTableBody>
          </MDBTable>
}
          </MDBRow>

          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} November Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} December Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} January Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} February Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} April Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} June Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} September Payment</h2>:<h2>{Date.Date} October Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<11?<h1>No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
        
        </MDBTableBody>
          </MDBTable>}
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
          <MDBCol xl="9">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
              <strong> <strong>{Month.Month==='01'?<h2> {Date.Date} December Payment </h2>:[Month.Month==='02'?<h2> {Date.Date} January Payment</h2>:[Month.Month==='03'?<h2>{Date.Date} February Payment</h2>:[Month.Month==='04'?<h2>{Date.Date} March Payment</h2>:[Month.Month==='05'?<h2>{Date.Date} April Payment</h2>:[Month.Month==='06'?<h2>{Date.Date} May Payment</h2>:[Month.Month==='07'?<h2>{Date.Date} June Payment</h2>:[Month.Month==='08'?<h2>{Date.Date} July Payment</h2>:[Month.Month==='09'?<h2>{Date.Date} August Payment</h2>:[Month.Month==='10'?<h2>{Date.Date} September Payment</h2>:[Month.Month==='11'?<h2>{Date.Date} October Payment</h2>:<h2>{Date.Date} November Payment</h2>]]]]]]]]]]}</strong></strong>
              </p>
            </MDBCol>
            {Time<12?<h1 >No Payment</h1>:
      <MDBTable striped className='table-bordered'>
            <MDBTableHead
              className="text-white"
              style={{ backgroundColor: "#84B0CA" }}
            >
              <tr>
              <th scope="col">#</th>
              <th scope="col">Module Name</th>
              <th scope="col">Module Description</th>
              <th scope="col">Amount</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
        {stars1}
       
        </MDBTableBody>
          </MDBTable>
}
          </MDBRow>

          </MDBContainer>

       
        
</div>
</div>
     
     
      
      
    )
    


    //console.log(Time1.Time1)

    




   

                
                

        
       
    


    



}

export default TotalBill;