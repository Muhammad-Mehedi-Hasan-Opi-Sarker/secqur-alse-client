import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Data from './component/Data/Data';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
