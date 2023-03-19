const config = {
  title: 'Ringo Dingo App',
  description: 'Dapp to mint Ringo Dingo Avatars on the Crab EVM',
  contractAddress: '0x3aC22795304A27edb04Cfe2475DCEf0c5C8B5539',
  maxMintAmount: 1,
  presaleMaxMintAmount: 1,
  price: function(address) {
    if (address === '0xa09b260809915dA08f831A53da431Aa3c1d03618') {
      return 0.0; // mint for free
    } else {
      return 20000; // mint for 0.02 ETH
    }
  }
}

export { config }
