import Assets from "./Assets/Assets";
import Forget_Password from "./Forget_Password/Forget_Password";
import Empdetails from "./Hr management/employee/Empdetails";
import Hr from "./Hr_Home/Hr_Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/signUp" element={<Main/>}/>
      <Route path="/home" element={<Hr/>}/>
      <Route path="/Forget_Password" element={<Forget_Password/>}/>
      <Route path="/empdetails" element={<Empdetails/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
