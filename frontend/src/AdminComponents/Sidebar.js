
import {Link,} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import axios from "axios";
import Chart from './Charts';
import '../style.css'
import {
	MDBBtn,
	MDBRow,
	MDBCol,
	MDBInput,
  
  }
  from 'mdb-react-ui-kit';



function Sidebar() {

    const[student,setStudent]=useState([])
	const[data1,setData1]=useState({active:0})
    const[data0,setData0]=useState({deactive:0})
	const[LOG,setLOG]=useState()

    
    useEffect(()=>{
        axios.get('http://localhost:3311/read/'+0)
        .then(res=>{
            console.log(res.data)
            console.log(res.data)
        setStudent(res.data[0]);
    })
        .catch(err=>console.log(err))
		axios.get('http://localhost:3311/getLOGIN')
        .then(res=>{
            console.log(res.data,"ABC")
			setLOG(res.data.length)
          
    })
        .catch(err=>console.log(err))

		axios.get('http://localhost:3311/FetchStatus1')
        .then(res=>
            {
                let active=res.data.length;
                setData1({active:active})

            }
        )
        //console.log(res.data))
        .catch(err=>console.log(err));


        axios.get('http://localhost:3311/FetchStatus0')
        .then(res=>
            {
                let deactive=res.data.length;
                setData0({deactive:deactive})

            }
        )
        //console.log(res.data))
        .catch(err=>console.log(err));

    },[])


return(
<div className="container-fluid">
			<div className="row flex-nowrap">
				<div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
					<div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
						<a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
							<span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
						</a>
						<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
							<li>
								<Link to="/Sidebar" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
									<i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
							</li>
							<li>
								<Link to="/homeAdmin" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">VIEW CLIENTS</span> </Link>
							</li>
							<li>
								<Link to="/viewproduct" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">VIEW PRODUCTS</span> </Link>
							</li>
							<li>
								<Link to="/create" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Create</span></Link>
							</li>
							<li>
								<Link to="/addProducts" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Add Products</span></Link>
							</li>
							<li>
								<Link to="/Activation" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Active/Deactive Accounts</span></Link>
							</li>
							<li >
								<Link to="/" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></Link>
							</li>
						</ul>
					</div>
				</div>
				<div class="col p-0 m-0 ">
					<div >
						<h4 className='p-2 d-flex justify-content-center shadow'>Admin Management System</h4>
                    </div>
                        <div  >
                        <h2 className='p-2 d-flex justify-content-center '> <u>Admin-logged in :{LOG} </u></h2>
						<Chart/>
						
						<div id="box"><h3 style={{color:"#90EE90"}}>NO OF ACTIVE ACCOUNTS : {data1.active}</h3><h3 style={{color:"red"}}>NO OF DEACTIVE ACCOUNTS : {data0.deactive}</h3>
						
						</div>
                               
					</div>
					
                    
                    
					
				</div>
                
                </div>
		</div>
);
}

export default Sidebar;