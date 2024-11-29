"use client";
import {useState} from 'react';
export default function Home()  {
  
  const [isOpen, setIsOpen] = useState(false);
  return(

    <div className="max-w-[1440px] bg-red-300 min-h-screen mx-auto">
      <nav className="flex items-center justify-between px-4 py-2 bg-red-500 ">
        <div className="text-white font-bold text-xl">
          <div className="flex space-x-4">
          <a href="#" className="text-red-800 ">Home</a>
          <a href="#" className="text-red-800">About</a>
          <a href="#" className="text-red-800">Project</a>
          <a href="#" className="text-red-800">Contact</a>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
          &#9776;
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-start space-y-2 mt-2 md:hidden">
          <a href="#" className="text-red-800 ">Home</a>
          <a href="#" className="text-red-800">About</a>
          <a href="#" className="text-red-800">Project</a>
          <a href="#" className="text-red-800">Contact</a>
        </div>
      )}
       
    </div>
  );
}


  
