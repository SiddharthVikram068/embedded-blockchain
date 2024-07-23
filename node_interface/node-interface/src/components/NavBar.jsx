import {useState} from 'react'

// import {logo} from "../assets";
import {navLinks} from "../constants";
import { logo } from '../assets';

const NavBar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
     <img src={logo} alt="BLITZ" className="w-[30px] h-[32px] "/>
    </nav>
  )
}

export default NavBar