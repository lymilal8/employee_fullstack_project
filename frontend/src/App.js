import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Addemployee from './components/Addemployee';
import ViewallEmployee from './components/ViewallEmployee';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addemployee" element={<Main child={<Addemployee method="post" data={{name:"",address:'',phone:"",email:"",post:"",salary:""}}/>}/>}/>
      <Route path="/viewemployee" element={<Main child={<ViewallEmployee/>}/>}/>
      <Route path="/footer"  element={<Footer/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
