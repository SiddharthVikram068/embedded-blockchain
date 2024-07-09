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