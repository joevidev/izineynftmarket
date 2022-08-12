// SPDX-License-Identifier: GPLv3
// Developed by: @joevidev
// v1.0.0

pragma solidity ^0.8.10;

import './ERC721Connector.sol';

contract IzineyNFT is ERC721Connector {

    string[] public IzineyNFTS;

    mapping(string => bool) _izineyNFTExists;

    function mint(string memory _iziney) public {

        require(!_izineyNFTExists[_iziney], 'Error - token already exists');

        IzineyNFTS.push(_iziney);
        uint _id = IzineyNFTS.length -1;

        _mint(msg.sender, _id);

        _izineyNFTExists[_iziney] = true;
    }

    constructor() ERC721Connector('Iziney','IZIN') {}

}