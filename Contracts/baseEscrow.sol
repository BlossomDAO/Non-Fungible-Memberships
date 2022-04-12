// contracts/Escrow/Escrow.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../ITefariaAccessControls.sol";

contract Escrow is ReentrancyGuard, IERC721Receiver {
    ITefariaAccessControls public _accessControls;

    /**
     * @rentType is direct or public
     * direct is to allow only a specific address to rent the nft
     * public is to allow anyone to rent the nft
     *
     */
    struct NFTForEscrow {
        address nftAddress; //address of NFT collection 
        address owner; // address of original NFT owner
        address renter; // address of person CURRENLTY renting
        uint256 tokenId; //toked ID of NFT in collection
        uint256 monthlyFee; //Fee paid per month to rent
        uint256 listedDate; // Date Listed
        uint256 lockedMonths; //Months locked in SC for available rent
    } 

    // nftAddress => tokenId => NFTForEscrow
    //ex.
    // Add2 => 1 => NFTSTRUCT1 
    //      => 2 => NFTSTRUCT2 
    //      => 3 => NFTSTRUCT3 
    // Add3 => 1 => NFTSTRUCT1 
    // Add4 => 1 => NFTSTRUCT1 
    mapping(address => mapping(uint256 => NFTForEscrow)) public nfts;

    /// @dev event when an nft is listed for rent
    event NFTListed(
        address indexed nftAddress,
        address indexed owner,
        address indexed renter,
        uint256 tokenId,
        uint256 monthlyFee,
        uint256 listedDate,
        uint256 lockedMonths
    );

    /// @dev event when an nft is unlisted for rent
    event NFTUnlisted(
        address indexed owner,
        address indexed nftAddress,
        uint256 tokenId
    );

    /// @dev event when an nft is rented
    event NFTRented(
        address indexed renter,
        address indexed nftAddress,
        uint256 tokenId
    );

    constructor(address accessControl) {
        _accessControls = ITefariaAccessControls(accessControl);
    }

    modifier onlyAdmin() {
        require(_accessControls.hasAdminRole(msg.sender));
        _;
    }

    modifier isOwnerOfNFT(address nftAddress, uint256 tokenId) {
        require(IERC721(nftAddress).ownerOf(tokenId) == msg.sender);
        _;
    }

    /// @dev Send nft for rent
    function listItem(
        address nftAddress,        
        uint256 tokenId,
        uint256 monthlyFee,
        uint256 lockedMonths        
       
    ) external nonReentrant isOwnerOfNFT(nftAddress, tokenId) {

        require((block.timestamp + (lockedMonths * 30 days)) > block.timestamp, "Unlist Date needs to be in the future");

        address NFTowner = msg.sender;
        uint listedDate =block.timestamp;
       
        // Transfer the nft to the escrow contract
        IERC721(nftAddress).safeTransferFrom(NFTowner, address(this), tokenId);

        address RenterAddress = address(this);


        // Add the nft to mapping
        NFTForEscrow memory nft = NFTForEscrow({
            nftAddress: nftAddress,
            owner: NFTowner,
            renter: RenterAddress,
            tokenId: tokenId,
            monthlyFee: monthlyFee,
            listedDate: block.timestamp,
            lockedMonths: lockedMonths
        });

        nfts[nftAddress][tokenId] = nft;

        emit NFTListed(
            nftAddress,
            NFTowner,
            RenterAddress,
            tokenId,
            monthlyFee,
            listedDate,
            lockedMonths
        );
    }

    /// @dev Claim nft back from escrow
    function unlistItem(address nftAddress, uint256 tokenId) external nonReentrant
    {
        // check nft ownership
        require(
            _isOwnerOfListedNFT(nftAddress, tokenId),
            "You don't own the NFT that you are claiming"
        );
        require( block.timestamp >
            nfts[nftAddress][tokenId].listedDate + nfts[nftAddress][tokenId].lockedMonths * 30 days
            , "NFT is not claimable yet");

        address owner = msg.sender;

        // send the nft back to the owner wallet
        IERC721(nftAddress).safeTransferFrom(address(this), owner, tokenId);

        // remove nft from escrow
        delete nfts[nftAddress][tokenId];
        nfts[nftAddress][tokenId].tokenId = 99999999999999999999; //testing something

        //struct doesnt exist anymre, so we dont have to write changes

        emit NFTUnlisted(owner, nftAddress, tokenId);
    }

    /// @dev Rent an NFT
    function rentItem(address nftAddress, uint256 tokenId, uint _OneMonthPayment) external nonReentrant
    {

         uint Pay = _OneMonthPayment;
        require(_isRentable(nftAddress, tokenId), "NFT is not rentable yet");
        require(
            !_isOwnerOfListedNFT(nftAddress, tokenId),
            "You can't rent your own nft"
        );
require(Pay >= nfts[nftAddress][tokenId].monthlyFee, " THe value is too low");

        address renter = msg.sender;
       


        // update nft renter
        NFTForEscrow storage nft = nfts[nftAddress][tokenId];
        nft.renter = renter;

        emit NFTRented(renter, nftAddress, tokenId);
    }

    /// @dev View nft for rent details
    function viewItem(address nftAddress, uint256 tokenId)
        external
        view
        returns (

        address , //address of NFT collection 
        address , // address of original NFT owner
        address , // address of person CURRENLTY renting
        uint256 , //toked ID of NFT in collection
        uint256 , //Fee paid per month to rent
        uint256 , // Date Listed
        uint256  //Months locked in SC for available rent

             )
    {
        NFTForEscrow storage nft = nfts[nftAddress][tokenId];

        return (
            nft.nftAddress,
            nft.owner,
            nft.renter,
            nft.tokenId,
           
            nft.monthlyFee,
            nft.listedDate,
            nft.lockedMonths
        );
    }

    /**
     * @dev See {IERC721Receiver-onERC721Received}.
     *
     * Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    function onERC721Received(
        address,
        address,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        return this.onERC721Received.selector;
    }

    // ----- Admin Functions


   
 

    /// @dev emergency function when an nft is stuck in escrow
    function recoverNFT(address nftAddress, uint256 tokenId)
        external
        onlyAdmin
        nonReentrant
    {
        address owner = nfts[nftAddress][tokenId].owner;
        // send the nft back to the owner wallet
        IERC721(nftAddress).safeTransferFrom(address(this), owner, tokenId);

        // remove nft from escrow
        delete nfts[nftAddress][tokenId];

        emit NFTUnlisted(owner, nftAddress, tokenId);
    }

    // ----- Private functions

    /// @dev Get the IERC721 interface of an address
    function _getIERC721(address addr) internal pure returns (IERC721) {
        return IERC721(addr);
    }

    /// @dev Is owner of the listed NFT
    function _isOwnerOfListedNFT(address nftAddress, uint256 tokenId)
        internal
        view
        returns (bool)
    {
        return nfts[nftAddress][tokenId].owner == msg.sender;
    }

    /// @dev is the nft rentable
    function _isRentable(address nftAddress, uint256 tokenId)
        internal
        view
        returns (bool)
    {
        return nfts[nftAddress][tokenId].renter == address(0) && nfts[nftAddress][tokenId].tokenId != 99999999999999999999;
    }


    function _isDirect(string memory rentType) internal pure returns (bool) {
        string memory direct = "direct";

        return
            keccak256(abi.encodePacked(rentType)) ==
            keccak256(abi.encodePacked(direct));
    }
}