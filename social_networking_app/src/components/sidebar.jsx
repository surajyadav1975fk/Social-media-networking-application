import React, { useState } from 'react';
import { HomeIcon, UserGroupIcon, FolderIcon, ArrowRightStartOnRectangleIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Correct for v2
import { useContext } from 'react';
import MyContext from '../context/createContext';

const sidebar = () => {

  const {handlelogout,getfollowers,followers}=useContext(MyContext);
  
  const [flag,setflag]=useState(false);
  
  const handlefollowerclick=()=>{
    getfollowers();
    setflag(!flag);
  }
  return (
    <div className="flex flex-col w-56 h-screen bg-gray-400 text-white p-4">
      <nav className="flex flex-col space-y-4">
        <a href="/profile" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <HomeIcon className="w-6 h-6 mr-3" />
          My Profile
        </a>
        <a href="#" onClick={handlefollowerclick} className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <UserGroupIcon className="w-6 h-6 mr-3" />
          Your Followers
        </a>
        {flag && <div className='bg-gray-200 rounded-lg'>{(followers.map((name)=>(<div key={name} className='text-gray-900 m-2 font-bold text-center text-1xl'>{name}</div>)))}</div>}
        <a href="/profile" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <FolderIcon className="w-6 h-6 mr-3" />
          Your Posts
        </a>
        <a href="/" onClick={handlelogout} className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-700">
          <ArrowRightStartOnRectangleIcon className="w-6 h-6 mr-3" />
          Logout
        </a>
      </nav>

      <hr className="my-4 border-gray-900" />

      

      <div className="flex-grow"></div>

      <a href="#" className="flex items-center text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 p-2 rounded-lg hover:bg-gray-500">
        <Cog8ToothIcon className="w-6 h-6 mr-3" />
        Settings
      </a>
    </div>
  );
};

export default sidebar;