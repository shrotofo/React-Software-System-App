import React,{useEffect,useState} from 'react';
import axios from "axios"
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
  import { Line } from 'react-chartjs-2';



function Chart () {
    const[data1,setData1]=useState({active:0})
    const[data0,setData0]=useState({deactive:0})
    const[Label,setLabel]=useState([])
    const[Time,setTime]=useState([])
   
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
      let bar=[]
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

        
        //console.log(res.data))
       axios.get('http://localhost:3311/FetchDate')
        .then(res=>{
         
            setDate(res.data);
            }).catch(err=>console.log(err));

            axios.get('http://localhost:3311/Fetchbar')
        .then(res=>{
         
            console.log(res.data,"h")
            res.data?.map((data,i)=>{
              label.push(data.PNAME)
              bar.push(data.Time)

            })
            }).catch(err=>console.log(err));

            setLabel(label)
            setTime(bar)



         
},[]);
console.log(Label,Time,"j")


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






   
   

    

     
    


 //pie chart
 ChartJS.register(ArcElement, Tooltip, Legend);
const data = {labels: ['Deactive Accounts', 'Active Accounts'],datasets:
              [{
            label: 'Number of Accounts',
            data: [data0.deactive,data1.active],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)'],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',],
            borderWidth: 1,
           },],};





           

      ChartJS.register(CategoryScale,LinearScale,BarElement,Title, Tooltip, Legend);
      
  
      
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
           maintainAspectRatio: false ,
          title: {
            display: true,
            text: 'Products Purchases over Months',
          },
        },
        
      };
      //bar graph 
      
      const labels = Label
      
       const dataBar = {
        labels,
        datasets: [
         
          {
            label: 'Purchase Duration(Months)',
            data: Time,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
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

      
      

 






      return(
      
        
       
      
            

         
        <MDBRow>
        
        <div className="col-md-4">
      <Pie data={data} height={11}
      width={10} options={{ maintainAspectRatio: false }}/>
      </div>
      <div className="col-md-4">
      
     <Bar options={options} data={dataBar} height={11} width={10} />
     </div>
     <div className="col-md-4">
     <Line options={options1} data={line} height={11} width={10} />
     </div>
     
     
     
    </MDBRow>
    
        
             
        );
    
  };
  export default Chart;