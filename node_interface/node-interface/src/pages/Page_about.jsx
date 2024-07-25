import React from 'react';
import { Button } from '../components';

const Page_about = () => {
  return (
    <div className={`bg-primary text-white`}>
      <div className={`flex flex-col grid justify-items-center pt-14`}>
        <div className={`flex flex-row text-[50px] grid justify-items-center`}>
          About us
        </div>
        <p className="text-white pt-5 text-[20px] text-center">
          BLITZ is a project made to transition from standard smart hardware to <br></br>open source
          Blockchain hardware
        </p>
        <div className="mt-5">
          <a href='https://react.dev/learn/installation'>
          <button className={`bg-white hover:bg-blue-100 text-black font-bold py-2 px-4 rounded m-5 h-14`}>
            DOWNLOAD REACT
          </button>
          </a>
          <a href='https://github.com/SiddharthVikram068/embedded-blockchain'>
          <button className='bg-gray-600 text-white font-bold py-2 px-4 rounded m-5 h-14 hover:bg-gray-700'>
            <span className='text-orange-600'>STAR US</span> ON GITHUB
          </button>
          </a>
        </div>

        <div className={`mt-5`}>
          <small className="text-white font-weight-bold mb-0 mr-2">
            *Proudly Developed by <a href='https://www.linkedin.com/in/rahul-m-83aa9a255/'>Rahul</a>, <a href='https://www.linkedin.com/in/shanmukh-praneeth/'>Shanmukh</a> and <a href='https://www.linkedin.com/in/siddharth-vikram-523835219/'>Siddharth</a>
          </small>
        </div>

        <div className='flex flex-row w-full justify-between pt-20 pb-20'>
          <div className='flex flex-col ml-10 feature-card p-4 items-center rounded-lg'>
            <h2 className={`text-[35px]`}>Decentralisation</h2>
            <p>
              BLITZ handles the infamous problem of <br></br> 
              a single point of failure by utilising<br></br>
              Blockchain technology and enabling it <br></br>
              to run on multiple devices.
            </p>
          </div>
          <div className='flex flex-col ml-10 feature-card p-4 items-center rounded-lg'>
            <h3 className={`text-[35px]`}>For Organisations</h3>
            <p>
              Organisations can run their own nodes on the <br></br>
              blockchain, this will lighten the load on <br></br>
              the authorities, and can provide the Organisation <br></br>
              with data for research purposes.
            </p>
          </div>
          <div className='flex flex-col mr-10 p-4 feature-card items-center rounded-lg'>
            <h3 className={`text-[35px]`}>For Developers</h3>
            <p>
              BLITZ can be configured for development <br></br>
              purposes. Developers looking for support <br></br>
              on BLITZ can go through the Github repo <br></br>
              and contact the contributers. 
            </p>
          </div>
        
        </div>

      </div>
    
    </div>
  )
}

export default Page_about