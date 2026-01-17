import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@headlessui/react";
import Home from "./pages/Home";
import Navbar from "./coman/Navbar";
import { Route, Routes } from "react-router";
import Exercise from "./pages/Exercise";
import Footer from "./coman/Footer";
import Aos from "aos";

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
    <Navbar/>
    <div className="mt-[64px]">
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Exercise" element={<Exercise/>}/>
      </Routes>
       <Footer/>
    </div>
    </>
  );
}

export default App;
