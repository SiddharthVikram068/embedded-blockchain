import React from "react";
import styles from "./style";
import { NavBar, Malfunction, Tampering, Coming_soon, Button, Hero } from "./components";
import { Link, Route, Routes } from "react-router-dom";
import { Page_about, Page_malfunction } from "./pages";
import Main_heading from './components/Main_heading';


const App = () => {
  return (
    <>
    <div className="bg-primary w-full overflow-hidden">


      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <Hero />
        </div>
      </div>

      <div className="flex flex-row justify-evenly justify-items-center items-center w-full ml-20">
        <h1 className="flex-1 font-poppins font-semibold text-[40px] text-white leading-[50px]">
          <span className="text-gradient">Event options</span>{" "}
        </h1>
      </div>

      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex justify-evenly mt-20">
            <Malfunction />
            <Tampering />
          </div>
          <div className="flex justify-evenly">
            <Coming_soon />
            <Coming_soon />
          </div>
        </div>
      </div>
    
    </div>
    </>

  )
}

export default App

