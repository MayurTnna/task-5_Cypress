import logo from "./logo.svg";
import "./App.css";
import ProductDisplay from "./components/ProductDisplay";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Signup from "../src/Forms/Signup";
import Login from "./Forms/Login";
import UserProfile from "./Forms/UserProfile";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
     <Toaster/>
      <BrowserRouter>
        <Routes>
        
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/UserProfile" element={<UserProfile/>}/> 

          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/product" element={<ProductDisplay />} />
        </Routes>
        {/* <ProductDisplay/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
