import React from "react";
import Web3 from "web3";
const abi = [{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"lightAddress","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"LightMalfunction","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"lightAddress","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"LightTampering","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"collectors","outputs":[{"internalType":"bool","name":"isRegistered","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"registerCollector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"registerStreetLight","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reportMalfunction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reportTampering","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"streetLights","outputs":[{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"address","name":"registeredBy","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];

const web3 = new Web3("https://rpc-amoy.polygon.technology/");
const address = '0xEd5eEAe046E6792c3CA32731f56E146256876c48';




const Button = ({ styles }) => {
  const listen = async () => {
    const contract = new web3.eth.Contract(abi, address);
    const subscription = await contract.events.LightMalfunction({
        fromBlock: 0,
    });
    subscription.on("connected", function(subscriptionId){
        console.log(subscriptionId);
    });

    subscription.on('data', function(event){
        console.log(event); // same results as the optional callback above
    });
  }
  return (
    <button type="button" onClick={listen} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Events
    </button>
  )
};

export default Button;