import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,Link,useNavigate } from 'react-router-dom';





function PayNow(){
  const{ID}=useParams();

  const[Details,setDetails]=useState()
  

  
 
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
        
        console.log(res.data,"data")
          
          
          
          
         
})
.catch(err=>console.log(err))





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


    return(<div className='d-flex justify-content-center align-items-center bg-white vh-100'>
    <div className='p-3 rounded w-25 border loginForm'>
      <div class="container">
        <p class="my-5 mx-5" ><h3>Thank for your purchase</h3></p>
        <div class="row">
          <ul class="list-unstyled">
            <li class="text-white">{register.Name}</li>
            <li class="text-muted mt-1"><span class="text-white">Payment Receipt</span></li>
            
           
          </ul>
          </div>
          {Details?.map((data,index)=>{
                  return(
                    <div class="row">
                    <div class="col-xl-10">
                    <p>{data.MNAME}</p>
                    </div>
                    <div class="col-xl-2">
                    <p class="float-end">{data.MCOST}</p>
                    </div>
                    </div>

                )})}
        
         
                  
              
                 
                  
               
    
          
      
        <div class="row">
          <div class="col-xl-10">
            <p>Total</p>
          </div>
          <div class="col-xl-2">
            <p class="float-end"> ${Total.Total}
            </p>
          </div>
          
        </div>

        <div class="row">
          <div class="col-xl-10">
            <p>Product License Fee</p>
          </div>
          <div class="col-xl-2">
            <p class="float-end"> ${lfee}
            </p>
          </div>
          
        </div>

        <div class="row text-red">
  
          <div class="col-xl-12">
            <p class="float-end fw-bold"><h2>SubTotal: ${Total.SubTotal}</h2>
            </p>
          </div>
        </div>
        <div class="text-center" >
          <Link to={`/sidebarEmployee/${ID}`} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Back to Home</Link>
        </div>
  
      </div>
    </div>
  </div>
  );

}

export default PayNow;