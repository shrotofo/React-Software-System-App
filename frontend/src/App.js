import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './LoginPages/Login';
import LoginEmployee from './LoginPages/loginEmployee';
import UserLogin from './LoginPages/UserLogin';
import EmailPasswordPage from './LoginPages/EmailPasswordPage';
import PasswordReset from './LoginPages/PasswordReset';
import Signup from './SignupPages/Signup';
import UserSignup from './SignupPages/userSignup';
import UserSignupID from './SignupPages/userSignupID';
import Home from './AdminComponents/Home'
import Create from './AdminComponents/Create';
import Activation from './AdminComponents/Activation';
import Edit from './AdminComponents/Edit';
import Sidebar from './AdminComponents/Sidebar';
import AddProducts from './AdminComponents/AddProducts';
import Encrypt from './AdminComponents/Encrypt';
import Dashboard from "./GroupComponents/dashboard";
import EditEmployee from './GroupComponents/editEmployee';
import SidebarEmployee from './GroupComponents/SidebarEmployee';
import PayNow from './GroupComponents/PayNow';
import CreateUser from './GroupComponents/createuser';
import ViewUsers from './GroupComponents/viewUsers';
import SidebarUser from './SidebarUser';
import TotalBill from './TotalBill';
import LKey from './GroupComponents/LKey';
import Product_Register from './SignupPages/Product_Register';
import ViewProduct from './AdminComponents/ViewProduct';

//SAS Model Manager is a web-based application that helps register, modify, track, score, publish and report on analytical models. SAS Model Management is a broader term that focuses on providing users the ability to register, test, deploy, monitor and retrain open source models.
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/loginEmployee' element={<LoginEmployee/>}></Route>
      <Route path='/EmailPasswordPage' element={<EmailPasswordPage/>}></Route>
      <Route path='/PasswordReset' element={<PasswordReset/>}></Route>
      <Route path='/UserLogin' element={<UserLogin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Product_Register' element={<Product_Register/>}></Route>
      <Route path='/userSignup/:ID' element={<UserSignup/>}></Route>
      <Route path='/userSignupID' element={<UserSignupID/>}></Route>
      <Route path='/homeAdmin' element={<Home/>}></Route>
      <Route path='/addProducts' element={<AddProducts/>}></Route>
      <Route path="/Create" element={<Create />} />
      <Route path="/Activation" element={<Activation />} />
      <Route path="/edit/:ID" element={<Edit />} />
      <Route path="/editEmployee/:ID" element={<EditEmployee />} />
      <Route path="/home/:ID" element={<Dashboard />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/SidebarEmployee/:ID" element={<SidebarEmployee />} />
     <Route path="/PayNow/:ID" element={<PayNow/>} />
     <Route path="/CreateUser/:ID" element={<CreateUser/>} />
     <Route path="/viewUsers/:ID" element={<ViewUsers/>} />
     <Route path="/SidebarUser/:EMAIL" element={<SidebarUser />} />
     <Route path="/Encrypt/:ID" element={<Encrypt />} />
     <Route path='/TotalBill/:ID' element={<TotalBill/>}></Route>
     <Route path='/Lkey/:ID' element={<LKey/>}></Route>
     <Route path="/ViewProduct" element={<ViewProduct/>}></Route>
     


    </Routes>
    </BrowserRouter>
  );
}

export default App;
