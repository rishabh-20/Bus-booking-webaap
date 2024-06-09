import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import AdminLogin from './Component/AdminLogin';
import LoginUser from './Component/LoginUser';
import AdminSignup from './Component/AdminSignup';
import UserSignup from './Component/UserSignup';
import AdminHomePage from './Component/AdminHomePage';
import PageNotFound from './Component/PageNotFound';
import UserHomePage from './Component/UserHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/userlogin' element={<LoginUser/>}/>
          <Route path='/adminsignup' element={<AdminSignup/>}/>
          <Route path='/usersignup' element={<UserSignup/>}/>
          <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
          <Route path='/userhomepage' element={<UserHomePage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
