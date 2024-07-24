import {useState} from 'react';
import {navLinks} from "../constants";
import { logo } from '../assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav className="w-full flex py-6 justify-between items-center navbar">
     <div className='flex'>
      <img src={logo} alt="BLITZ" className="w-[30px] h-[32px] "/>
      <p className={`ml-3 text-white font-poppins font-normal text-[16px] align-middle`}>BLITZ</p>
     </div>
     <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
       <li 
         className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
       >
       <Link to="/">Home</Link>
       </li>
       <li className={`font-poppins mx-20 font-normal cursor-pointer text-[16px] text-white`}> <Link to="/abouts">About</Link>  </li>
     </ul>
    </nav>
    </>
  )
}

export default NavBar