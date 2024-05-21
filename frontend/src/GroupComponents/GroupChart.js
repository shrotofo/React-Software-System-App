import React,{useEffect,useState} from 'react';
import axios from "axios"
import {Link,useParams} from 'react-router-dom';
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import {
	MDBBtn,
	MDBRow,
	MDBCol,
	MDBInput,
  
  }
  from 'mdb-react-ui-kit';
  import { Doughnut } from 'react-chartjs-2';
  import { Line } from 'react-chartjs-2';



function GroupChart () {
    const{ID}=useParams();
    const[data1,setData1]=useState({current:0})
    const[data0,setData0]=useState({max:0})
    const[Label,setLabel]=useState([])
    const[PieData,setPieData]=useState([])

    const[Details,setDetails]=useState()

     //line graph 
     const[Date,setDate]=useState([])
     const[jan,setjan]=useState(0)
     const[feb,setfeb]=useState(0)
     const[march,setmarch]=useState(0)
     const[april,setapril]=useState(0)
     const[may,setmay]=useState(0)
     const[june,setjune]=useState(0)
     const[july,setjuly]=useState(0)
     const[aug,setaug]=useState(0)
     const[sept,setsept]=useState(0)
     const[oct,setoct]=useState(0)
     const[nov,setnov]=useState(0)
     const[dec,setdec]=useState(0)
     let arrayjan=[]
     let arrayfeb=[]
     let arraymarch=[]
     let arrayapril=[]
     let arraymay=[]
     let arrayjune=[]
     let arrayjuly=[]
     let arrayaug=[]
     let arraysept=[]
     let arrayoct=[]
     let arraynov=[]
     let arraydec=[]
  
   
    useEffect(()=>{
      let label=[]
      let pieData=[]
      axios.get('http://localhost:3311/FetchDate')
      .then(res=>{
       
          setDate(res.data);
          }).catch(err=>console.log(err));
        axios.get('http://localhost:3311/Fetchcurrent/'+ID)
        .then(res=>
            {
                let current=res.data.length;
                setData1({current:current})}).catch(err=>console.log(err));


        axios.get('http://localhost:3311/Fetchmax/'+ID)
        .then(res=>
            { 
                let max=res.data[0].Users;
                setData0({max:max})}).catch(err=>console.log(err));

       
                axios.get('http://localhost:3311/NewProductBilling/'+ID)
                .then(res=>{
                  setDetails(res.data)
                  }).catch(err=>console.log(err))
                  Details?.map((data,index)=>{
                    label.push(data.MNAME)
                    pieData.push(1)
                    
                    

                  })
                  setLabel(label)
                  setPieData(pieData)


    },[Label])

   
   

    useEffect(()=>{
      for(let i=0;i<Date.length;i++){
         
        if (Date[i].RegisterDate.slice(5,7)==='01'){
            arrayjan.push(1);
            setjan(arrayjan.length)
            
          }
          if (Date[i].RegisterDate.slice(5,7)==='02'){
            arrayfeb.push(1);
            setfeb(arrayfeb.length)
            
          }
           if (Date[i].RegisterDate.slice(5,7)==='03'){
            arraymarch.push(1);
            setmarch(arraymarch.length)
            
          }
           if (Date[i].RegisterDate.slice(5,7)==='04'){
            arrayapril.push(1);
            setapril(arrayapril.length)
           
          }
          if (Date[i].RegisterDate.slice(5,7)==='05'){
            arraymay.push(1);
            setmay(arraymay.length)
           
          }
            if (Date[i].RegisterDate.slice(5,7)==='06'){
            arrayjune.push(1);
            setjune(arrayjune.length)
          }
           if (Date[i].RegisterDate.slice(5,7)==='07'){
            arrayjuly.push(1);
            setjuly(arrayjuly.length)
          
          }
         if (Date[i].RegisterDate.slice(5,7)==='08'){
            arrayaug.push(1);
            setaug(arrayaug.length)
           
          }
            if (Date[i].RegisterDate.slice(5,7)==='09'){
            arraysept.push(1);
            setsept(arraysept.length)
          
          }
          if (Date[i].RegisterDate.slice(5,7)==='10'){
            arrayoct.push(1);
            setoct(arrayoct.length)
         
          }
          if (Date[i].RegisterDate.slice(5,7)==='11'){
            arraynov.push(1);
            setnov(arraynov.length)
           
          }
          else{
            arraydec.push(1);
            setdec(arraydec.length)
    
          }
         }},[Date.length])//run only if jan.length changes

         ChartJS.register(
          CategoryScale,
          LinearScale,
          PointElement,
          LineElement,
          Title,
          Tooltip,
          Legend
        );
  
      
  
      const options1 = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'No of Registered Users in different Months',
            },
            maintainAspectRatio: false 
          },
        };
        //line graph 
        
        const labels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
         const line = {
          labels1,
          datasets: [
            {
              label: 'Registered Users',
              data: {'January':jan,'February':feb,'March':march,'April':april,'May':may,'June':june,'July':july,'August':aug,'September':sept,'October':oct,'November':nov,'December':dec},
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        };
        
  
    
    ChartJS.register(ArcElement, Tooltip, Legend);
    
    const data = {
        labels: ['Remaining Accounts', 'Existing Accounts'],
        datasets: [
          {
            label: 'User Accounts',
            data: [data0.max-data1.current,data1.current],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)'],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              
            ],
            borderWidth: 1,
           
          },
        ],
      };

      ChartJS.register(CategoryScale,LinearScale,BarElement,Title, Tooltip, Legend);
      
    
      
   
      
      
      
      const DonotData = {
        labels: Label,
        datasets: [
          {
            label: 'Selected Modules',
            data: PieData,
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };

      

      return(
        <MDBRow>
        <div className="col-md-4">
      <Pie data={data} height={10}
      width={10}  options={{ maintainAspectRatio: false }}/>
      </div>
      
      
      <div className="col-md-4">
     <Line options={options1} data={line} height={10} width={10} />
     </div>
     <div className="col-md-4">
     <Doughnut data={DonotData} height={10}
      width={10}  options={{ maintainAspectRatio: false }}/>
     </div>
     
        
        </MDBRow>
        
             
        );
    
  };
  export default GroupChart;