import {Link,useParams,useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import axios from "axios";
import GroupChart from './GroupChart';
import '../style.css'
import {
	MDBBtn,
	MDBRow,
	MDBCol,
	MDBInput,
  
  }
  from 'mdb-react-ui-kit';
  import LKey from './LKey';
 



function SidebarEmployee() {
	console.log(window.navigator.onLine,"ABCD")
	

    const{ID}=useParams();

    const[student,setStudent]=useState([])
	const navigate=useNavigate();

    
    useEffect(()=>{
        axios.get('http://localhost:3311/read/'+ID)
        .then(res=>{
           
        setStudent(res.data[0]);
		
    })
        .catch(err=>console.log(err))

		
	

    },[])
	const LOGOUT=()=>{
        axios.put('http://localhost:3311/LOGOUTCLIENT/'+ID)
        .then(res=>
            { console.log(res)
            navigate('/loginEmployee')}
        )
        //console.log(res.data))
        .catch(err=>console.log(err));
     }

	 useEffect(()=>{
        axios.put('http://localhost:3311/LOGINCLIENT/'+ID)
        .then(res=>{
			console.log(res,"abc")
    })
        .catch(err=>console.log(err))


    },[1])

	



return(
<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline">User Dashboard</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							<li>
								<Link to={`/sidebarEmployee/${ID}`} data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
							</li>
							<li>
								<Link to={`/home/${ID}`} className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">VIEW QUOTATION</span> </Link>
							</li>
                            <li >
								<Link to={`/editEmployee/${ID}`} className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Edit Details</span></Link>
							</li>
							<li >
								<Link to={`/viewUsers/${ID}`} className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">view Users/CREATE</span></Link>
							</li>
							<li >
								<Link to={`/TotalBill/${ID}`} className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">view Monthly Payment</span></Link>
							</li>

							<li >
								<button  className='btn btn-success w-100 rounded-0' onClick={LOGOUT}> <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">LOGOUT</span></button>
							</li>
							
			
			
						</ul>
					</div>
				</div>
				<div class="col p-0 m-0">
					<div>
						<h4 className='p-2 d-flex justify-content-center shadow'>Account Management System</h4>
                    </div>
                        <div >
							
                        <h2 className='p-2 d-flex justify-content-center '> <u>Account Detail</u></h2>
						<GroupChart/>
						<div><h1> </h1></div>
						
						<div id="box"><h4 style={{color:"white"}}>Hi {student.ContactPerson}</h4>
						<h4  style={{color:"white"}} className='p-2 d-flex justify-content-center '><strong>YOUR PAYMENT : </strong>{ student.Pay==='Payment Due'?<h4 style={{ color: 'red' }}>NOT DONE</h4>
							     :<h4 style={{ color: 'white' }}>DONE</h4>}</h4>
						</div>
						<div>
							<Link to={`/LKey/${ID}`} className='btn btn-success w-100 rounded-0 '>VIEW LICENSE KEY</Link>
						</div>
						
						
						

						</div>
                                
								
								
                                                              				
					</div>
                    
                    
					
				</div>
                
                </div>
		
);
}

export default SidebarEmployee;