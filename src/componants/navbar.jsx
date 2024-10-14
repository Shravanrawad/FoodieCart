import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setsearchvalue } from '../redux/cartslice';

function Navbar() {

  const [input, setinput] = useState('');
  const dispatch = useDispatch();
  dispatch(setsearchvalue(input)); 

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between py-5 px-8 shadow-md bg-white mb-10">
    
      <div className="flex items-center gap-4">
        <img 
          src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png" 
          alt="Pizza Icon" 
          className="w-10 h-10"
        />
        <div>
          <h3 className="text-gray-500 font-medium">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-3xl font-bold text-gray-800">MunchMate</h1>
        </div>
      </div>

    
      <div className="mt-4 lg:mt-0 w-full lg:w-[30vw]">
        <input 
          type="search" 
          name="search" 
          placeholder="Search for dishes..." 
          onChange={(e) => setinput(e.target.value)}
          autoComplete="off" 
          className="p-3 border border-gray-300 rounded-full w-full outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </nav>
  );
}

export default Navbar;
