

import CryptoJS from "crypto-js";
import {useParams,useNavigate} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import axios from "axios"

function Encrypt() {
    const{ID}=useParams();
    const navigate = useNavigate();    
    //fetch values
    useEffect(()=>{
        axios.get('http://localhost:3311/read/'+ID)
        .then(res=>
            {
            
            const bytes = CryptoJS.AES.decrypt(res.data[0].Lkey, "XkhZG4fW2t2W");
            const data1 = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setDecrptedData(data1);
            }).catch(err=>console.log(err));
    },[])


  const [decrptedData, setDecrptedData] = useState("");


  

  

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'> 
    <div className='w-500 bg-white rounded p-3'>
      <h1 class="d-flex  justify-content-center align-items-center">Decrypted Text</h1>
      <h4>{decrptedData}</h4>

    </div>
    </div>
    
  );
}

export default Encrypt;