// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract CertificateVerification{
    address public owner;
    struct Certificate{
        string universityName;
        string certificateHash;
        string registrationNumber;
        string photoHash;
    }

    struct Registrar{
        string universityName;
        address registrarAddress;
    }

    mapping(address => Registrar) public registrar;
    mapping(string => mapping(address => Registrar)) public registrars; //mapping of univName to address of registrar
    mapping(string => mapping(string => Certificate)) public certificate;//mapping of univName to registration number
    mapping(string => mapping(address => bool)) public isRegistrar;
    mapping(string => mapping(string => bool)) public isAdded;//mapping of univName to registration number

    event CertificateAdded(string universityName, string registrationNumber, string hash, bytes32 message);
    event CertificateFetched(bytes32 message);

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner{
        require(msg.sender == owner,"Only owner can access this feature");
        _;
    }

    function assignRegistrar(string calldata _universityName, address _address) public onlyOwner{
        isRegistrar[_universityName][_address] = true;
        Registrar memory newRegistrar = Registrar({
            universityName:_universityName,
            registrarAddress:_address
        });
        registrars[_universityName][_address] = newRegistrar;
        registrar[_address] = newRegistrar;
    }

    function isAddressRegistrar(address _address) public view returns (bool) {
        return isRegistrar[registrar[_address].universityName][_address];
    }


    function getRegistrar(address _address) public view returns(Registrar memory){
        Registrar storage _registrar = registrar[_address];
        return _registrar;
    }

    function _isOwner(address _address) public view returns (bool){
        if(_address == owner){
            return true;
        }
        return false;
    }


    function addCertificate(string calldata _universityName, string calldata _registrationNumber, string calldata _hash, string calldata _photoHash) public {
        require(!isAdded[_universityName][_registrationNumber],"Student already added");
        Registrar storage _registrar = registrars[_universityName][msg.sender];
        bool isValid = compareStrings(_registrar.universityName,_universityName);
        require(isValid,"Please add only certificates that belong to your unviersity");
        Certificate memory newCertificate = Certificate({
            universityName:_universityName,
            certificateHash:_hash,
            registrationNumber:_registrationNumber,
            photoHash: _photoHash
        });
        certificate[_universityName][_registrationNumber] = newCertificate;
        isAdded[_universityName][_registrationNumber] = true;
        emit CertificateAdded(_universityName, _registrationNumber, _hash, "Certificate Uploaded succesfully");
    }

    function compareStrings(string memory a, string memory b) public pure returns(bool){
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function getCertificate(string calldata _universityName, string calldata _registrationNumber) public returns(Certificate memory){
        require(isAdded[_universityName][_registrationNumber],"Certificate with entered credentials is not present");
        Certificate storage _certificate = certificate[_universityName][_registrationNumber];
        emit CertificateFetched("Certificate fetched");
        return _certificate;
    }

}