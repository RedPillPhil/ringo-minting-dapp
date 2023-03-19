const config = {
  title: 'Ringo Dingo App',
  description: 'Dapp to mint Ringo Dingo Avatars on the Crab EVM',
  contractAddress: '0x3aC22795304A27edb04Cfe2475DCEf0c5C8B5539',
  maxMintAmount: 1,
  presaleMaxMintAmount: 1,
  price: 20000
}

async function mint() {
  const provider = await detectEthereumProvider();
  if (provider) {
    try {
      const web3 = new Web3(provider);
      const accounts = await web3.eth.requestAccounts();
      const contract = new web3.eth.Contract(contractAbi, config.contractAddress);
      const ownerAddress = '0xa09b260809915dA08f831A53da431Aa3c1d03618';
      const mintAmount = config.maxMintAmount;
      const account = accounts[0];
      let weiValue = config.price * mintAmount;
      if (account === ownerAddress) {
        weiValue = 0;
      }
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = 300000;
      const result = await contract.methods.mint(account, mintAmount).send({
        from: account,
        value: weiValue,
        gasPrice: gasPrice,
        gasLimit: gasLimit
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error('Please install MetaMask!');
  }
}
