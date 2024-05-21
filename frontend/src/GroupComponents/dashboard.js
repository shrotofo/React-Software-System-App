import React,{useState,useEffect} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";



const Dashboard = () => {
    const{ID}=useParams();

    const[Details,setDetails]=useState()
    const[img,setImg]=useState()
    
    

    
   
    const[register,setRegister]=useState([])
    const[Total,setTotal]=useState({Total:0,SubTotal:0})
    const[lfee,setLfee]=useState(0)



 
    const[Month,setMonth]=useState({Month:''})
    const[Date,setDate]=useState({Date:''})

    
    

    const navigate=useNavigate();

    
    useEffect(()=>{
      
      
      
        axios.get('http://localhost:3311/NewProductBilling/'+ID)
        .then(res=>{
          setDetails(res.data)
          setImg(res.data[0].PLOGO)
          console.log(res.data,"data") }).catch(err=>console.log(err))
 
  
  
  

        axios.get('http://localhost:3311/FetchRegister/'+ID)
        .then(res=>{
            setRegister(res.data[0]);
            const Monthstr=res.data[0].RegisterDate.slice(5,7)
          const Datestr=res.data[0].RegisterDate.slice(8,10)
          setMonth({Month:Monthstr})
          setDate({Date:Datestr})
    })
        .catch(err=>console.log(err))
        let total=0;
        
        Details?.map((data,i)=>{
        
         total=total+data.MCOST
         setLfee(data.LCOST)
         

        })
        setTotal({Total:total,SubTotal:total+lfee})
       console.log(Total)
        
        
  
  

        
       
        
        


    },[Total]);
    console.log(Total)
   
   

    
    const pdfconvert=()=>{
      const input = document.getElementById('PDF-Q');
      html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });

    };
     //function that sends email and uses axios 
    const emailsender=()=>{

      const input = document.getElementById('PDF-Q');
      html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);


     axios.post('http://localhost:3311/emailsend/',{ID:ID})
        .then(res=>{
        //console.log(res.data);
        alert("email sent");
        setRegister(res.data[0]);
    })
        .catch(err=>console.log(err))
        
      });
      
    
    }

    const PayNow=()=>{
      axios.put('http://localhost:3311/paynow/'+ID)
      .then(res=>{
        
        navigate('/PayNow/'+ID);
      })
      .catch(err=>console.log(err))

    }
   console.log(Details,"details")
   
     
      



    return(
        
      <MDBContainer className="py-5" id="PDF-Q">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="4">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  <strong>GROUP ID &gt; &gt; {ID}</strong>
                </p>
                <img src={"/images/"+img}/>
                
              
              </MDBCol>
              <MDBCol xl="4">
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}> <strong><h2><u>QUOTATION</u></h2></strong></p>
              </MDBCol>
              <MDBCol xl="4" className="float-end">
                
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}><strong>INVOICE DATE &gt; &gt; {register.RegisterDate}</strong></p>
              <p style={{ color: "#7e8d9f", fontSize: "20px" }}><strong>DUE DATE &gt; &gt;
              {Month.Month==='01'?<span> {Date.Date} February </span>:[Month.Month==='02'?<span> {Date.Date} March </span>:[Month.Month==='03'?<span> {Date.Date} April</span>:[Month.Month==='04'?<span> {Date.Date} May</span>:[Month.Month==='05'?<span> {Date.Date} June</span>:[Month.Month==='06'?<span> {Date.Date} July </span>:[Month.Month==='07'?<span> {Date.Date} August</span>:[Month.Month==='08'?<span>{Date.Date} September</span>:[Month.Month==='09'?<span>{Date.Date} October</span>:[Month.Month==='10'?<span>{Date.Date} November</span>:[Month.Month==='11'?<span>{Date.Date} December</span>:<span>{Date.Date} January</span>]]]]]]]]]]}</strong></p>
              
                <hr />
                <button onClick={pdfconvert}> GENERATE PDF DOWNLOAD</button>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                 <li className="text-muted">{register.ContactPerson}</li>
                <li className="text-muted">{register.Designation}</li>
                <li className="text-muted">{register.Address},{register.City},{register.Postal}</li>
                <li className="text-muted">{register.Country}</li>
                </li>
                <li className="text-muted"></li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> 
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted"></p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#84B0CA" }} />
                  <span className="fw-bold ms-1"></span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBTable striped borderless>
           
              <MDBTableHead
                className="text-white"
                style={{ backgroundColor: "#84B0CA" }}
              >
                <tr>
                  <th scope="col">{Details?Details[0].PNAME:''}</th>
                  <th scope="col">Module Name</th>
                  <th scope="col">Module Description</th>
                  <th scope="col">Amount</th>
                  
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {Details?.map((data,index)=>{
                  return(
                  <tr>
                  <th>{index+1}</th>
                  <td>{data.MNAME}</td>
                  <td>{data.MDESC}</td>
                  <td>${data.MCOST}</td>

                  </tr>

                )})}
             
              
                
            
          
                
                
              
              
               
                
              </MDBTableBody>
            </MDBTable>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
                Pay before 15 days 
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                <span   style={{ color: "#7e8d9f", fontSize: "20px" }}> <strong>SubTotal: ${Total.Total}</strong></span>
                </li>
                <li className="text-muted ms-3 mt-2">
                <span   style={{ color: "#7e8d9f", fontSize: "20px" }}> <strong>LICENSE FEE : ${lfee}</strong></span>
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span   style={{ color: "#7e8d9f", fontSize: "20px" }}> <strong><u>Total Amount: ${Total.SubTotal}</u></strong></span>
                <span style={{ fontSize: "25px" }}></span>
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="12" id="boxLkey">
              <p style={{ color: "#FFFFFF", fontSize: "12px" }}><strong>LICENSE KEY</strong> : {register.Lkey}</p>
            </MDBCol>

          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol xl="10">
              <p>Thank you for your purchase</p>
            </MDBCol>
            <MDBCol xl="2">
              <button  className='btn btn-secondary me-2' onClick={PayNow}>CLICK HERE TO PAY</button>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  

 
    )

  

 
  
};

export default Dashboard;
