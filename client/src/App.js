import UserSignUp from "./components/pages/UserSignUp";
import Home from "./components/pages/Home";
// import FileUpload from "./components/addproducts/AddCpu";
import Products from "./components/pages/Products";
import Cpu from "./components/pages/Cpu";
import Ram from "./components/pages/Ram";
import Notpage from "./components/pages/Notpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product/ram" element={<Ram/>} />
                <Route path='/product/cpu' element={<Cpu/>}/>
                <Route path='/products' element={<Products />} />
                <Route path='/signup' element={<UserSignUp />} />
                {/* <Route path='/addcpu' element={<FileUpload/>} /> */}
                <Route path='/' element={<Home />} />
                <Route path="*" element={<Notpage/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;

 