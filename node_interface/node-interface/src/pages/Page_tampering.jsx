import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import Web3 from "web3";

const abi = [{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"lightAddress","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"LightMalfunction","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"lightAddress","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"LightTampering","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"collectors","outputs":[{"internalType":"bool","name":"isRegistered","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"registerCollector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"registerStreetLight","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reportMalfunction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reportTampering","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"streetLights","outputs":[{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"address","name":"registeredBy","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

const web3 = new Web3("https://rpc-amoy.polygon.technology/");
const address = '0xEd5eEAe046E6792c3CA32731f56E146256876c48';

const Page_tampering = () => {
  const [eventData, setEventData] = useState([null]);

  const listen = async () => {
    const contract = new web3.eth.Contract(abi, address);
    const subscription = await contract.events.LightTampering({
        fromBlock: 0,
    });
    subscription.on("connected", function(subscriptionId){
        console.log(subscriptionId);
    });

    subscription.on('data', function(event){
        console.log(event); // same results as the optional callback above
        setEventData(event.event + " " + event.address);
    });
  }
  return (
    <>
    <div className={`bg-primary text-white h-screen`}>
      <div className={`flex flex-col grid justify-items-center pt-40`}>
        <div className={`flex flex-row text-[70px] grid justify-items-center`} >
          <Typewriter
            options={{
              loop: true,
              delay: 75,
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("Welcome To BLITZ")
                    .pauseFor(1000)
                    .deleteChars(5)
                    .typeString("The Future..")
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(300)
                    .start();
            }}
          />
        </div>

        <div className={`grid justify-items-center pt-20`}>
          <button type="button" onClick={listen} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
            Get Tampering Events
          </button>
        </div>
        <div>
            {JSON.stringify(eventData)}
        </div>
      </div>
    </div>
    </>
  )
}

export default Page_tampering