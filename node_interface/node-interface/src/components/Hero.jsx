import React from 'react';
import styles from '../style';
import Main_heading from './Main_heading';
import { robot } from '../assets';

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">The</span> Next Generation{" "}
            <span className="text-white">of </span> Infrastructure
          </p>
        
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Make India <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Smarter</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Main_heading />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Utitlising Blockchain to create a new management system for transistioning towards 
          smart cities. Making monitoring and data easier
        </p>
      
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] border-radius: 15px box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    
    </section>
  )
}

export default Hero