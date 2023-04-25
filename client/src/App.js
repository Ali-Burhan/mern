import logo from './logo.svg';
import {useEffect, useState} from "react"
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
function App() {
  const [user,setUser] = useState({})

  const handleUserChange = (newData) => {
    // const {name,email,password,confirmpassword} = newData;
    // setUser({name:newData.name,email:newData.email,password:newData.password,confirmpassword:newData.confirmpassword});
    setUser(newData)
    // console.log(user);
  }

  useEffect(()=>{
    // setUser(user);
    console.log(user);
  },[user])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/navbar' index element={<Navbar/>}/>
      <Route path='/' index element={<Home/>}/>
      <Route path='/login' element={<Login />}/>
        <Route path='/register'  element={<Signup/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
//     <div className="container">
//       <div className='row my-5'>
//         <div className='col-md-5'>
//         <form onSubmit={handleSubmit}>
//   <div class="mb-3 h-10">
//     <input type="text" className="h-10 form-control" name='name'  onChange={handleChange} value={formData.name} placeholder="Enter your Name" id="exampleInputName1" aria-describedby="emailHelp"/>
//   </div>
//   <div class="mb-3">
//     <input type="email" className="h-10 form-control" name='email' onChange={handleChange} value={formData.email} placeholder="Enter your E-mail" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//   </div>
//   <div class="mb-3">
//     <input type="password" className="form-control" name='password' onChange={handleChange} value={formData.password} placeholder="Enter your Password" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3">
//     <input type="password" className="form-control" name='confirmpassword' onChange={handleChange} value={formData.confirmpassword} placeholder="Confirm your Password" id="exampleInputPassword2"/>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//         </div>
//         <div className='col-md-5'></div>
//       </div>
//       </div>
  );
}

export default App;
