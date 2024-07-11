[![MIT License][license-shield]][license-url]


<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/SiddharthVikram068/Best-README-Template/blob/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">BLITZ (Blockchain Light Integrity and Tampering Zeroizer)</h1>

</div>


[![Status: In development][healthy-badge]][healthy-markdown]

## Introduction 

Welcome to BLITZ, the state-of-the-art solution designed to revolutionize the monitoring and security of urban street lighting systems. By harnessing the power of the IOTA blockchain and the advanced capabilities of the Hardhat framework, BLITZ delivers a comprehensive and intelligent system for detecting street light malfunctions and preventing tampering.

Street lights are vital to the safety, energy efficiency, and overall operation of modern smart cities. However, maintaining these lights and ensuring their proper function can be a complex task, compounded by the risks of tampering and unexpected failures. BLITZ addresses these challenges head-on with an innovative approach that combines blockchain technology and embedded systems for superior monitoring and maintenance.

## Overview 

BLITZ deploys embedded sensors within street lights that continuously monitor their operational status and detect tampering attempts. These sensors communicate with a central hub that aggregates the data and records it onto the IOTA blockchain using smart contracts developed with the Hardhat framework.
Let's go over the key features of BLITZ:
- <b>Tampering Detection:</b> BLITZ continually monitors street lights for tampering, instantly logging any suspicious activity on the IOTA blockchain to guarantee data integrity and transparency.
- <b>Malfunction Monitoring:</b> Our system provides real-time detection and reporting of street light malfunctions, enabling rapid maintenance responses and minimizing downtime.
- <b>Decentralized and Secure:</b> Utilizing the IOTA blockchain, BLITZ ensures a decentralized and secure system for record-keeping, eliminating single points of failure and safeguarding against data breaches.
- <b>Efficient Resource Management:</b> With BLITZ's real-time monitoring, city authorities can optimize maintenance schedules and resource allocation, leading to significant cost savings and enhanced operational efficiency.
- <b>Scalability and Flexibility:</b> Built on the Hardhat framework, BLITZ is designed to be highly scalable and adaptable to various urban environments and transition to smart cities.


## Working code 

Street_lights.sol: smart contract to register street lights and collectors. Also emit events of tampering and malfunctions
```solidity

// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract StreetLightMonitoring {
    struct StreetLight {
        bool isRegistered;
        address registeredBy;
    }

    struct Collector {
        bool isRegistered;
    }

    mapping(address => StreetLight) public streetLights;
    mapping(address => Collector) public collectors;

    event LightMalfunction(address indexed lightAddress, string message);
    event LightTampering(address indexed lightAddress, string message);

    modifier onlyRegisteredLight() {
        require(streetLights[msg.sender].isRegistered, "Street light not registered");
        _;
    }

    modifier onlyRegisteredCollector() {
        require(collectors[msg.sender].isRegistered, "Collector not registered");
        _;
    }

    function registerStreetLight() public {
        require(!streetLights[msg.sender].isRegistered, "Street light already registered");
        streetLights[msg.sender] = StreetLight(true, msg.sender);
    }

    function registerCollector() public {
        require(!collectors[msg.sender].isRegistered, "Collector already registered");
        collectors[msg.sender] = Collector(true);
    }

    function reportMalfunction() public onlyRegisteredLight {
        emit LightMalfunction(msg.sender, "Malfunctioned");
    }
    function reportTampering() public onlyRegisteredLight {
        emit LightTampering(msg.sender, "Tampered");
    }
}
```



[healthy-badge]: https://img.shields.io/badge/OSS%20Status-Healthy-darkgreen.svg
[healthy-markdown]: https://github.com/martinpeck/oss-project-status/blob/master/healthy/OSS_STATUS.md
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: [https://github.com/othneildrew/Best-README-Template/graphs/contributors](https://github.com/SiddharthVikram068/embedded-blockchain/settings/access?query=filter%3Acollaborators)
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
