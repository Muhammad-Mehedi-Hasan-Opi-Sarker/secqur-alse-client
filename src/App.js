import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Data from './component/Data/Data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
