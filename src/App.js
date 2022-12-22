import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Locations from "./Components/MainPage/Locations";
import Community from "./Components/MainPage/Community";
import Signin from "./Components/MainPage/Signin";
import SignUp from "./Components/MainPage/SignUp";
import Home from "./Components/MainPage/Home";


function App() {
  return (
    
    <div>

<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>

    <h1>Lets do it, my dream team!</h1>
    <Footer />
    </div>
  );
}

export default App;
