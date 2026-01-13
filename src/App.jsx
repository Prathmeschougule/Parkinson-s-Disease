import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@headlessui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#2563EB] h-screen w-screen text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">
          Exercises for Parkinson's Patients
        </h1>
        <p className="text-xl mt-4">Specially designed physiotherapy
          exercises to improve mobility, balance, <br /> and quality of life</p>
        <Button className="rounded bg-gray-800 px-4 py-2 text-xl text-white data-active:bg-gray-700 data-hover:bg-gray-700 mt-3">
           Coming Soon...
        </Button>
      </div>
    </>
  );
}

export default App;
