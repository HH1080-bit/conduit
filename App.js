import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/signIn";
import NavBar from "./Components/Navbar/Navbar";
import Signup from "./Pages/signup";



function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signIn" element={<SignIn/>}></Route>
          <Route path="/signUp" element={<Signup/>}></Route>
      
      </Routes>

    </div>
  );
}

export default App;
