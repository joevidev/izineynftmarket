// SPDX-License-Identifier: GPLv3
// Developed by: @joevidev
// v1.0.0
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import './ERC721Connector.sol';
import './libraries/Counters.sol';

struct Listing
{
  address owner;
  bool is_active;
  uint256 token_id;
  uint256 price;
}

contract Marketplace is ReentrancyGuard  {
  using SafeMath for uint256;

  uint256 public listing_count = 0;
  address public izineyNft;
  address public izineyToken = 0x2db29c99f5F59293F933f7317760124AF1937eF3;
  mapping (uint256 => Listing) public listings;

   constructor(address _izinNft) {
        izineyNft = _izinNft;
    }

  ERC721 erc721_contract = ERC721(izineyNft);
  ERC20 erc20_contract = ERC20(izineyToken);

  function addListing(uint256 token_id, uint256 price) public nonReentrant
  {
    listings[listing_count] = Listing(msg.sender, true, token_id, price);
    listing_count = listing_count.add(1);
    erc721_contract.transferFrom(msg.sender, address(this), token_id);
  }

  function removeListing(uint256 listing_id) public nonReentrant
  {
    require(listings[listing_id].owner == msg.sender, "Must be owner");
    require(listings[listing_id].is_active, "Must be active");
    listings[listing_id].is_active = false;
    erc721_contract.transferFrom(address(this), msg.sender, listings[listing_id].token_id);
  }

  function buy(uint256 listing_id) public nonReentrant
  {
    require(listings[listing_id].is_active, "Must be active");
    listings[listing_id].is_active = false;
    erc20_contract.transferFrom(msg.sender, listings[listing_id].owner, listings[listing_id].price);
    erc721_contract.transferFrom(address(this), msg.sender, listings[listing_id].token_id);
  }

  function getActiveListings(uint256 index) public view returns(uint256)
  {
    uint256 j;
    for(uint256 i=0; i<listing_count; i++)
    {
      if(listings[i].is_active)
      {
        if(index == j)
        {
          return i;
        }
        j+=1;
      }
    }
    return 0;
  }

  function getListingsByOwner(address owner, uint256 index) public view returns(uint256)
  {
    uint256 j;
    for(uint256 i=0; i<listing_count; i++)
    {
      if(listings[i].is_active && listings[i].owner == owner)
      {
        if(index == j)
        {
          return i;
        }
        j+=1;
      }
    }
    return 0;
  }

  function getListingsByOwnerCount(address owner) public view returns(uint256)
  {
    uint256 result;
    for(uint256 i=0; i<listing_count; i++)
    {
      if(listings[i].is_active && listings[i].owner == owner)
      {
        result+=1;
      }
    }
    return result;
  }

  function getActiveListingsCount() public view returns(uint256)
  {
    uint result;
    for(uint i=0; i<listing_count; i++)
    {
      if(listings[i].is_active)
      {
        result+=1;
      }
    }
    return result;
  }
}