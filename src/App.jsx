import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@headlessui/react";
import Home from "./pages/Home";
import Navbar from "./coman/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App;
